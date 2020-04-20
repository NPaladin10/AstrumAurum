import {factions as FACTIONS} from "./factions.js"

import * as aboleth from "./faction-aboleth.js"
import * as immortals from "./faction-immortals.js"
import * as shadowsteel from "./faction-shadowsteel.js"
import * as myr from "./faction-myr.js"
import * as goblyns from "./faction-goblyns.js"

const FORCES = {
  "aboleth": aboleth.FORCES,
  "archons": null,
  "asgard": null,
  "blackflame": null, //"Fire Giant,Fire Giant Dreadnought,Fire Elemental,Fire Elemental Myrmidon,Firenewt Warrior,Salamander,Eternal Flame Guardian,Eternal Flame Priest,Magma Mephit,Azer,Magmin",
  "bloodtiamat": null,
  "deva": null,
  "fae": null, //"Dryad,Sprite,Pixie,Nereid,Druid,Vine Blight,Lion,Eagle",
  "gaolarch": null,
  "goblyns": goblyns.FORCES, 
  "guardians": null, //"Sword Guardian,Shield Guardian,Crown Guardian",
  "jadeempire": null, //"Light Jade Automaton,Jade Guard,Remote Sentry,Earth Shaper,Water Shaper,Fire Shaper,Wind Shaper,Forest Shaper",
  "mechan": null,
  "myr": myr.FORCES, 
  "olympian": null,
  "platinumstar": null,
  "sect": null,
  "shadowsteel": shadowsteel.FORCES,
  "starhive": null, //"Hydra,",
  "ymir": null,
  "starlord": null,
  "immortal": immortals.FORCES,
  "xaoti": null,
  "warden": null, //"Ranger,Wilder,Zverhai",
  "worm": null,
  "yuloth": null, //"Merc Guard,Merc Captain,Sentry Drone,Evoker,Conjuror"
}

const show = ["aboleth", "archons", "fae", "goblyns", "guardians", "jadeempire", "myr", "shadowsteel", "immortal", "warden"]

import {MONSTERS} from "../ogl-monster-data.js"
import {SHORTBLOCK,getBlockData} from "./monster-statblock-osr.js"
const forceHTML = SHORTBLOCK

const data = FACTIONS.filter(f=>show.includes(f.id)).map(faction => {
  let id = faction.id
  //look for forces
  faction.forces = []
  if (FORCES[id]) {
    faction.forces = Object.values(FORCES[id]).map(getBlockData)
  }
  return faction
})

export {data, forceHTML}
