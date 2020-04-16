import {FRONTS, TYPES, plots} from "../fronts-data.js"
import {factions} from "../outlands/factions.js"

const FORCES = {
  "aboleth": [
    [1,"Kuo-Toa","Spear, electro-pulse rifle."],
    [1,"Water Elemental Striker","Agile, powerful slams, body of water."],
    [2,"Chuul","Large (scale 2), claws, paralyzing tentacles, hard body shell."],
    [2,"Merrow","Large (scale 2), long sword, heavy electro-pulse rifle."],
    [2,"Rune Naga","Poisonous bite, spellcaster: telekinesis, invisibility, lightning blasts."],
    [2,"Water Elemental","Large (scale 2), body of water, powerful slams."],
    [3,"Aboleth Initiate","Large (scale 2), multiple tentacles (skum disease infection), spellcaster: enslave, polymorph and pain."],
  ],
  "archons": null,
  "asgard": null,
  "blackflame": [
    [1,"Magma Mephit","Small (scale 0), flying, drips magma."],
    [1,"Firenewt Warrior","Plasma rifle."],
    [1,"Azer Warrior","Warhammer, plasma rifle, durable armor."],
    [2,"Fire Giant","Huge (scale 3), giant sized axe, fiery blood."],
    [2,"Salamander","Large (scale 2), fiery aura, spear, repeating plasma rifle (burst-fire)."],
    [2,"Fire Elemental","Large (scale 2), a body made of flame, blasts of fire."],
    [3,"Fire Elemental Myrmidon","Large (scale 2), a body made of flame, obsidian armor and sword, skilled melee."],
  ], //"Fire Giant Dreadnought,Eternal Flame Guardian,Eternal Flame Priest,Magmin",
  "bloodtiamat": null,
  "deva": null,
  "fae": null, //"Dryad,Sprite,Pixie,Nereid,Druid,Vine Blight,Lion,Eagle",
  "gaolarch": null,
  "goblyns": [
    [1,"Goblyn","Small (scale 0), elemental nature, agile, claws."],
    [1,"Mephit","Small (scale 0), elemental nature, agile, claws, flying."],
    [1,"Goblyn Brute","Elemental nature, claws."],
    [2,"Goblyn Boss","Elemental nature, cunning, tough, regenerates."],
    [2,"Troll","Large (scale 2), elemental nature, strong, regenerates."],
  ], 
  "guardians": null, //"Sword Guardian,Shield Guardian,Crown Guardian",
  "jadeempire": null, //"Light Jade Automaton,Jade Guard,Remote Sentry,Earth Shaper,Water Shaper,Fire Shaper,Wind Shaper,Forest Shaper",
  "mechan": null,
  "myr": [
    [1,"Myr Shadow","Amorphous, blend into shadow, necrotic damage, resistant to physical and energy attacks, weakness: fire / radiant."],
    [1,"Myr Wolf","Agile, bite, resistant to physical and energy attacks, weakness: fire / radiant."],
    [1,"Shadow-bat","Tiny (scale -1), flight, winged spy."],
    [2,"Myr-bat","Flight, necrotic damage, resistant to physical and energy attacks, weakness: fire / radiant."],
    [2,"Shadow Dust","Large (scale 2), swarm, necrotic damage, resistant to physical and energy attacks, weakness: fire / radiant / area effects."],
    [3,"Myr Evkoker","Nightstaff (necrotic), spellcaster: blast, telekinesis, flight."],
    [3,"Myr Conjuror","Nightstaff (necrotic), spellcaster: summon shadow beasts, wall of ice, darkness."],
    [3,"Myr Enchanter","Nightstaff (necrotic), spellcaster: invisibility, dispel magic, hold creature, fear, charm."],
  ], 
  "olympian": null,
  "platinumstar": null,
  "sect": null,
  "shadowsteel": [
    [1,"Gray Shadow","Amorphous, blend into shadow, necrotic damage, resistant to physical and energy attacks, weakness: cold."],
    [1,"Gray Hound","Bite (knockdown), resistant to physical attacks."],
    [1,"Raven","Tiny (scale -1), agile, flight, winged spy."],
    [1,"Shadowsteel Grunt","Agile, shadow blade, void carbine, necrotic damage."],
    [2,"Swarm of Ravens","Large (scale 2), swarm, necrotic damage, resistant to physical and energy attacks, weakness: cold / area effects."],
    [2,"Shadowsteel Blademaster","Agile, shadow blade, void carbine, necrotic damage, master melee."],
    [3,"Night Rogue","Agile, phasing, shadow teleport, shadow blade, void carbine, necrotic damage."],
  ],
  "starhive": [
    [1,"Spawn","Agile, claws, fangs, supernatural senses."],
    [1,"Beast","Large (scale 2), deadly bite, fast, supernatural senses."],
    [2,"Monster","Huge (scale 3), tough, claws, fangs, spines, scaled hide, supernatural senses."],
    [2,"Hydra","Huge (scale 3), tough, multiple heads, regenerates, supernatural senses."],
  ], 
  "ymir": [
    [1,"Ice Mephit","Small (scale 0), flying, freezing touch."],
    [2,"Frost Giant","Huge (scale 3), giant sized sword, frozen blood."],
    [2,"Ice Elemental","Large (scale 2), agile, a body made of ice, piercing ice shards."],
  ],
  "starlord": null,
  "immortal": [
    [1,"Faceless Legionary","Arc rifle, sword, armor."],
    [1,"Gun Drone","Small (scale 0), flying, arc rifle."],
    [2,"Faceless Centurion","Arc rifle, sword, armor, leader."],
    [2,"Arc Knight","Arc staff, spellcaster: lightning, shield, strength."],
    [2,"Black Earth Priest","Glaive, spellcaster: wall of stone, cure wounds, strength, shield."],
    [2,"Eternal Flame Priest","Dagger, spellcaster: fireball, flame strike, light."],
    [3,"Faceless Hierophont","Shock maul, spellcaster: cure wounds, bless, call lightning, hold person."],
    [3,"Faceless Primus","Arc sword, arc rifle, leader, hardy."]
  ],
  "xaoti": null,
  "warden": null, //"Ranger,Wilder,Zverhai",
  "worm": null,
  "yuloth": [
      [1,"Merc","Laser rifle, grenades."],
      [1,"Gun Drone","Small (scale 0), flying, laser rifle."],
      [3,"Yuloth Evkoker","Flamestaff (fire), spellcaster: blast, telekinesis, flight, shield, wall of force."],
  ], 
}

let FACTIONS = factions.map(F => {
  //look for forces
  F.forces = [[],[],[],[],[]]
  if (FORCES[F.id]) {
    FORCES[F.id].forEach(f => F.forces[f[0]-1].push(f))
  }
  return F
})

const HTML = `
<h2>Factions</h2>
<div class="m-1 p-1">

  <div v-for="(F,i) in factions">
    <button class="btn btn-light btn-block" type="button" data-toggle="collapse" :data-target="'#faction-'+i">
      <h3 class="m-0" align="left">{{F.name}}</h3>
    </button>
    <div :id="'faction-'+i" class="collapse px-2 mb-2">
      <span v-html="F.info"></span>

      <div align="center"><h4>Forces<h4></div>
      <div class="container table-gen" >
        <div class="row table-gen">
          <div class="col-2">Name</div>
          <div class="col">About</div>
        </div>
        <div v-for="(tier,j) in F.forces" v-if="tier.length>0">
          <div class="row border border-dark">
            <div class="col" align="center"><b>Tier {{j+1}}</b></div>
          </div>
          <div v-for="t in tier" class="row table-gen">
            <div class="col-2">{{t[1]}}</div>
            <div class="col">{{t[2]}}</div>
          </div>
        </div>
      </div>

    </div>

  </div>

</div>
`

export {FACTIONS,HTML}
