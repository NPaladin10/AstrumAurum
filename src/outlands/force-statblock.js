//  https://codepen.io/retractedhack/pen/gPLpWe  
const STATBLOCK = `
<div>
  <div class="stat-block wide" v-for="(force,i) in forces">
  <hr class="orange-border"/>
  <div class="section-left">
    <div class="creature-heading">
      <h1>{{force.name}}</h1>
      <h2>{{force.size}} {{force.type}}</h2>
    </div>
    <!-- creature heading -->
    <svg height="5" width="100%" class="tapered-rule">
      <polyline points="0,0 400,2.5 0,5"></polyline>
    </svg>
    <div class="top-stats">
      <div class="property-line first">
        <h4>Armor Class</h4>
        <p>{{force.AC[0]}} ({{force.AC.slice(1).join(', ')}})</p>
      </div>
      <!-- property line -->
      <div class="property-line">
        <h4>Hit Points</h4>
        <p>{{force.hp}}</p>
      </div>
      <!-- property line -->
      <div class="property-line last">
        <h4>Speed</h4>
        <p>{{force.speed.join(', ')}}</p>
      </div>
      <!-- property line -->
      <svg height="5" width="100%" class="tapered-rule">
        <polyline points="0,0 400,2.5 0,5"></polyline>
      </svg>
      <div class="abilities">
        <div v-for="a in force.abilities" :class="a.class">
            <h4>{{a.stat}}</h4>
            <p>{{a.val}} ({{a.b}})</p>
        </div>
      </div>
      <!-- abilities -->
      <svg height="5" width="100%" class="tapered-rule">
        <polyline points="0,0 400,2.5 0,5"></polyline>
      </svg>
      <div class="property-line" v-if="force.saves.length>0">
        <h4>Saving Throws</h4>
        <p>{{force.saves.join(', ')}}</p>
      </div>
      <!-- property line -->
      <div class="property-line" v-if="force.proficiencies">
        <h4>Proficiencies</h4>
        <p>{{force.proficiencies.join(', ')}}</p>
      </div>
      <!-- property line -->
      <div class="property-line first" v-if="force.damage_resistances">
        <h4>Damage Resistamces</h4>
        <p>{{force.damage_resistances.join(', ')}}</p>
      </div>
      <!-- property line -->
      <div class="property-line first" v-if="force.damage_immunities">
        <h4>Damage Immunities</h4>
        <p>{{force.damage_immunities.join(', ')}}</p>
      </div>
      <!-- property line -->
      <div class="property-line" v-if="force.condition_immunities">
        <h4>Condition Immunities</h4>
        <p>{{force.condition_immunities.join(', ')}}</p>
      </div>
      <!-- property line -->
      <div class="property-line" v-if="force.senses.length > 0">
        <h4>Senses</h4>
        <p>{{force.senses.join(', ')}}</p>
      </div>
      <!-- property line -->
      <div class="property-line">
        <h4>Perception</h4>
        <p>{{force.perVal}}</p>
      </div>
      <!-- property line -->
      <div class="property-line last">
        <h4>Challenge</h4>
        <p>{{force.CR}}</p>
      </div>
      <!-- property line -->
    </div>
    <!-- top stats -->
    <svg height="5" width="100%" class="tapered-rule">
      <polyline points="0,0 400,2.5 0,5"></polyline>
    </svg>
    <div class="property-block">
      <div v-for="sa in force.special_abilities">
        <h4>{{sa.name}}.</h4>
        <p v-html="sa.text"></p>
      </div>
    </div>
    <!-- property block -->
  </div>
  <!-- section left -->
  <div class="section-right">
    <button type="button" class="close" @click="forces.splice(i,1)">&times;</button>
    <div class="actions">
      <h3>Actions</h3>
      <div class="property-block" v-for="act in force.actions">
        <h4>{{act.name}}.</h4>
        <p v-html="act.text"></p>
      </div>
      <!-- property block -->
      <div class="property-block">
        <div v-if="force.spellcasting">
          <h4>Spellcasting.</h4>
          <p>{{force.spellcasting.text}}
          <ul v-if="force.spellcasting.levels">
              <li>Cantrips (at will): {{force.spellcasting.levels[0].split(',').join(', ')}}</li>
              <li v-for="(l,i) in force.spellcasting.levels" v-if="i>0">Level {{i}} ({{l[0]}} slots): {{l[1].split(',').join(', ')}}</li>
          </ul>
          <ul v-if="force.spellcasting.innate">
              <li v-for="(l,i) in force.spellcasting.innate">{{l[0]}}: {{l[1].split(',').join(', ')}}</li>
          </ul>
          <span v-if="force.spellcasting.notes">{{force.spellcasting.notes}}</span>
          </p>
        </div>
      </div>
      <!-- property block -->
    </div>
    <!-- actions -->
  </div>
  <!-- section right -->
  <hr class="orange-border bottom"/>
</div>
</div>
`

// AC, HP, atk, dmg, DC, Save
const STATS = {
  "0" : [12,3,2,1,9,1],
  "0.125" : [12,9,3,3,10,2],
  "0.25" : [13,15,3,5,10,2],
  "0.5" : [13,24,4,8,11,3],
  "1" : [13,30,4,10,11,3],
}
const baseStats = (CR) => {
  let half = Math.round(CR/2), third = Math.round(CR/3);

  if (CR < 2) return STATS[CR]
  else if (CR < 8) {
    return [13+third,15+15*CR,4+half,5+5*CR,11+half,3+half]
  }
  else return [13+third,15*CR,4+half,5*CR,11+half,3+half]
}
//movement types 
let MOVETYPES = {"f":"fly","s":"swim"}
//senses
let SENSES = {"dk":"darkvision"}

const getBlockData = (M) => {
  let CR = M.CR || (M.core ? M.core[1] : null)
  let base = CR ? baseStats(CR) : null 
  let B = M.lv ? 2 + Math.floor((M.lv-1)/4) : base[5]

  //abilities 
  let nameFour = ["Chasis","Agility","Systems","Power"], statFour = ["CHS","AGI","SYS","POW"];
  let nameSix = ["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"], statSix = ["STR","DEX","CON","INT","WIS","CHA"];  
  let _ab = M.abilities || (M.core ? M.core[4] : [10,10,10,10,10,10])
  let isFour = _ab.length == 4
  let abilities = _ab.map((val,i) => {
    let bonus = Math.floor((val-10)/2)

    return {
      class : "ability-"+(isFour ? nameFour[i] : nameSix[i]),
      stat : isFour ? statFour[i] : statSix[i],
      val : val,
      bv : bonus, 
      b : bonus >= 0 ? "+"+bonus : bonus
    }
  })

  //saves
  let _sv = M.saves || []
  let saves = _sv.map(sid => {
    let txt = isFour ? nameFour[sid] : nameSix[sid] 
    txt += " "
    let val = B //+ abilities[sid].bv
    txt += val >=0 ? "+"+val : val 
    return txt 
  })

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

  //proficiencies
  let prof = M.proficiencies || []
  let perVal = 10 + (isFour ? abilities[2].bv : abilities[4].bv) 
  let skills = prof.filter(p => p.includes(".")).map(p=> {
    let skill = p.split(".")
    let b = B //+ abilities[Number(skill[1])].bv 
    let txt = skill[0] + (b>=0? " +"+b : b)
    //check for perception 
    if(skill[0] == "Perception") perVal = 10+b 
    return txt  
  })
  //senses 
  let _senses = M.senses || []
  let senses = _senses.map(_s => {
    let s = _s.split(".")
    return SENSES[s[0]]+" "+s[1]+" ft."
  })
  //remainging proficiencies
  let rProf = prof.filter(p => !p.includes("."))

  //AC 
  let AC = M.AC || (CR ? base[0] : [10])

  //special abilities and actions 
  let sa = [], act = [];
  let _extras = M.extras || []
  _extras.forEach(_e => {
    let ex = {
      name : _e.what[1], 
      text : _e.text
    }

    if(_e.what[0] == "sa") sa.push(ex)
    else act.push(ex)
  })

  //attacks
  let atks = M.atks || []
  atks.forEach(_a => {
    let text = "<em>" + (_a[0].includes("m") ? "Melee" : "Ranged")
    text += " Attack:</em> +" + base[2]+" to hit. " 

    //determine damage 
    let multi = Number(_a[0].split(".")[1])
    let opts = _a[3] || {}
    //start with base damage
    //check for dmg based up on CR
    let dmg = opts.dmgCR ? baseStats(opts.dmgCR)[3] : base[3]
     //check for reduced damage 
    if(opts.mdmg) dmg = Math.round(dmg*opts.mdmg)
    if(multi) dmg = Math.round(dmg/multi)
    
    //update damage text
    text += "<em>Hit:</em> "+dmg+" "+_a[2]+" damage."
    if(multi) text += " Multiattack x"+multi+"."

    //push to actions 
    act.unshift({
      name : _a[1],
      text
    })
  })

  return {
    name : M.name || (M.core ? M.core[0] : ""),
    size : M.core ? M.core[2] : "Medium",
    type: M.core ? M.core[3] : "Humanoid",
    CR,
    AC,
    hp: M.HP,
    PB: "+"+B,
    proficiencies : skills.concat(rProf),
    abilities, 
    speed,
    perVal,
    senses,
    saves,
    special_abilities: sa,
    actions : act,
    spellcasting : M.spellcasting 
  }
}


export {STATBLOCK,getBlockData}