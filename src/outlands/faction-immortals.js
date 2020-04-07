//core : name, CR, size, type, abilities 
const FORCES = {
  "Faceless Legionary": {
    "core": ["Faceless Legionary", 1, "Medium", "humanoid", 1, 18],
    "senses": ["dk.60"],
    "atks": [["m", "Longsword", "slashing","1d6"], ["r", "Arc Rifle", "electricity","1d6"]]
  },
  "Gun Drone": {
    "core": ["Gun Drone", 1, "Small", "robot", "2hp", 15],
    "speed": ["f.60"],
    "senses": ["dk.60"],
    "atks": [["m", "Ram", "bludgeoning","1d3"], ["r", "Arc Rifle", "electricity","1d6"]]
  },
  "Faceless Centurion": {
    "core": ["Faceless Centurion", 2, "Medium", "humanoid", 2, 18],
    "senses": ["dk.60"],
    "atks": [["m", "Arc Sword", "piercing","1d8"], ["r", "Arc Rifle", "electricity","1d6+1"]],
    "extras": [{
      "what": ["sa", "Leadership (3/day)"],
      "text": "For 1 minute, the centurion can utter a special command or warning whenever a nonhostile creature that it can see within 30 ft. of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the centurion. A creature can benefit from only one Leadership die at a time. This effect ends if the centurion is incapacitated."
    }]
  },
  "Faceless Primus": {
    "core": ["Faceless Primus", 5, "Medium", "humanoid", 8, 20],
    "senses": ["dk.60"],
    "saves": [3, 4, 5],
    "atks": [["m", "Arc Sword", "piercing","1d10"], ["r", "Arc Rifle", "electricity","1d8+1"]],
    "extras": [{
      "what": ["sa", "Leadership (3/day)"],
      "text": "For 1 minute, the primus can utter a special command or warning whenever a nonhostile creature that it can see within 30 ft. of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the primus. A creature can benefit from only one Leadership die at a time. This effect ends if the centurion is incapacitated."
    }, {
      "what": ["act", "Parry"],
      "text": `The primus adds 3 to its AC against one melee attack that would hit it. To do so, the primus must see the attacker and be wielding a melee weapon.`
    }]
  },
  "Faceless Arc Knight": {
    "core": ["Faceless Arc Knight", 3, "Medium", "humanoid", 3, 13],
    "senses": ["dk.60"],
    "proficiencies": ["Arcana.3"],
    "atks": [["m", "Shock Staff", "electricity", "1d6"], ["r", "Arc Pistol", "electricity", "1d4"]],
    "extras": [{
      "what": ["sa", "Arcane Advantage"],
      "text": "Once per turn, the arc knight can deal an extra 1d8 damage to a creature it hits with a damaging spell attack if that target is within 5 feet of an ally of the arc knight and that ally isn't incapacitated."
    }, {
      "what": ["sa", "Army Arcane"],
      "text": "When the arc knight casts a spell that causes damage or that forces other creatures to make a saving throw, it can choose itself and any number of allies to be immune to the damage caused by the spell and to succeed on the required saving throw."
    }, {
      "what": ["sp","Spellcasting",3],
      "text": "",
      "spells": ["1/day,Hold Person,Haste","3/day,Lightning Bolt,Strength","At will,Magic Missile,Shield"]
    }]
  },
  "Black Earth Priest": {
    "core": ["Black Earth Priest", 3, "Medium", "humanoid", 3, 17],
    "senses": ["dk.60"],
    "proficiencies": ["Intimidation.5", "Religion.3", "Persuasion.5"],
    "atks": [["m", "Glaive", "slashing","1d8"], ["r", "Arc Pistol", "electricity","1d4"]],
    "extras": [{
      "what": ["sa", "Unyielding"],
      "text": `When the priest is subjected to an effect that would move it, knock it prone, or both, it can use its reaction to be neither moved nor knocked prone.`
    }, {
      "what": ["sp","Spellcasting",3],
      "text": "",
      "spells": ["1/day,Wall of Stone","3/day,Prayer,Hold Person","At will:Cure Light Wounds,Shield,Strength"]
    }]
  },
  "Eternal Flame Priest": {
    "core": ["Eternal Flame Priest", 3, "Medium", "humanoid", 3, 12],
    "senses": ["dk.60"],
    "proficiencies": ["Deception.5","Intimidation.5","Religion.3"],
    "atks": [["m", "Dagger", "slashing", "1d4"], ["r", "Arc Pistol", "electricity","1d4"]],
    "extras": [{
      "what": ["sp","Spellcasting",3],
      "text": "",
      "spells": ["1/day,Fireball","3/day,Pyrotechnics,Continual Light","At will,Light,Magic Missile"]
    }
    ],
  },
  "Faceless Hierophont": {
    "core": ["Facelss Hierophont", 5, "Medium", "humanoid", 7, 18],
    "senses": ["dk.60"],
    "proficiencies": ["Intimidation.5","Religion.4"],
    "saves": [2, 4],
    "atks": [["m", "Shock Maul", "bludgeoning","1d10"], ["r", "Arc Pistol", "electricity","1d4+1"]],
    "extras": [{
      "what": ["sa", "Guided Strike (3 day)"],
      "text": `The priest grants a +10 bonus to an attack roll made by itself or another creature within 30 feet of it. The priest can make this choice after the roll is made but before it hits or misses.`
    },{
      "what": ["sp","Spellcasting",3],
      "text": "",
      "spells": ["1/day,Finger of Death,Cure Serious Wounds","3/day,Prayer,Call Lightning","At will,Bless,Hold Person,Cure Light Wounds"]
    }]
  },
}

export {FORCES}