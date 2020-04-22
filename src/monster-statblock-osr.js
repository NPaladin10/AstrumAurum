const SHORTBLOCK = `
<div class="px-1 border" align="left">
  <bi>{{M.name}}</bi>, <em>{{M.size}} {{M.type}}</em>
  <div class="px-1 font-sm">
    {{M.HD}}<span v-if="typeof M.HD === 'number'"> HD</span>, AC {{M.AC}}, Atk {{M.bonus[0]}}, Sv {{M.bonus[1]}}, <span v-html="M.attacks.join(', ')"></span>
    <div v-if="M.immune"><strong>Immune:</strong> {{M.immune.join(', ')}}</div>
    <div v-if="M.resist"><strong>Resistance:</strong> {{M.resist.join(', ')}}</div>
    <div v-if="M.eShort.length>0">{{M.eShort.join(', ')}}</div>
    <div v-if="M.spells"><strong>Spellcaster</strong> 
      <div v-for="s in M.spells" class="px-1">{{s[0]}} - <em>{{s.slice(1).join(', ')}}</em></div>
    </div>
    <div v-for="e in M.extras"><strong>{{e.name}}:</strong> {{e.text}}</div>
  </div>   
</div>
`

//movement types 
let MOVETYPES = {"f":"fly","s":"swim"}
//senses
let SENSES = {"dk":"darkvision"}
//EP 
const EP = [9,10,12,13,14,15,17,18,19,20,22,23,24,25,27]
//Saves
const SAVES = [17,16,14,13,12,11,9,8,6,5,4,3]

// AC, HP, atk, dmg, DC, Save
const baseStats = (CR) => {
  let half = Math.round(CR/2), third = Math.round(CR/3);
  let sv = CR>12 ? 3 : SAVES[CR-1]
  let atk = Math.round(CR/1.5)

  if (CR == 1) return [13,30,atk,10,11,sv]
  else if (CR < 8) {
    return [13+third,15+15*CR,atk,5+5*CR,11+half,sv]
  }
  else return [13+third,15*CR,atk,5*CR,11+half,sv]
}

const getBlockData = (M) => {
  let lv = M.core[1], base = baseStats(lv);

  //abilities 
  let nameSix = ["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"], statSix = ["STR","DEX","CON","INT","WIS","CHA"];  

  let bonus = ["+"+base[2],base[5]]

  //speed
  let _spd = M.speed || []
  //make sure first is walking
  if(!Number.isInteger(_spd[0])) _spd.unshift(30)
  let speed = _spd.map((mv,i) => {
    let res = mv 
    if (i > 0) {
      let _mv = mv.split(".")
      res = MOVETYPES[_mv[0]] + " " + _mv[1]
    }
    return res + " ft."
  })

  //senses 
  let _senses = M.senses || []
  let senses = _senses.map(_s => {
    let s = _s.split(".")
    return SENSES[s[0]]+" "+s[1]+" ft."
  })
  //remainging proficiencies

  //AC 
  let AC = M.core[5]

  //handle spellcasting
  let spells = null, ep = null;
  const spellcaster = (_sc) =>{
    spells = _sc.spells.map(s => {
      return s.split(",")
    })
  }

  //special abilities and actions 
  let extras = [], eShort = [];
  let _extras = M.extras || []
  _extras.forEach(_e => {
    let name = _e.what[1]
    if(name == "Spellcasting") return spellcaster(_e)
    if(!_e.text) {
      eShort.push(name)
    }
    else {
      extras.push({name,text:_e.text})
    }
  })

  //attacks
  let atks = M.atks || []
  let attacks = []
  atks.forEach(_a => {
    let text = "<strong>"+_a[1] +"</strong> "+ _a[3] 
    //push to list 
    attacks.push(text)
  })

  return {
    name : M.name || (M.core ? M.core[0] : ""),
    size : M.core ? M.core[2] : "Medium",
    type: M.core ? M.core[3] : "Humanoid",
    HD: M.core[4],
    lv,
    AC,
    bonus,
    attacks,
    extras,
    eShort,
    spells,
    ep,
    resist : M.resist ? M.resist.split(",") : null,
    immune : M.immune ? M.immune.split(",") : null,
  }
}


export {SHORTBLOCK,getBlockData}