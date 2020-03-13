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
      for(let x = x1; x < x2; x++){
          for(let y = y1; y < y2; y++){
            let pid = [x,y].join(".")
            if(x > 0 && y > 0 && x < this.size-1 && y < this.size-1 && !this.zones[pid] && !this.activePos[pid]) open.push(pid)
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
      //delete in range 
      app.UI.main.inRange = []
      //fov 
      let fov = new ROT.FOV.PreciseShadowcasting(function(x,y){
        var key = x+"."+y;
        return app.map.zones[key] ? false : true
      })
      mecha.actives.forEach(m => {
        //only compute FOV for player 
        if(m._faction > 0) return

        fov.compute(m.pos.x, m.pos.y, 5, function(x, y, r, vis) {
          var c = char(x,y)
          display.draw(x-dx, y-dy, ...c, "#660")

          //done if not the active mecha 
          if(m._hash != app.map.active._hash) return

          //push who is within range 
          let mAtP = mecha.byPos([x,y])
          if(mAtP && mAtP._faction > 0){
            app.UI.main.inRange.push(mAtP._hash)
          }
        })
      })
      

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
      now: Date.now() / 1000,
      aid : -1,
      pos : [0,0],
      moves : 0,
      actions : [],
      inRange : [],
    },
    mounted() {
      setInterval(()=>this.now = Date.now() / 1000, 500)
      init()      
      map.init()
      //drop mecha 
      for(let i = 0; i < 2; i++){
        //clear drop zone 
        let dz = map.open(0,6,0,6)
        //activate mecha 
        let m = mecha.activate("generic-a")
        //drop 
        m._p = chance.pickone(dz).split(".").map(Number)
      }
      for(let i = 0; i < 2; i++){
        //clear drop zone 
        let dz = map.open(9,15,0,6)
        //activate mecha 
        let m = mecha.activate("generic-a",1)
        //drop 
        m._p = chance.pickone(dz).split(".").map(Number)
      }

      Vue.nextTick(()=>{
        this.aid = 0 
        map.draw()
        map.active.init()
      })
    },
    computed: {
      day() {
        return app.day
      },
      active () { return mecha.actives[this.aid] }
    },
    methods: {
      move (d,n) { map.move(d,n) },
      act (what) { map.active.act(what) }
    }
  })

}

export {UI}
