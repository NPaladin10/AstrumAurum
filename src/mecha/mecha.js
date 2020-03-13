//gear 
import * as gear from "./gear-data.js"

const CHASIS = {
  "name": "",
  "rank": 1,
  "abilities": [1, 0, -1, -2],
  "powers": []
}
const MECHA = {
  "name": "",
  "chasis": "",
  "powers": [],
  "gear": [],
  "hp": 8,
}
//name, id, rank
const POWER = ["Name",0,0]

const ABILITIES = ["Chasis", "Agility", "Systems", "Power"]

const FRAMES = {
  "generic" : ["Generic",1,[0,1,-1,-2],[]]
}

const NPCS = {
  "generic-a" : ["Generic A","generic",[],["*wp.11","*ar.0"]]
}

const manager = (app)=>{

  const core = {} 
  Object.entries(FRAMES).forEach(F => {
    core[F[0]] = JSON.parse(JSON.stringify(CHASIS))

    let ids = ["name","rank","abilities","powers"]
    ids.forEach((id,i) => core[F[0]][id] = F[1][i])
  })
  Object.entries(NPCS).forEach(F => {
    core[F[0]] = JSON.parse(JSON.stringify(MECHA))

    let ids = ["name","chasis","powers","gear"]
    ids.forEach((id,i) => core[F[0]][id] = F[1][i])
  })
  gear.WEAPONS.forEach((w,i) => core["wp."+i] = w)
  gear.ARMOR.forEach((w,i) => core["ar."+i] = w)

  const chasis = {}
  const mecha = {}
  const powers = {}

  class Mecha {
    constructor(id,fid) {
      this._hash = chance.hash()
      this._id = id
      this._faction = fid || 0 

      this._nAct = 0
      this._move = 0
      this._p = [0,0]
    }
    get data () { 
      let _m = this._id
      return NPCS[_m] ? core[_m] : mecha[_m] 
    }
    get name() {
      return this.data.name
    }
    get npc () { return NPCS[this._id] ? true : false }
    get coreFrame () { return FRAMES[this.data.chasis] ? true : false } 
    //display
    get char () {
      let colors = ["green","red"]
      return ["@",colors[this._faction]]
    }
    //Chasis 
    get chasis() {
      let _c = this.data.chasis
      return FRAMES[_c] ? core[_c] : chasis[_c]
    }
    get rank() {
      return this.chasis.rank
    }
    get abilities () {
      return this.chasis.abilities
    }
    //Gear 
    get gear () {
      return this.data.gear.reduce((all,g)=> {
        let id = g.charAt(0) == "*" ? g.slice(1) : g 
        let what = id.slice(0,2)
        let data = core[id]

        all[what].push(data)
        return all 
      },{ar:[],wp:[],g:[]})
    }
    //Powers
    get nP() {
      return 2+this.rank-1
    }
    get powers () {
      return this.chasis.powers.concat(this.data.powers).map(p=> {
        return Array.isArray(p) ? p : powers[p]
      })
    }
    //movement
    get rMoves () { return this._move }
    get maxMove () {
      return 30 / 5 
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
      console.log(this.gear)
      this._nAct = 0 
      app.UI.main.actions = this.actions.slice()
      app.map.draw()

      if(this._faction > 0) this.AI()
    }
    AI () {
      //random move 
      let n = this.maxMove
      for(let i = 0; i < n; i++){
        let p = app.map.randomMove(...this._p)
        p = chance.pickone(p).split(".").map(Number)
        //do move 
        this.move(p)  
        //draw map 
        app.map.draw()
      }
      //next turn 
      this.act(["Next Turn"])
    }
    get actions () {
      if(this._faction > 0) return []

      let act = []
      if(this._nAct < 2) act.push(["Move"])
      act.push(["Next Turn"])

      return act 
    }
    act (what) {      
      if(what[0] == "Move"){
        this.doMove()
        this._nAct++
      }
      if(what[0] == "Next Turn"){
        app.UI.main.aid++
        if(app.UI.main.aid >= app.mechaManager.actives.length){
          app.UI.main.aid = 0 
        }
        app.map.active.init()
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
    activate (id,fid) {
      let i = this._active.length
      this._active.push(new Mecha(id,fid)) 
      return this._active[i]      
    },
    get actives () { return this._active },
    byPos (p) { 
      return this.actives.find(a => a._p.join(".") == p.join("."))
    }
  }
}

export {manager}