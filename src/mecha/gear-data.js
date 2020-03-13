//name, type, tags, wt, dmg, range, ROF, charges
const WEAPONS = [
  ["Axe","martial","",4,"1d8"],
  ["Staff","basic","",4,"1d6"],
  ["Club","basic","",2,"1d6-1"],
  ["Dagger","basic","",0.5,"1d4"],
  ["Hammer","martial","",3,"1d6"],
  ["Sword","","",4,"1d6"],
  ["Sword, Long","","",5,"1d8"],
  ["Pole Arm","","",8,"1d10"],
  ["Spear","","",4,"1d8"],
  ["Auto Pistol","","",2.5,"1d8",120,2,15],
  ["Machine Pistol","","burst",3,"1d8",120,2,20],
  ["Rifle","","",6,"2d8",600,2,8],
  ["Shotgun","","",6,"3d4",120,1,6],
]

//name, type, tags, wt, AC
const ARMOR = [
  ["Basic Armor","","",6,14],
]

export {WEAPONS, ARMOR}