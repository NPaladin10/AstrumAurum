//frames 
import {STATBLOCK} from "./statblock.js"
//frames 
import {AI} from "./AI.js"
//frames 
import {getFrame,pcFrames} from "./frames.js"
//gear 
import * as gear from "./gear-data.js"

const SHORTSTATS = `
<div>
  <div v-for="f in allFrames" align="left">
    <h5 class="m-0">{{f.name}}</h5>
    <div>Rank: {{f.rank}}, HP: {{f.hp}}, </div>
  </div>
  `+STATBLOCK+`
</div>
`

const MECHA = {
  "name": "",
  "frame": "",
  "mods" : [],
  "gear": [],
  "eq" : [],
  "hp": 8,
}

//
const ABILITIES = ["Chasis", "Agility", "Systems", "Power"]

const RATK = ["sarm", "larm" , "hvy", "gde"]
const MATK = ["bmelee", "amelee"]

const manager = (app)=>{

  const core = {} 
  gear.weapons.forEach((w,i) => core["wp."+i] = w)
  gear.ARMOR.forEach((w,i) => core["ar."+i] = w)

  const mecha = {}

  class Mecha {
    constructor(id,fid,opts) {
      this._hash = chance.hash()
      this._id = id
      this._faction = fid || 0 
      this._opts = opts || {}

      //frame 
      let cr = this._opts.cr || -1
      this._frame = this.mecha ? getFrame(this.mecha.frame) : cr > -1 ? getFrame(id,cr) : getFrame(id)
      //check for actions
      if(this._opts.act) {
        this._frame.act.push(...this._opts.act)
      }

      this.hp = this.mecha ? this.mecha.hp : this._frame.HP 
      this._nAct = 0
      
      this._move = 0
      this._moveTo = []
      this._path = []
      this._p = [0,0]

      this._visible = []
      this._target = null
    }
    get isPC () {
      return this._frame.pc ? true : false 
    }
    get mecha () {
      return mecha[this._id] 
    }
    get name() {
      return this.mecha ? this.mecha.name : this._opts.name || this._frame.name
    }
    //display
    get char () {
      let colors = ["green","red"]
      return ["@",colors[this._faction]]
    }
    //Gear 
    get gear () {
      let gear = this.mecha ? this.mecha.gear : []
      return gear.reduce((all,g)=> {
        //get data
        let data = core[g]
        //push to what the gear is
        all[data.what].push(data) 
        return all 
      },{ar:[],ratk:[],matk:[],g:[]})
    }
    //AC
    get AC () {
      return this._frame.base[0]
    }
    //Attacks
    attack (atk,target) {
      let R = chance.d20() + this._frame.atkb
      let text = this.name+" attacks "+target.name+", rolled "+R
      let dmg = 0 
      if(R >= target.AC) {
        //get dmg
        dmg = atk.doDmg() 
        text += ", "+dmg+" dmg"
      }
      target.takeDmg(dmg)
      //update UI 
      app.UI.main.update.push(text) 
    }
    get maxAtkR () {
      return this.ratk.reduce((max,atk)=> max = atk.r > max ? atk.r : max,1)
    }
    get atks () {
      return this.ratk.concat(this.matk)
    }
    get ratk () {
      //first check faction - player vs npc
      //always use gear first
      return this._faction == 0 && this.gear.ratk.length>0 ? this.gear.ratk : this._frame.ratk 
    }
    get matk () {
      return this._faction == 0 && this.gear.matk.length>0 ? this.gear.matk : this._frame.matk
    }
    takeDmg (dmg) {
      this.hp -= dmg
    }
    //movement
    get rMoves () { return this._move }
    get maxMove () {
      let m = this._frame.move 
      return Number(m[0].slice(1))/5
    }
    get pos () { 
      return {
        x:this._p[0],
        y:this._p[1]
      }
    }
    move (p) {
      this._move--
      this._p = p.slice()
    }
    doMove () {
      this._move += this.maxMove

      //update UI 
      if(this._hash == app.map.active._hash){
        app.UI.main.moves = this._move
      }
    }
    //actions
    init () {
      this._nAct = 0 
      app.UI.main.actions = this.actions.slice()
      app.map.draw()

      if(this._faction > 0) AI(app,this)
    }
    //FOV
    FOV () {
      let M = app.mechaManager, m = this;
      let visible = this._visible = []
      let fov = new ROT.FOV.PreciseShadowcasting(function(x,y){
        var key = x+"."+y;
        return app.map.zones[key] ? false : true
      })
      //targeting 
      fov.compute(...this._p, 20, function(x, y, r, vis) {
        let mAtP = M.byPos([x,y])
        if(mAtP && mAtP._faction != m._faction){
          visible.push([mAtP,r])
        }
      })
    }
    //pathfind 
    pathfind (newPath) { 
      /* prepare path to given coords */
      let astar = new ROT.Path.AStar(...this._moveTo, function (x,y) {
        let key = x+"."+y
        return app.map.zones[key] ? false : true
      })

      //reset path
      /* compute from given coords #1 */
      astar.compute(...this._p, function (x, y){
        newPath.push([x,y])
      })
      return newPath
    }
    wander () {
      //random move 
      let n = this.maxMove
      for(let i = 0; i < n; i++){
        let p = app.map.randomMove(...this._p)
        p = chance.pickone(p).split(".").map(Number)
        //do move 
        this.move(p)  
      }
      //draw map 
      app.map.draw()
    } 
    get actions () {
      if(this._faction > 0) return []

      let act = []
      if(this._nAct < 2) act.push(["Move"])

      return act 
    }
    act (what) {      
      if(what[0] == "Move"){
        this.doMove()
        this._nAct++
      }
      else if(what[0] == "Next Turn"){
        app.UI.main.aid++
        if(app.UI.main.aid >= app.mechaManager.actives.length){
          app.UI.main.aid = 0 
        }
        app.map.active.init()
      }
      else if (what[0] == "attack"){
        this._nAct++ 
        //roll for attack 
        this.attack(what[1],what[2])
      }

      //update UI 
      if(this._hash == app.map.active._hash){
        app.UI.main.actions = this.actions
      }
    }
  }

  app.mechaManager = {
    _active : [],
    //activate a mecha and drop it in 
    activate (id,fid,opts) {
      let i = this._active.length
      this._active.push(new Mecha(id,fid,opts)) 
      return this._active[i]      
    },
    get pcFrames () { return pcFrames },
    get actives () { return this._active },
    byPos (p) { 
      return this.actives.find(a => a._p.join(".") == p.join("."))
    }
  }

  //UI 
  Vue.component("frames",{
    template: SHORTSTATS,
    data : function() {
      return {
        allFrames : pcFrames.map(f=> f.statblock)
      }
    },
    computed : {}
  })
}

export {manager}