//frames 
import {EXTRAS} from "./extras.js"

//http://blogofholding.com/?p=7338

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

// core : name, cr, hp, move 
// action : name, type, dmg/ac    
// mods : atk, ac, saves, stats
const FRAMES = {
  "generic" : {
    "_name" : ["generic","g"],
  },
  "steel-brb" : {
    "pc": true,
    "_name" : ["Barbarian1","B"],
    "lv" : 3,
    "hp" : 32,
    "abilities" : [15,14,9,9],
    "unarmAC" : 14,
    "saves" : [0,1],
    "proficiencies" : ["Perception.2","Light & Medium Armor","Shields","Simple & Martial Weapons"],
    "extras" : ["RflxAI","OD"]
  },
  "steel-bzk" : {
    "pc": true,
    "_name" : ["Barbarian2","B"],
    "lv" : 7,
    "hp" : 68,
    "abilities" : [15,14,10,10],
    "unarmAC" : 14,
    "saves" : [0,1],
    "nAtks" : 2,
    "proficiencies" : ["Perception.2","Light & Medium Armor","Shields","Simple & Martial Weapons"],
    "extras" : ["nAtks","ImpvRflxAI","OD","UnarmoredMove"]
  },
  "steel-bzk2" : {
    "pc": true,
    "_name" : ["Barbarian3","B"],
    "lv" : 13,
    "hp" : 135,
    "abilities" : [17,14,12,10],
    "unarmAC" : 15,
    "saves" : [0,1],
    "nAtks" : 2,
    "proficiencies" : ["Perception.2","Light & Medium Armor","Shields","Simple & Martial Weapons"],
    "extras" : ["nAtks","ImpvRflxAI","OD","UnarmoredMove","IncCritDmg","ODLock"]
  },
  "steel-bzk3" : {
    "pc": true,
    "_name" : ["Barbarian4","B"],
    "lv" : 20,
    "hp" : 245,
    "abilities" : [21,16,12,10],
    "unarmAC" : 18,
    "saves" : [0,1],
    "nAtks" : 2,
    "proficiencies" : ["Perception.2","Light & Medium Armor","Shields","Simple & Martial Weapons"],
    "extras" : ["nAtks","ImpvRflxAI","OD","UnarmoredMove","IncCritDmg","ImpvODLock"]
  },
  "steel-dgn" : {
    "pc": true,
    "_name" : ["BarbarianDragon","B"],
    "lv" : 8,
    "hp" : 77,
    "abilities" : [15,14,10,12],
    "unarmAC" : 14,
    "saves" : [0,1],
    "nAtks" : 2,
    "proficiencies" : ["Perception.2","Light & Medium Armor","Shields","Simple & Martial Weapons"],
    "extras" : ["nAtks","ImpvRflxAI","OD","UnarmoredMove","ElemBlast"]
  },
  "steel-dgn2" : {
    "pc": true,
    "_name" : ["BarbarianDragon2","B"],
    "lv" : 12,
    "hp" : 125,
    "abilities" : [17,14,10,12],
    "unarmAC" : 14,
    "saves" : [0,1],
    "nAtks" : 2,
    "proficiencies" : ["Perception.2","Light & Medium Armor","Shields","Simple & Martial Weapons"],
    "extras" : ["nAtks","ImpvRflxAI","OD","UnarmoredMove","IncCritDmg","ODLock","ElemBlast","CrushingAura"]
  },
    "steel-dgn3" : {
    "pc": true,
    "_name" : ["BarbarianDragon3","B"],
    "lv" : 16,
    "hp" : 165,
    "abilities" : [17,14,10,14],
    "unarmAC" : 15,
    "saves" : [0,1],
    "nAtks" : 2,
    "proficiencies" : ["Perception.2","Light & Medium Armor","Shields","Simple & Martial Weapons"],
    "extras" : ["nAtks","ImpvRflxAI","OD","UnarmoredMove","IncCritDmg","ImpvODLock","ElemBlast","CrushingAura","ODFlight"]
  },
  "steel-fighter" : {
    "pc": true,
    "_name" : ["FighterBase","F"],
    "lv" : 2,
    "hp" : 20,
    "abilities" : [15,12,11,10],
    "saves" : [0,1],
    "proficiencies" : ["Perception.2","All Armor","Shields","Simple & Martial Weapons"],
    "extras" : ["EnhcPlate", "RepairCharge", "Surge"]
  },
  "steel-champ1" : {
    "pc": true,
    "_name" : ["FighterChampion1","F"],
    "lv" : 5,
    "abilities" : [15,12,13,10],
    "hp" : 44,
    "saves" : [0,1],
    "nAtks" : 2,
    "proficiencies" : ["Perception.2","All Armor","Shields","Simple & Martial Weapons"],
    "extras" : ["nAtks","EnhcPlate", "RepairCharge", "Surge","ImpvCrit"]
  },
  "steel-champ2" : {
    "pc": true,
    "_name" : ["FighterChampion2","F"],
    "lv" : 10,
    "abilities" : [17,14,13,10],
    "hp" : 94,
    "saves" : [0,1],
    "nAtks" : 2,
    "proficiencies" : ["Perception.2","All Armor","Shields","Simple & Martial Weapons"],
    "extras" : ["nAtks","TgtAI","EnhcPlate", "RepairCharge", "Surge","Indomitable", "ImpvCrit", "AthleteRig"]
  },
    "steel-champ3" : {
    "pc": true,
    "_name" : ["FighterChampion3","F"],
    "lv" : 15,
    "abilities" : [19,16,13,10],
    "hp" : 154,
    "saves" : [0,1],
    "nAtks" : 3,
    "proficiencies" : ["Perception.2","All Armor","Shields","Simple & Martial Weapons"],
    "extras" : ["nAtks","TgtAI","EnhcPlate", "RepairCharge", "Surge","Indomitable", "SupCrit", "AthleteRig"]
  },
  "steel-marks1" : {
    "pc": true,
    "_name" : ["FighterArcher1","F"],
    "lv" : 6,
    "abilities" : [12,17,13,10],
    "hp" : 46,
    "saves" : [0,1],
    "nAtks" : 2,
    "proficiencies" : ["Perception.2","All Armor","Shields","Simple & Martial Weapons"],
    "extras" : ["nAtks","TgtAI", "RepairCharge", "Surge","QckShot"]
  },
  "steel-marks2" : {
    "pc": true,
    "_name" : ["FighterArcher2","F"],
    "lv" : 12,
    "abilities" : [14,19,13,10],
    "hp" : 100,
    "saves" : [0,1],
    "nAtks" : 3,
    "proficiencies" : ["Perception.2","All Armor","Shields","Simple & Martial Weapons"],
    "extras" : ["nAtks","ImpvTgtAI", "RepairCharge", "Surge","Indomitable", "QckShot", "AITrack"]
  },
  "steel-marks3" : {
    "pc": true,
    "_name" : ["FighterArcher3","F"],
    "lv" : 16,
    "abilities" : [14,20,14,12],
    "hp" : 132,
    "saves" : [0,1],
    "nAtks" : 3,
    "proficiencies" : ["Perception.2","All Armor","Shields","Simple & Martial Weapons"],
    "extras" : ["nAtks","ImpvTgtAI", "RepairCharge", "Surge","Indomitable", "QckShot", "AITrack","ImpvRatkCrit"]
  },
  "steel-marks4" : {
    "pc": true,
    "_name" : ["FighterArcher4","F"],
    "lv" : 20,
    "abilities" : [16,20,14,12],
    "hp" : 184,
    "saves" : [0,1],
    "nAtks" : 4,
    "proficiencies" : ["Perception.2","All Armor","Shields","Simple & Martial Weapons"],
    "extras" : ["nAtks","SupTgtAI", "RepairCharge", "Surge","Indomitable", "QckShot", "AITrack","ImpvRatkCrit"]
  },
  "onyx-hunt1" : {
    "pc": true,
    "_name" : ["RangerHunter1","H"],
    "lv" : 2,
    "abilities" : [11,15,12,10],
    "hp" : 16,
    "saves" : [0,1],
    "nAtks" : 1,
    "proficiencies" : ["Perception.2","Light & Medium armor", "Shields", "Simple & Martial weapons"],
    "extras" : ["FoeDB", "TgtAI", "TerrainRig"]
  },
  "onyx-hunt2" : {
    "pc": true,
    "_name" : ["RangerHunter2","H"],
    "lv" : 6,
    "abilities" : [11,17,12,10],
    "hp" : 40,
    "saves" : [0,1],
    "nAtks" : 2,
    "proficiencies" : ["Perception.2","Light & Medium armor", "Shields", "Simple & Martial weapons"],
    "extras" : ["FoeDB","TgtAI","nAtks","TerrainRig","HunterAI"]
  },
  "onyx-hunt3" : {
    "pc": true,
    "_name" : ["RangerHunter3","H"],
    "lv" : 6,
    "abilities" : [11,17,14,10],
    "hp" : 64,
    "saves" : [0,1],
    "nAtks" : 2,
    "proficiencies" : ["Perception.2","Light & Medium armor", "Shields", "Simple & Martial weapons"],
    "extras" : ["FoeDB","TgtAI","nAtks","TerrainRig","HunterAI","ActiveCammo"]
  },
  "onyx-hunt4" : {
    "pc": true,
    "_name" : ["RangerHunter4","H"],
    "lv" : 15,
    "abilities" : [13,17,14,10],
    "hp" : 109,
    "saves" : [0,1],
    "nAtks" : 2,
    "proficiencies" : ["Perception.2","Light & Medium armor", "Shields", "Simple & Martial weapons"],
    "extras" : ["FoeDB","TgtAI","nAtks","TerrainRig","HunterAI","ActiveCammo","Volley"]
  },
  "onyx-hunt5" : {
    "pc": true,
    "_name" : ["RangerHunter5","H"],
    "lv" : 20,
    "abilities" : [15,17,16,10],
    "hp" : 164,
    "saves" : [0,1],
    "nAtks" : 2,
    "proficiencies" : ["Perception.2","Light & Medium armor", "Shields", "Simple & Martial weapons"],
    "extras" : ["FoeDB","TgtAI","nAtks","TerrainRig","HunterAI","ActiveCammo","Volley","EnhcSense"]
  },
  "onyx-shdw1" : {
    "pc": true,
    "_name" : ["ThiefShadow","H"],
    "lv" : 3,
    "abilities" : [11,15,12,10],
    "hp" : 18,
    "saves" : [1,2],
    "nAtks" : 1,
    "proficiencies" : ["Perception.2","Stealth.1","Light armor", "Simple weapons", "Finesse Weapons", "Pistols"],
    "extras" : ["SneakAI", "AgileRig", "ShadowWpn"]
  },
  "onyx-shdw2" : {
    "pc": true,
    "_name" : ["ThiefShadow2","H"],
    "lv" : 8,
    "abilities" : [11,17,12,12],
    "hp" : 43,
    "saves" : [1,2],
    "nAtks" : 1,
    "proficiencies" : ["Perception.2","Stealth.1","Light armor", "Simple weapons", "Finesse Weapons", "Pistols"],
    "extras" : ["SneakAI", "AgileRig", "ShadowWpn"]
  },
  "onyx-shdw3" : {
    "pc": true,
    "_name" : ["ThiefShadow3","H"],
    "lv" :14,
    "abilities" : [13,17,14,12],
    "hp" : 87,
    "saves" : [1,2],
    "nAtks" : 1,
    "proficiencies" : ["Perception.2","Stealth.1","Light armor", "Simple weapons", "Finesse Weapons", "Pistols"],
    "extras" : ["SneakAI", "AgileRig", "Blindsense","ShadowWpn", "ShadowStep", "ShdwWeak"]
  },
  "onyx-shdw4" : {
    "pc": true,
    "_name" : ["ThiefShadow4","H"],
    "lv" :20,
    "abilities" : [13,19,14,14],
    "hp" : 123,
    "saves" : [1,2],
    "nAtks" : 1,
    "proficiencies" : ["Perception.2","Stealth.1","Light armor", "Simple weapons", "Finesse Weapons", "Pistols"],
    "extras" : ["SneakAI", "AgileRig", "Blindsense", "Elusive", "MoveMaster", "ShadowWpn", "ShadowStep", "ShdwWeak"]
  },
  "saph-wiz1" : {
    "pc": true,
    "_name" : ["Wizard1","W"],
    "lv" :2,
    "abilities" : [10,12,15,11],
    "hp" : 10,
    "saves" : [2,3],
    "nAtks" : 1,
    "proficiencies" : ["Arcana.2","Pistols"],
    "extras" : ["WzSpells"]
  },
  "saph-wiz2" : {
    "pc": true,
    "_name" : ["Wizard2","W"],
    "lv" :8,
    "abilities" : [12,12,17,11],
    "hp" : 42,
    "saves" : [2,3],
    "nAtks" : 1,
    "proficiencies" : ["Arcana.2","Pistols"],
    "extras" : ["WzSpells"]
  },
  "saph-wiz3" : {
    "pc": true,
    "_name" : ["Wizard3","W"],
    "lv" :14,
    "abilities" : [12,12,19,11],
    "hp" : 72,
    "saves" : [2,3],
    "nAtks" : 1,
    "proficiencies" : ["Arcana.2","Pistols"],
    "extras" : ["WzSpells"]
  },
  "saph-wiz4" : {
    "pc": true,
    "_name" : ["Wizard4","W"],
    "lv" :20,
    "abilities" : [12,14,20,12],
    "hp" : 102,
    "saves" : [2,3],
    "nAtks" : 1,
    "proficiencies" : ["Arcana.2","Pistols"],
    "extras" : ["WzSpells"]
  },
  "saph-fw1" : {
    "pc": true,
    "_name" : ["FighterWizard1","W"],
    "lv" :2,
    "abilities" : [10,13,15,10],
    "hp" : 14,
    "saves" : [1,2],
    "nAtks" : 1,
    "proficiencies" : ["Arcana.2","Light & Medium armor", "Shields", "Simple & Martial weapons"],
    "extras" : ["WzSpells"]
  },
  "saph-fw2" : {
    "pc": true,
    "_name" : ["FighterWizard2","W"],
    "lv" :5,
    "abilities" : [10,13,17,10],
    "hp" : 26,
    "saves" : [1,2],
    "nAtks" : 1,
    "proficiencies" : ["Arcana.2","Light & Medium armor", "Shields", "Simple & Martial weapons"],
    "extras" : ["WzSpells"]
  },
  "saph-fw3" : {
    "pc": true,
    "_name" : ["FighterWizard3","W"],
    "lv" :9,
    "abilities" : [10,13,17,10],
    "hp" : 44,
    "saves" : [1,2],
    "nAtks" : 1,
    "proficiencies" : ["Arcana.2","Light & Medium armor", "Shields", "Simple & Martial weapons"],
    "extras" : ["WzSpells"]
  },
  "saph-fw4" : {
    "pc": true,
    "_name" : ["FighterWizard4","W"],
    "lv" :12,
    "abilities" : [12,13,17,10],
    "hp" : 70,
    "saves" : [1,2],
    "nAtks" : 1,
    "proficiencies" : ["Arcana.2","Light & Medium armor", "Shields", "Simple & Martial weapons"],
    "extras" : ["WzSpells"]
  },
  "saph-fw5" : {
    "pc": true,
    "_name" : ["FighterWizard5","W"],
    "lv" :16,
    "abilities" : [12,13,19,12],
    "hp" : 92,
    "saves" : [1,2],
    "nAtks" : 1,
    "proficiencies" : ["Arcana.2","Light & Medium armor", "Shields", "Simple & Martial weapons"],
    "extras" : ["WzSpells"]
  },
  "saph-fw6" : {
    "pc": true,
    "_name" : ["FighterWizard6","W"],
    "lv" :20,
    "abilities" : [12,13,19,12],
    "hp" : 114,
    "saves" : [1,2],
    "nAtks" : 2,
    "proficiencies" : ["Arcana.2","Light & Medium armor", "Shields", "Simple & Martial weapons"],
    "extras" : ["WzSpells"]
  },
  "saph-ffw1" : {
    "pc": true,
    "_name" : ["+FighterWizard1","W"],
    "lv" :6,
    "abilities" : [10,13,15,10],
    "hp" : 34,
    "saves" : [1,2],
    "nAtks" : 1,
    "proficiencies" : ["Arcana.2","Light & Medium armor", "Shields", "Simple & Martial weapons"],
    "extras" : ["WzSpells"]
  },
  "saph-ffw2" : {
    "pc": true,
    "_name" : ["+FighterWizard2","W"],
    "lv" :12,
    "abilities" : [14,13,17,10],
    "hp" : 88,
    "saves" : [1,2],
    "nAtks" : 1,
    "proficiencies" : ["Arcana.2","Light & Medium armor", "Shields", "Simple & Martial weapons"],
    "extras" : ["WzSpells"]
  },
  "saph-ffw3" : {
    "pc": true,
    "_name" : ["+FighterWizard3","W"],
    "lv" :18,
    "abilities" : [14,14,18,12],
    "hp" : 130,
    "saves" : [1,2],
    "nAtks" : 2,
    "proficiencies" : ["Arcana.2","Light & Medium armor", "Shields", "Simple & Martial weapons"],
    "extras" : ["WzSpells"]
  },
  "hive-blade" : {
    "_name" : ["Blade","B"],
    "AI" : "seek.melee",
    "CR" : 0.5,
    "act" : [
      ["Claws","maw"]
    ]
  },
  "hive-spine" : {
    "_name" : ["Spine-devil","S"],
    "AI" : "seek.ranged",
    "CR" : 0.25,
    "mv" : ["w45"],
    "act" : [
      ["Spine shot","raw"],
      ["Spine volley","rlu"],
    ]
  },
}

const getStatblock = (frame) => {
  let pb = 2 + Math.floor((frame.lv-1)/4)

  //abilities 
  let abnames = ["Chassis","Agility","Systems","Power"]
  let stats = ["CHS","AGI","SYS","POW"]
  let _ab = frame.abilities || [10,10,10,10]
  let abilities = _ab.map((val,i) => {
    let bonus = Math.floor((val-10)/2)

    return {
      class : "ability-"+abnames[i],
      stat : stats[i],
      val : val,
      bv : bonus, 
      b : bonus >= 0 ? "+"+bonus : bonus
    }
  })

  //saves
  let sv = frame.saves || []
  let saves = sv.map(sid => {
    let txt = abnames[sid]+" " 
    let val = pb + abilities[sid].bv
    txt += val >=0 ? "+"+val : val 
    return txt 
  })

  //speed
  let speed = frame.move.map(mv => "walk "+mv.slice(1))

  //proficiencies
  let prof = frame.proficiencies || []
  let perVal = abilities[2].bv
  let skills = prof.filter(p => p.includes(".")).map(p=> {
    let skill = p.split(".")
    let b = pb + abilities[Number(skill[1])].bv 
    let txt = skill[0] + (b>=0? "+"+b : b)
    //check for perception 
    if(skill[0] == "Perception") perVal = b 
    return txt  
  })
  //senses 
  let senses = [(perVal>=0?"+":"")+perVal]
  //remainging proficiencies
  let rProf = prof.filter(p => !p.includes("."))

  //AC 
  let AC = []
  if(frame.unarmAC) AC.push(frame.unarmAC+" unarmored")
  else {
    AC.push(10)
  }

  //special abilities and actions 
  let sa = [], act = [];
  frame.extras.forEach(_e => {
    let E = EXTRAS[_e]
    if(!E) return

    let ex = {
      name : E.name, 
      text : E.format ? E.format(frame) : E.text
    }

    if(E.type == "sa") sa.push(ex)
    else act.push(ex)
  })

  return {
    name : frame.name,
    size : "Medium",
    type: "",
    rank : 1+Math.floor((frame.lv-1)/2),
    AC,
    HD: frame.HD,
    hp: frame.hp,
    PB: "+"+pb,
    proficiencies : rProf,
    skills, 
    abilities, 
    speed,
    senses,
    saves,
    special_abilities: sa,
    actions : act
  }
}

const getFrame = (id,cr) => {
  const n = JSON.parse(JSON.stringify(FRAMES[id]))
  const base = id=="generic" || cr ? baseStats(cr) : baseStats(n.CR)
  
  let frame = Object.assign({
    id,
    act : [],
    base : base.slice(),
    name : n._name[0],
    char : n._name[1],
    get statblock () { return getStatblock(this) },
    get move () {
      return this.mv || ["w30"]
    },
    get HP () {
      return this.hp || this.base[1]
    },
    get dmg () {
      //base damage
      let dmg = this.base[3]
      //count the number of attacks 
      let natk = this.act.reduce((natk,a)=> {
        if(a[1].includes("l")) natk.l++
        else if(a[1].includes("aw")) natk.aw++
        return natk 
      },{l:0,aw:0})
      //total - count each limited and add one for the at will attacks 
      let tn = natk.l + (natk.aw > 0 ? 1 : 0)
      //split damage equally
      dmg /= tn 

      return {
        "lu" :  dmg * 4,
        "lum" : dmg * 2,
        "awm" : Math.round(dmg/2),
        "aw" : dmg,
      }
    },
    get atkb () {
      return this.base[2]
    },
    get matk () {
      let a = this.act || []
      return a.filter(a => a[1].charAt(0) == "m").map(a=> {
        //check for listed damage or get base dmg 
        let dmg = a[2] && a[2].dmg ? a[2].dmg : this.dmg[a[1].slice(1)]
        let isLU = a[1].includes("lu") 

        return {
          "name" : a[0],
          dmg,
          "r" : 1,
          limited : [isLU,true],
          doDmg () { 
            if(typeof this.dmg == "string") {
              return app.roll.dmg(this.dmg)
            }
            else {
              //normal distribution
              let n = chance.normal({mean: 100, dev: 25})
              return Math.round(this.dmg * n / 100)
            }
          }
        } 
      })
    },
    get ratk () {
      let a = this.act || []
      return a.filter(a => a[1].charAt(0) == "r").map(a => {
        //check for listed damage or get base dmg 
        let dmg = a[2] && a[2].dmg ? a[2].dmg : this.dmg[a[1].slice(1)] 
        let isLU = a[1].includes("lu")

        return {
          "name" : a[0],
          dmg,
          "r" : a[3] && a[3].r ? a[3].r : 90/5, 
          limited : [isLU,true],
          "usage" : a[3] && a[3].use ? a[3].use : [0,0],
          doDmg () { 
            if(typeof this.dmg == "string") {
              return app.roll.dmg(this.dmg)
            }
            else {
              //normal distribution
              let n = chance.normal({mean: 100, dev: 25})
              return Math.round(this.dmg * n / 100)
            }
          }
        }
      })
    } 
  },n) 

  return frame
}

const pcFrames = Object.entries(FRAMES).filter(f => f[1].pc)
  .map(f => getFrame(f[0]))

export {getFrame,pcFrames}