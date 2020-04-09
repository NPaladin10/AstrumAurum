import {UI as aboutUI} from "./about.js"
import {UI as factionUI} from "./factions.js"

const resize = () => {
  //set svg to window 
    let iW = window.innerWidth
    let iH = window.innerHeight
}

//check for resize
window.addEventListener("resize", resize )

/* 
UI 
*/
const UI = (app)=>{
  factionUI(app)
  aboutUI(app)
  
  const mecha = app.mechaManager 

  const view = 40
  const display = app.display = new ROT.Display({width:view, height:view,forceSquareRatio:true})

  const map = app.map = {
    map : null,
    size : 128,
    zones : {},
    get active () {
      return mecha.actives[app.UI.main.aid]
    },
    get pos () {
      return this.active.pos 
    }, 
    get activePos () { 
      let a = {}
      mecha.actives.forEach(m =>{ 
        a[m._p.join(".")] = m.char
      }) 
      return a 
    },
    init () {
      this.map = new ROT.Map.Uniform(this.size, this.size, {roomDugPercentage:0.5});
      this.map.create()

      let rooms = this.map.getRooms()
      rooms.forEach(r => {
        for(let x = r._x1; x<r._x2; x++){
          for(let y = r._y1; y<r._y2; y++){
            this.zones[x+"."+y] = ["|","white"]
          }
        }
      })
    },
    //get a list of empty places in an area
    open(x1,x2,y1,y2) {
      let open = []
      for(let x = x1; x <= x2; x++){
          for(let y = y1; y <= y2; y++){
            if(x < 0 || y < 0 || x > this.size-1 || y > this.size-1) continue
            
            let pid = [x,y].join(".")
            if(this.zones[pid] || this.activePos[pid]) continue
            
            open.push(pid)
          }
        }
      
      return open
    },
    //clear an area
    clear(x1,x2,y1,y2) {
      for(let x = x1; x < x2; x++){
          for(let y = y1; y < y2; y++){
            let pid = [x,y].join(".")
            let i = this.zones.indexOf(pid)
            if(i>-1) this.zones.splice(i,1)
          }
        }
    },
    randomMove (x,y) {
      return this.open(x-1,x+1,y-1,y+1)
    },
    //seet up a seek queue given a current position 
    seekQueue (x,y) {
      let max = this.size-1
      let half = Math.round(max/2)
      // tr, hl, br, bl, hr, tl  
      let q = [[max,0],[0,half],[max,max],[0,max],[max,half],[0,0]]
      let _open = q.map(_q => _q.map(qi => qi == 0 ? [0,10] : qi == max ? [max-10,max] : [qi-5,qi+5]).flat())
        .map(_q => this.open(..._q))
      //find closest q 
      let qStart = q.reduce((idx,_q,i)=>{
        //get distance
        let dx = _q[0]-x, dy = _q[1]-y;
        let d = Math.sqrt(dx*dx+dy*dy)
        //check for distance 
        return d < idx[0] ? [d,i] : idx 
      },[Infinity,-1])
      //the q to seek 
      let i = qStart[1] 
      let p = i == 5 ? _open[0] : _open[i+1]
      //return a viable point
      return chance.pickone(p)
    },
    //check for a move 
    move (d,n) {
      let pos = this.pos
      let pid = pos.x+"."+pos.y, nid, next = Object.assign({},pos);
      //check move
      next[d] += n
      nid = next.x+"."+next.y
      //check where it will be 
      let nchar = this.zones[nid] ? "." : ""
      if(this.active.rMoves>0 && nchar != "." && next[d] > -1 && next[d] < this.size){
        //now move
        this.active.move([next.x,next.y]) 
        //redraw
        this.draw()
      }
    },
    draw () {
      //get UI
      let UI = app.UI.main
      let pos = this.pos
      let max = this.size, zones = this.zones;
      //display starting point
      let dx = pos.x - 20, dy = pos.y - 20;
      dx = dx < 0 ? 0 : dx > max-view ? max-view : dx 
      dy = dy < 0 ? 0 : dy > max-view ? max-view : dy

      //determine the character
      const char = (x,y) => {
        let pid = [x,y].join(".")
        let c = this.zones[pid] || ["",""] 
        c = this.activePos[pid] || c 
        return c 
      }

      //draw the core map 
      for(let x = 0; x<40; x++){
          for(let y = 0; y<40; y++){
            let c = char(dx+x,dy+y)
            c = ["|",""].includes(c[0]) || c[1] == "green" ? c : ["",""]             
            display.draw(x,y,...c)
          }
        }

      //display point for player 
      let dpx = view/2, dpy = view/2;
      dpx = pos.x < dpx ? pos.x : pos.x > max-dpx ? view-(max-pos.x) : dpx 
      dpy = pos.y < dpy ? pos.y : pos.y > max-dpy ? view-(max-pos.y) : dpy 

      //draw character 
      const drawChar = (what,color) => {
        color = color || ""
        let p = what._p
        display.draw(p[0]-dx,p[1]-dy,...what.char,color)
      }

      //fov 
      mecha.actives.forEach(m => {
        //only compute FOV for player 
        if(m._faction > 0) return
        //targeting 
        m.FOV()
        //draw 
        m._visible.forEach(v => drawChar(v[0]))
      })
      UI.visible = this.active._visible.slice()

      //visible player 
      if(this.active._faction == 0) drawChar(this.active,"white") 

      //visible target 
      if(UI.target) drawChar(UI.target,"#0f0")  

      //update the UI 
      if(app.UI.main) {
        app.UI.main.pos = [pos.x,pos.y]
        app.UI.main.moves = this.active.rMoves
      }
    }
  }


  //ROT.RNG.setSeed(12345);

  const init = () => {
    document.getElementById("display").appendChild(display.getContainer())  
  }
  
  //creates the VUE js instance
  app.UI.main = new Vue({
    el: '#ui-main',
    data: {
      show: "about",
      allFrames : [],
      now: Date.now() / 1000,
      aid : -1,
      pos : [0,0],
      moves : 0,
      actions : [],
      visible : [],
      tid : -1,
      atk : null,
      update : []
    },
    mounted() {
      setInterval(()=>this.now = Date.now() / 1000, 500)
      //init()      
      //map.init()
      //drop mecha 
      for(let i = 0; i < 4; i++){
        //clear drop zone 
        let dz = map.open(0,6,0,6)
        //activate mecha 
        let m = mecha.activate("generic",0,{
          cr:0.125,
          act : [["Smash","maw"],["Rifle","raw"]]
        })
        //drop 
        m._p = chance.pickone(dz).split(".").map(Number)
      }
      for(let i = 0; i < 2; i++){
        //clear drop zone 
        let dz = map.open(9,15,0,6)
        //activate mecha 
        let m = mecha.activate("hive-blade",1,{cr:0.5})
        let n = mecha.activate("hive-spine",1)
        //drop 
        m._p = chance.pickone(dz).split(".").map(Number)
        n._p = chance.pickone(dz).split(".").map(Number)
      }

      Vue.nextTick(()=>{
        this.aid = 0 
        //map.draw()
        //map.active.init()
      })
    },
    computed: {
      day() {
        return app.day
      },
      active () { return mecha.actives[this.aid] },
      targets () {
        return this.visible.map(v => v[0])
      },
      target () { return this.targets[this.tid] },
      attacks () {
        //return attacks that are greater than the range of the target 
        return this.active.atks.filter(atk => atk.r >= this.visible[this.tid][1])
      }
    },
    methods: {
      move (d,n) { map.move(d,n) },
      act (what) { 
        if(what != "attack") map.active.act(what) 
        else {
          map.active.act(["attack",this.atk,this.target])
        }
      },
      setTarget(i) {
        this.tid = i
        map.draw()
      }
    }
  })

}

export {UI}
