//Shadow,Hound,Raven,Swarm of Ravens,Grunt,Blademaster,Night Rogue
//core : name, CR, size, type, abilities 
const FORCES = {
  "Gray Shadow": {
    "core": ["Gray Shaodw", 1, "Medium", "construct", 1, 14],
    "speed": [60,"f.40"],
    "senses": ["dk.60"],
    "resist": "acid,fire,thunder,bludgeoning,piercing,slashing",
    "immune": "poison,exhaustion,frightened,grappled,paralyzed,petrified,poisoned,prone,restrained",
    "atks": [["m", "Claws", "slashing","1d6"]],
    "extras": [{
      "what": ["sa", "Amorphous"],
      "text": "The shadow can move through a space as narrow as 1 inch wide without squeezing."
    },{
      "what": ["sa", "Shadow Stealth"],
      "text": "While in dim light or darkness, the shadow can take the Hide action as a bonus action. Its stealth bonus is also improved to +6."
    }]
  },
  "Raven": {
    "core": ["Raven", 1, "Tiny", "construct", "1 hp", 12],
    "speed": [10,"f.60"],
    "senses": ["dk.60"],
    "resist": "acid,fire,thunder,bludgeoning,piercing,slashing",
    "immune": "poison,exhaustion,frightened,grappled,paralyzed,petrified,poisoned,prone,restrained",
    "atks": [["m", "Beak", "piercing","1"]],
  },
  "Swarm of Ravens": {
    "core": ["Swarm of Ravens", 2, "Large", "swarm of tiny constructs", 4, 12],
    "speed": [10,"f.60"],
    "senses": ["dk.60"],
    "resist": "acid,fire,thunder,bludgeoning,piercing,slashing",
    "immune": "poison,exhaustion,frightened,grappled,paralyzed,petrified,poisoned,prone,restrained",
    "atks": [["m", "Beaks", "piercing","1d8"]],
    "extras": [{
      "what": ["sa", "Swarm"],
      "text": `The swarm can occupy another creature's space and vice versa, 
      and the swarm can move through any opening large enough for a Tiny creature. 
      The swarm can't regain hit points or gain temporary hit points.`
    }]
  },
  "Gray Hound": {
    "core": ["Gray Hound", 1, "Medium", "construct", 2, 12],
    "speed": [40],
    "senses": ["dk.60"],
    "resist": "acid,fire,thunder,bludgeoning,piercing,slashing",
    "immune": "poison,exhaustion,frightened,grappled,paralyzed,petrified,poisoned,prone,restrained",
    "atks": [["m", "Bite", "piercing","1d6 + Knockdown"]],
    "extras": [{
      "what": ["sa", "Keen Hearing and Smell"],
      "text": "The hound has advantage on WIS saves that rely on hearing or smell."
    },{
      "what": ["sa", "Shadow Blend"],
      "text": "While in dim light or darkness, the hound can use a bonus action to become invisible, along with anything it is wearing or carrying. The invisibility lasts until the shadow mastiff uses a bonus action to end it or until the shadow mastiff attacks, is in bright light, or is incapacitated."
    },{
      "what": ["sa", "Knockdown"],
      "text": "Anyone bitten by the hound must make a STR save or be knocked prone."
    },]
  },
  "Shadowsteel Grunt": {
    "core": ["Shadowsteel Grunt", 2, "Medium", "humanoid", 2, 18],
    "senses": ["dk.120"],
    "atks": [["m", "Shadowblade", "piercing/necrotic","1d6+1"], ["r", "Night Carbine", "necrotic","1d6"]],
    "extras": [{
      "what": ["sa", "Darkness (1/day)"],
      "text": "Create darkness in a 30 ft radius area."
    }]
  },
  "Shadowsteel Blademaster": {
    "core": ["Shadowsteel Blademaster", 5, "Medium", "humanoid", 5, 16],
    "senses": ["dk.120"],
    "atks": [["m", "Shadowblade", "piercing/necrotic","1d8+1 +Shadow Plague"], ["r", "Night Carbine", "necrotic","1d8 +Shadow Plague"]],
    "extras": [{
      "what": ["sa", "Darkness (3/day)"],
      "text": "Create darkness in a 30 ft radius area."
    },{
      "what": ["sa", "Parry"],
      "text": "The blademaster adds 3 to his AC against one melee attack that would hit him. To do so, the blademaster must see the attacker and be wielding a melee weapon."
    },{
      "what": ["sa", "Shadow Plague"],
      "text": `Anyone hit by the blademaster's weapons must make a CON svae or take another 1d10 necrotic damage.`
    }]
  },
  "Night Rogue": {
    "core": ["Night Rogue", 7, "Medium", "humanoid", 8, 17],
    "senses": ["dk.120"],
    "atks": [["m", "Shadowblade", "piercing/necrotic","1d8+1 +Shadow Plague"], ["r", "Night Carbine", "necrotic","1d8 +Shadow Plague"]],
    "extras": [{
      "what": ["act", "Darkness"],
      "text": "Create darkness in a 30 ft radius area."
    },{
      "what": ["sa", "Shadow Step"],
      "text": `While in dim light or darkness, the rogue can teleport as a bonus action up to 60 feet to 
      an unoccupied space it can see that is also in dim light or darkness. 
      It then has advantage on the first melee attack it makes before the end of the turn.`
    },{
      "what": ["sa", "Shadow Plague"],
      "text": `Anyone hit by the rogue's weapons must make a CON save or take another 2d6 necrotic damage.`
    }]
  },
}

export {FORCES}