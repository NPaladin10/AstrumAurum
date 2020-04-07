//core : name, lv, size, type, hd, abilities 
const FORCES = {
  "Chuul": {
    "core": ["Chuul", 2, "Large", "aberration", 3, 16],
    "speed": ["s.30"],
    "senses": ["dk.60"],
    "proficiencies": ["Perception.4"],
    "immune": "poison,poisoned",
    "atks": [["m", "Pincer", "bludgeoning","1d8"]],
    "extras": [{
      "what": ["sa", "Amphibious"]
    }, {
      "what": ["sa", "Sense Magic"],
      "text": "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical."
    },{
      "what": ["sa", "Grapple"],
      "text": "A target hit by a pincer attack is grappled (break with a STR save) if it is a Large or smaller creature and the chuul doesn't have two other creatures grappled.",
    }, {
      "what": ["act", "Tentacles"],
      "text": "One creature grappled by the chuul must succeed on a CON save or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
    }],
  },
  "Merrow": {
    "core": ["Merrow", 2, "Large", "monstrosity", 3, 13],
    "speed": ["s.40"],
    "senses": ["dk.60"],
    "atks": [["m", "Bite & Claws", "piercing/slashing","1d10"], ["r", "Heavy Pulse Rifle","electricity","1d8"]],
    "extras": [{
      "what": ["sa", "Amphibious"]
    }]
  },
  "Kuo-Toa": {
    "core": ["Kuo-Toa", 1, "Medium", "humanoid", 1, 13],
    "speed": ["s.30"],
    "senses": ["dk.120"],
    "proficiencies": ["Perception.4"],
    "atks": [["m", "Bite", "piercing", "1d4"], ["r", "Pulse Rifle","electricity","1d6"]],
    "extras": [{
      "what": ["sa", "Amphibious"],
    }, {
      "what": ["sa", "Otherwordly Perception"],
      "text": "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving."
    }, {
      "what": ["sa", "Slippery"],
      "text": "The kuo-toa has advantage on saves made to escape a grapple."
    }, {
      "what": ["sa", "Sunlight Sensitivity"],
      "text": "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on WIS saves that rely on sight."
    }, {
      "what": ["sa", "Sticky Shield"],
      "text": `When a creature misses the kuo-toa with a melee weapon attack, the kuo-toa uses its sticky shield to catch the weapon. The attacker must succeed on a STR save, or the weapon becomes stuck to the kuo-toa's shield. If the weapon's wielder can't or won't let go of the weapon, the wielder is grappled while the weapon is stuck. While stuck, the weapon can't be used. A creature can pull the weapon free by taking an action to make a STR save and succeeding.`
    }]
  },
  "Kuo-Toa Captain": {
    "core": ["Kuo-Toa Captain", 2, "Medium", "humanoid", 2, 15],
    "speed": ["s.30"],
    "senses": ["dk.120"],
    "proficiencies": ["Perception.4"],
    "atks": [["m", "Stun Baton", "electricity", "1d6"], ["r", "Pulse Rifle","electricity","1d6"]],
    "extras": [{
      "what": ["sa", "Amphibious"],
    }, {
      "what": ["sa", "Otherwordly Perception"],
      "text": "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving."
    }, {
      "what": ["sa", "Slippery"],
      "text": "The kuo-toa has advantage on saves made to escape a grapple."
    }, {
      "what": ["sa", "Sticky Shield"],
      "text": `When a creature misses the kuo-toa with a melee weapon attack, the kuo-toa uses its sticky shield to catch the weapon. The attacker must succeed on a STR save, or the weapon becomes stuck to the kuo-toa's shield. If the weapon's wielder can't or won't let go of the weapon, the wielder is grappled while the weapon is stuck. While stuck, the weapon can't be used. A creature can pull the weapon free by taking an action to make a STR save and succeeding.`
    }]
  },
  "Rune Naga": {
    "core": ["Rune Naga", 3, "Medium", "monstrosity", 3, 15],
    "speed": ["s.30"],
    "senses": ["dk.60"],
    "atks": [["m", "Bite", "piercing","1d4 + Poison"]],
    "extras": [{
      "what": ["sa", "Amphibious"],
    }, {
      "what": ["sa", "Poison"],
      "text": "Anyone bitten takes an additional 7 (2d6) poison damage.",
    }, {
      "what": ["sp","Spellcasting",3],
      "text": "",
      "spells": ["1/day,Lightning Bolt,Invisibility","3/day,Mirror Image","At will,Darkness,Sleep,Magic Missile"]
    }]
  },
  "Water Elemental Striker": {
    "core": ["Water Elemental Striker", 2, "Medium", "elemental", 2, 15],
    "speed": ["s.90"],
    "senses": ["dk.60"],
    "resist": "acid,bludgeoning,piercing,slashing",
    "immune": "poison,exhaustion,grappled,paralyzed,petrified,poisoned,prone,restrained,unconscious",
    "atks": [["m", "Slam", "bludgeoning", "1d6 (3)"]],
    "extras": [{
      "what": ["sa", "Water Form"],
      "text": "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
    }]
  },
  "Water Elemental": {
    "core": ["Water Elemental", 4, "Large", "elemental", 5, 14],
    "speed": ["s.90"],
    "senses": ["dk.60"],
    "resist": "acid,bludgeoning,piercing,slashing",
    "immune": "poison,exhaustion,grappled,paralyzed,petrified,poisoned,prone,restrained,unconscious",
    "atks": [["m", "Slam", "bludgeoning", "1d10"]],
    "extras": [{
      "what": ["sa", "Water Form"],
      "text": "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
    }]
  },
  "Aboleth": {
    "core": ["Aboleth", 5, "Large", "aberration", 9, 17],
    "speed": ["s.40"],
    "senses": ["dk.120"],
    "atks": [["m", "Tentacles", "bludgeoning", "1d10 + Skum Disease"]],
    "extras": [{
      "what": ["sa", "Amphibious"],
    },{
      "what": ["sa", "Skum Disease"],
      "text": `
        Any creature hit by the aboleth's tentacles must succeed on a CON save or become diseased. 
        The disease has no effect for 1 minute and can be removed by any magic that cures disease. 
        After 1 minute, the diseased creature's skin becomes translucent and slimy, 
        the creature can't regain hit points unless it is underwater, 
        and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. 
        When the creature is outside a body of water, it takes 3 acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.
      `
    },{
      "what": ["sa", "Enslave (3/day)"],
      "text": `
        The aboleth targets one creature it can see within 30 feet of it. 
        The target must succeed on a Wisdom saving throw or be magically charmed by the aboleth 
        until the aboleth dies or until it is on a different plane of existence from the target. 
        The charmed target is under the aboleth's control and can't take reactions, 
        and the aboleth and the target can communicate telepathically with each other over any distance.
        </br>Whenever the charmed target takes damage, the target can repeat the saving throw. 
        On a success, the effect ends. No more than once every 24 hours, 
        the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.
      `
    },
    {
      "what": ["sa", "Mucous Cloud"],
      "text": `
        While underwater, the aboleth is surrounded by transformative mucus. 
        A creature that touches the aboleth or that hits it with a melee attack while within 5 
        feet of it must make a CON save. On a failure, the creature is diseased for 1d4 hours. 
        The diseased creature can breathe only underwater.
      `
    }]
  }
}

export {FORCES}
