//"Shadow,Wolf,Bat,Giant Bat,Shadow Mote Swarm,Evoker,Conjurer,Illusionist"
//core : name, CR, size, type, abilities 
const FORCES = {
  "Myr Shadow": {
    "core": ["Myr Shaodw", 1, "Medium", "construct", 1, 14],
    "speed": [60,"f.40"],
    "senses": ["dk.60"],
    "resist": "cold,lightning,thunder,bludgeoning,piercing,slashing",
    "immune": "poison,exhaustion,frightened,grappled,paralyzed,petrified,poisoned,prone,restrained",
    "atks": [["m", "Claws", "slashing/necrotic","1d6"]],
    "extras": [{
      "what": ["sa", "Amorphous"],
      "text": "The shadow can move through a space as narrow as 1 inch wide without squeezing."
    },{
      "what": ["sa", "Shadow Stealth"],
      "text": "While in dim light or darkness, the shadow can take the Hide action as a bonus action. Its stealth bonus is also improved to +6."
    }]
  },
  "Myr Wolf": {
    "core": ["Myr Wolf", 1, "Medium", "construct", 2, 12],
    "speed": [40],
    "senses": ["dk.60"],
    "resist": "cold,lightning,thunder,bludgeoning,piercing,slashing",
    "immune": "poison,exhaustion,frightened,grappled,paralyzed,petrified,poisoned,prone,restrained",
    "atks": [["m", "Bite", "piercing/necrotic","1d6 +Shadow Plague"]],
    "extras": [{
      "what": ["sa", "Keen Hearing and Smell"],
      "text": "The hound has advantage on WIS saves that rely on hearing or smell."
    },{
      "what": ["sa", "Shadow Blend"],
      "text": "While in dim light or darkness, the hound can use a bonus action to become invisible, along with anything it is wearing or carrying. The invisibility lasts until the shadow mastiff uses a bonus action to end it or until the shadow mastiff attacks, is in bright light, or is incapacitated."
    },{
      "what": ["sa", "Shadow Plague"],
      "text": "Anyone bitten by the wolf must make a CON save or take another 1 necrotic damage."
    }]
  },
  "Shadow Bat": {
    "core": ["Shadow Bat", 1, "Tiny", "construct", "1 hp", 12],
    "speed": [5,"f.40"],
    "senses": ["bl.60"],
    "resist": "cold,lightning,thunder,bludgeoning,piercing,slashing",
    "immune": "poison,exhaustion,frightened,grappled,paralyzed,petrified,poisoned,prone,restrained",
    "atks": [["m", "Bite", "piercing/necrotic","1"]],
  },
  "Myr-Bat": {
    "core": ["Ur-Bat", 2, "Medium", "construct", 2, 14],
    "speed": [10,"f.60"],
    "senses": ["bl.60"],
    "resist": "cold,lightning,thunder,bludgeoning,piercing,slashing",
    "immune": "poison,exhaustion,frightened,grappled,paralyzed,petrified,poisoned,prone,restrained",
    "atks": [["m", "Bite", "piercing/necrotic","1d8 +Shadow Plague"]],
    "extras": [,{
      "what": ["sa", "Shadow Plague"],
      "text": "Anyone bitten by the ur-bat must make a CON save or take another 1d4 necrotic damage."
    }]
  },
  "Shadow Dust": {
    "core": ["Shadow Dust", 2, "Medium", "swarm of tiny constructs", 3, 12],
    "speed": [10,"f.40"],
    "senses": ["dk.60"],
    "resist": "cold,lightning,thunder,bludgeoning,piercing,slashing",
    "immune": "poison,exhaustion,frightened,grappled,paralyzed,petrified,poisoned,prone,restrained",
    "atks": [["m", "Sting", "piercing/necrotic","1d8"]],
    "extras": [{
      "what": ["sa", "Swarm"],
      "text": `The swarm can occupy another creature's space and vice versa, 
      and the swarm can move through any opening large enough for a Tiny creature. 
      The swarm can't regain hit points or gain temporary hit points.`
    }]
  },
  "Myr Evoker": {
    "core": ["Myr Evoker", 8, "Medium", "humanoid", 10, 16],
    "senses": ["dk.60"],
    "atks": [["m", "Nightstaff", "bludgeoning/necrotic", "2d6 +Shadow Plague"]],
    "extras": [{
      "what": ["sp","Spellcasting",3],
      "text": "",
      "spells": ["1/day,Reverse Gravity,Disintegrate","3/day,Telekinesis,Cloudkill,Wall of Fire","At will,Fly,Lightning Bolt,Protection from Normal Missiles,Strength"]
    },{
      "what": ["sa", "Shadow Plague"],
      "text": "Anyone hit by the evoker's nightstaff must make a CON save or take another 1d8 necrotic damage."
    }
    ],
  },
  "Myr Conjurer": {
    "core": ["Myr Conjurer", 8, "Medium", "humanoid", 11, 16],
    "senses": ["dk.60"],
    "atks": [["m", "Nightstaff", "bludgeoning/necrotic", "2d6 +Shadow Plague"]],
    "extras": [{
      "what": ["sp","Spellcasting",3],
      "text": "",
      "spells": ["1/day,Monster Summoning V,Wall of Iron","3/day,Monster Summoning III,Cloudkill,Ice Storm","At will,Monster Summoning I,Web,Darkness,Magic Missile"]
    },{
      "what": ["sa", "Shadow Plague"],
      "text": "Anyone hit by the evoker's nightstaff must make a CON save or take another 1d8 necrotic damage."
    }
    ],
  },
  "Myr Enchanter": {
    "core": ["Myr Enchanter", 8, "Medium", "humanoid", 9, 16],
    "senses": ["dk.60"],
    "atks": [["m", "Nightstaff", "bludgeoning/necrotic", "2d6 +Shadow Plague"]],
    "extras": [{
      "what": ["sp","Spellcasting",3],
      "text": "",
      "spells": ["1/day,Mass Invisibility,Anti-Magic Shell","3/day,Hold Monster,Hallucinatory Terrain,Fear,Confusion","At will,Suggestion,Hold Person,Dispel Magic,Invisibility"]
    },{
      "what": ["sa", "Shadow Plague"],
      "text": "Anyone hit by the evoker's nightstaff must make a CON save or take another 1d8 necrotic damage."
    }
    ],
  },
}

export {FORCES}