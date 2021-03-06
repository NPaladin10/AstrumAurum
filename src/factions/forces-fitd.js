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
  "archons": [
    [1,"Lantern","Small (scale 0), flying, radiant blast."],
  ],
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
  "bloodtiamat": [
    [1,"Dragon-kin Soldier",""],
    [2,"Flame Dragon","Huge (scale 3)"],
  ],
  "deva": null,
  "fae": [
    [1,"Genasi",""],
    [2,"Fae",""],
  ], 
  "gaolarch": [
    [3,"Inevitable","Large (scale 2),"],
  ],
  "goblyns": [
    [1,"Goblyn","Small (scale 0), elemental nature, agile, claws."],
    [1,"Mephit","Small (scale 0), elemental nature, agile, claws, flying."],
    [1,"Goblyn Brute","Elemental nature, claws."],
    [2,"Goblyn Boss","Elemental nature, cunning, tough, regenerates."],
    [2,"Troll","Large (scale 2), elemental nature, strong, regenerates."],
  ], 
  "guardians": [
    [1,"Sword Guardian Initiate",""],
    [1,"Shield Guardian Initiate",""],
    [1,"Crown Guardian Initiate",""],
    [2,"Sword Guardian",""],
    [2,"Shield Guardian",""],
    [2,"Crown Guardian",""],
    [3,"Sword Guardian Master",""],
    [3,"Shield Guardian Master",""],
    [3,"Crown Guardian Master",""],
  ], 
  "jadeempire": [
    [1,"Light Jade Automaton",""],
    [1,"Jade Guard",""],
    [1,"Remote Sentry",""],
    [2,"Earth Shaper",""],
    [2,"Water Shaper",""],
    [2,"Fire Shaper",""],
    [2,"Wind Shaper",""],
    [2,"Forest Shaper",""],
  ], 
  "mechan": [
    [1,"Orb Sentry","Small (scale 0),"],
    [1,"Mechan Techwright",""],
    [2,"Mechan Knight","Large (scale 2),"],
    [3,"Mechan Warframe","Huge (scale 3),"],
  ],
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
  "sect": [
    [1,"Sect Swarm","Large (scale 2), swarm"],
    [1,"Iron Centipede",""],
    [2,"Steel Scorpion",""],
  ],
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
  "warden": [
    [1,"Ranger",""],
    [2,"Wilder",""],
    [3,"Zverhai",""],
  ], 
  "worm": null,
  "yuloth": [
      [1,"Merc","Laser rifle, grenades."],
      [1,"Gun Drone","Small (scale 0), flying, laser rifle."],
      [3,"Yuloth Evoker","Flamestaff (fire), spellcaster: blast, telekinesis, flight, shield, wall of force."],
  ], 
}

export {FORCES}