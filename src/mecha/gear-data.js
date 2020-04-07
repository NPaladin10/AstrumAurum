//name, type, tags, wt, dmg, range, ROF, charges
// bmelee, amelee, sarm, larm , hvy, gde 
const WEAPONS = [
  ["Axe", "amelee", "1d8", 4], 
  ["Staff", "bmelee", "1d6", 4], 
  ["Club", "bmelee", "1d6-1", 2], 
  ["Dagger", "bmelee", "1d4", 0.5], 
  ["Hammer", "amelee", "1d6", 3], 
  ["Sword", "amelee", "1d6", 4], 
  ["Sword, Long", "amelee", "1d8", 5], 
  ["Pole Arm", "amelee", "1d10", 8], 
  ["Spear", "bmelee", "1d8", 4], //ranged 
  ["Auto Pistol", "sarm", "1d8", 120, 2, 15, 2.5], 
  ["Machine Pistol", "sarm", "1d8", 120, 2, 20, 3, "burst"], 
  ["Rifle", "larm", "2d8", 600, 2, 8, 6], 
  ["Shotgun", "larm", "3d4", 120, 1, 6, 6]
]

//name, type, tags, wt, AC
const ARMOR = [["Basic Armor", "", "", 6, 14], ]

const RATK = ["sarm", "larm" , "hvy", "gde"]
const MATK = ["bmelee", "amelee"]

let weapons = WEAPONS.map(w=>{
  return {
    "name": w[0],
    "dmg" : w[2],
    "what" : RATK.includes(w[1]) ? "ratk" : "matk",
    "r": RATK.includes(w[1]) ? Math.round(w[3]/5) : 1,
    "usage": RATK.includes(w[1]) ? w.slice(4,6) : [0,0],
    doDmg() {
      return app.roll.dmg(this.dmg)
    }
  }
}
)

export {weapons, ARMOR}
