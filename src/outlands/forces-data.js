const FORCES = {
  "Faceless Legionary": {
    "core": ["Faceless Legionary", "Medium", "humanoid", [18, "armor", "shield"], "2d8+2", 11, 13, 12, 12, 10, 10, 9, 0.5],
    "speed": [["walk", "30 ft."]],
    "senses": [10, ["darkvision", "60 ft."]],
    "special_abilities": [{
      "name": "Martial Advantage",
      "desc": "Once per turn, the legionary can deal an extra 7 (2d6) damage to a creature it hits with a weapon attack if that creature is within 5 ft. of an ally of the legionary that isn't incapacitated."
    }],
    "actions": [{
      "what": [1, "Longsword", 3],
      "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage, or 6 (1d10 + 1) slashing damage if used with two hands.",
    }, {
      "what": [3, "Arc Rifle", 3],
      "desc": "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 4 (1d8) electricity damage, reload 12.",
    }],
  },
  "Faceless Centurion": {
    "core": ["Faceless Centurion", "Medium", "humanoid", [17, "half plate", "shield"], "6d8+12", 39, 15,14,14,12,10,13, 3],
    "speed": [["walk", "30 ft."]],
    "senses": [10, ["darkvision", "60 ft."]],
    "special_abilities": [{
      "name": "Martial Advantage",
      "desc": "Once per turn, the centurion can deal an extra 10 (3d6) damage to a creature it hits with a weapon attack if that creature is within 5 ft. of an ally of the centurion that isn't incapacitated."
    }],
    "actions": [{
      "what": [0, "Multiattack"],
      "desc": "The centurion makes two attacks."
    },{
      "what": [1, "Arc Sword", 4],
      "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) piercing damage.",
    }, {
      "what": [3, "Arc Rifle", 4],
      "desc": "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 5 (1d8+1) electricity damage, reload 12.",
    },{
      "what": [0, "Leadership (Recharges after a Short or Long Rest)"],
      "desc": "For 1 minute, the centurion can utter a special command or warning whenever a nonhostile creature that it can see within 30 ft. of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the centurion. A creature can benefit from only one Leadership die at a time. This effect ends if the centurion is incapacitated."
    }],
  },
  "Faceless Primus": {
    "core": ["Faceless Primus", "Medium", "humanoid", [20, "plate", "shield"], "13d8+39", 97, 16,14,16,14,11,15, 6],
    "speed": [["walk", "30 ft."]],
    "senses": [10, ["darkvision", "60 ft."]],
    "saves" : [["Int", 5],["Wis", 3],["Cha", 5]],
    "special_abilities": [{
      "name": "Martial Advantage",
      "desc": "Once per turn, the primus can deal an extra 14 (4d6) damage to a creature it hits with a weapon attack if that creature is within 5 ft. of an ally of the primus that isn't incapacitated."
    }],
    "actions": [{
      "what": [0, "Multiattack"],
      "desc": "The primus makes three attacks."
    },{
      "what": [1, "Arc Sword", 9],
      "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.",
    }, {
      "what": [3, "Arc Rifle", 9],
      "desc": "Ranged Weapon Attack: +9 to hit, range 100/400 ft., one target. Hit: 6 (1d8+2) electricity damage, reload 12.",
    },{
      "what": [0, "Leadership (Recharges after a Short or Long Rest)"],
      "desc": "For 1 minute, the primus can utter a special command or warning whenever a nonhostile creature that it can see within 30 ft. of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the primus. A creature can benefit from only one Leadership die at a time. This effect ends if the centurion is incapacitated."
    }],
    "reactions": [{
      "name": "Parry",
      "desc": `The primus adds 3 to its AC against one melee attack that would hit it. To do so, the primus must see the attacker and be wielding a melee weapon.`
    }]
  },
  "Faceless Arc Knight": {
    "core": ["Faceless Arc Knight", "Medium", "humanoid", [13, "studded leather armor"],"7d8+14", 45, 13,12,14,16,13,11, 4],
    "speed": [["walk", "30 ft."]],
    "senses": [11, ["darkvision", "60 ft."]],
    "proficiencies": [["Arcana", 5]],
    "special_abilities": [{
      "name": "Arcane Advantage",
      "desc": "Once per turn, the arc knight can deal an extra 7 (2d6) damage to a creature it hits with a damaging spell attack if that target is within 5 feet of an ally of the arc knight and that ally isn't incapacitated."
    },{
      "name": "Army Arcane",
      "desc": "When the arc knight casts a spell that causes damage or that forces other creatures to make a saving throw, it can choose itself and any number of allies to be immune to the damage caused by the spell and to succeed on the required saving throw."
    }],
    "spellcasting": {
      "desc": "The arc knight is a 7th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). It has the following wizard spells prepared:",
      "levels": ["acid splash,fire bolt,ray of frost,shocking grasp", [4, "fog cloud,magic missile,thunderwave"], [3, "gust of wind,Melf's acid arrow,scorching ray"], [3, "fireball,fly,lightning bolt"], [1,"ice storm"]]
    },
    "actions": [{
      "what": [1, "Quarterstaff", 3],
      "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) bludgeoning damage, or 5 (1d8+1) bludgeoning damage if used with two hands.",
    }, {
      "what": [3, "Blaster Pistol", 3],
      "desc": "Ranged Weapon Attack: +3 to hit, range 40/160 ft., one target. Hit: 4 (1d4+2) electricity damage, reload 20.",
    }]
  },
  "Black Earth Priest": {
    "core": ["Black Earth Priest", "Medium", "humanoid", [17, "splint"],"7d8+14", 45, 15,11,14,12,10,16, 3],
    "speed": [["walk", "30 ft."]],
    "senses": [10, ["darkvision", "60 ft."]],
    "proficiencies": [["Intimidation", 5],["Religion", 3],["Persuasion", 5]],
    "special_abilities": [],
    "spellcasting": {
      "desc": "The priest is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It knows the following sorcerer spells:",
      "levels": ["acid splash,blade ward,light,mending,mold earth", [4, "earth tremor,expeditious retreat,shield"], [3, "shatter,spider climb"], [2, "slow"]]
    },
    "actions": [{
      "what": [0, "Multiattack"],
      "desc": "The priest makes two attacks."
    },{
      "what": [1, "Glaive", 4],
      "desc": "Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 7 (1d10 + 2) slashing damage.",
    }, {
      "what": [3, "Blaster Pistol", 4],
      "desc": "Ranged Weapon Attack: +4 to hit, range 40/160 ft., one target. Hit: 4 (1d4+2) electricity damage, reload 20.",
    }],
    "reactions": [{
      "name": "Unyielding",
      "desc": `When the priest is subjected to an effect that would move it, knock it prone, or both, it can use its reaction to be neither moved nor knocked prone.`
    }]
  },
  "Eternal Flame Priest": {
    "core": ["Eternal Flame Priest", "Medium", "humanoid", [12, "15 with mage armor"],"8d8+16", 52, 12,15,14,10,11,16, 3],
    "speed": [["walk", "30 ft."]],
    "senses": [10, ["darkvision", "60 ft."]],
    "proficiencies": [["Deception", 5]["Intimidation", 5],["Religion", 2]],
    "special_abilities": [],
    "spellcasting": {
      "desc": "The priest is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It knows the following sorcerer spells:",
      "levels": ["control flames,create bonfire,fire bolt,light,minor illusion", [4, "burning hands,expeditious retreat,mage armor"], [3, "blur,scorching ray"], [2, "fireball"]]
    },
    "actions": [{
      "what": [1, "Dagger", 4],
      "desc": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
    }, {
      "what": [3, "Blaster Pistol", 4],
      "desc": "Ranged Weapon Attack: +4 to hit, range 40/160 ft., one target. Hit: 4 (1d4+2) radiant damage, reload 20.",
    }]
  },
  "Faceless Hierophont": {
    "core": ["Facelss Hierophont", "Medium", "humanoid", [18, "plate"],"18d8+36", 117, 16,10,14,11,17,13, 9],
    "speed": [["walk", "30 ft."]],
    "senses": [13, ["darkvision", "60 ft."]],
    "proficiencies": [["Intimidation", 5],["Religion", 4]],
    "saves" : [["Con", 6],["Wis", 7]],
    "special_abilities": [],
    "spellcasting": {
      "desc": "The priest is a 9th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 15, +7 to hit with spell attacks). It has the following cleric spells prepared:",
      "levels": ["light,mending,sacred flame,spare the dying", 
      [4, "divine favor,guiding bolt,healing word,shield of faith"], 
      [3, "lesser restoration,magic weapon,prayer of healing,silence,spiritual weapon"], 
      [3, "beacon of hope, crusader's mantle, dispel magic, revivify, spirit guardians, water wall"],
      [3,"banishment, freedom of movement, guardian of faith, stoneskin"],
      [1,"flame strike, mass cure wounds, hold monster"]
      ]
    },
    "actions": [{
      "what": [0, "Multiattack"],
      "desc": "The priest makes two attacks."
    },{
      "what": [1, "Maul", 7],
      "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage.",
    }, {
      "what": [3, "Blaster Pistol", 7],
      "desc": "Ranged Weapon Attack: +7 to hit, range 40/160 ft., one target. Hit: 8 (1d6+2) radiant damage, reload 20.",
    }],
    "reactions": [{
      "name": "Guided Strike (Recharges after a Short or Long Rest)",
      "desc": `The priest grants a +10 bonus to an attack roll made by itself or another creature within 30 feet of it. The priest can make this choice after the roll is made but before it hits or misses.`
    }]
  },
  "Chuul": {
    "core": ["Chuul", "Large", "aberration", [16, "natural armor"],"11d10+33", 93, 19, 10, 16, 5, 11, 5, 4],
    "speed": [["walk", "30 ft."],["swim", "30 ft."]],
    "senses": [14, ["darkvision", "60 ft."]],
    "proficiencies": [["Perception", 4]],
    "immune" : {
      "damage": ["poison"],
      "condition": ["poisoned"],
    },
    "special_abilities": [{
      "name": "Amphibious",
      "desc": "The chuul can breathe air and water."
    }, {
      "name": "Sense Magic",
      "desc": "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical."
    }],
    "actions": [{
      "what": [0, "Multiattack"],
      "desc": "The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once."
    }, {
      "what": [1, "Pincer", 6],
      "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. The target is grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures grappled.",
    }, {
      "what": [4, "Tentacles", "CON", 13],
      "desc": "One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
    }],
  },
  "Merrow": {
    "core": ["Merrow", "Large", "monstrosity", [13, "natural armor"],"6d10+12", 45, 18, 10, 15, 8, 10, 9, 2],
    "speed": [["walk", "10 ft."],["swim", "40 ft."]],
    "senses": [10, ["darkvision", "60 ft."]],
    "special_abilities": [{
      "name": "Amphibious",
      "desc": "The merow can breathe air and water."
    }],
    "actions": [{
      "what": [0, "Multiattack"],
      "desc": "The merrow makes two attacks: one with its bite and one with its claws or rifle."
    }, {
      "what": [1, "Bite", 6],
      "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.",
    }, {
      "what": [1, "Claws", 6],
      "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) slashing damage.",
    }, {
      "what": [3, "Heavy Pulse Rifle", 6],
      "desc": "Ranged Weapon Attack: +8 to hit, range 80/320 ft., one target. Hit: 10 (1d10+5) fire damage, burst 4, reload 8.",
    }],
  },
  "Kuo-Toa": {
    "core": ["Kuo-Toa", "Medium", "humanoid", [13, "natural armor", "shield"],"4d8", 18, 13, 10, 11, 11, 10, 8, 1/4],
    "speed": [["walk", "30 ft."],["swim", "30 ft."]],
    "senses": [14,[ "darkvision", "120 ft."]],
    "proficiencies": [["Perception", 4]],
    "special_abilities": [{
      "name": "Amphibious",
      "desc": "The kuo-toa can breathe air and water."
    }, {
      "name": "Otherwordly Perception",
      "desc": "The kuo-toa can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving."
    }, {
      "name": "Slippery",
      "desc": "The kuo-toa has advantage on ability checks and saving throws made to escape a grapple."
    }, {
      "name": "Sunlight Sensitivity",
      "desc": "While in sunlight, the kuo-toa has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
    }],
    "actions": [{
      "what": [1, "Bite", 3],
      "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d8 + 1) piercing damage.",
    },{
      "what": [3, "Pulse Rifle", 3],
      "desc": "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 4 (1d6+1) fire damage, reload 12.",
    }],
    "reactions": [{
      "name": "Sticky Shield",
      "desc": `When a creature misses the kuo-toa with a melee weapon attack, the kuo-toa uses its sticky shield to catch the weapon. The attacker must succeed on a DC 11 Strength saving throw, or the weapon becomes stuck to the kuo-toa's shield. If the weapon's wielder can't or won't let go of the weapon, the wielder is grappled while the weapon is stuck. While stuck, the weapon can't be used. A creature can pull the weapon free by taking an action to make a DC 11 Strength check and succeeding.`
    }]
  },
  "Rune Naga": {
    "core": ["Rune Naga", "Large", "monstrosity", [15, "natural armor"],"9d10+9", 58, 15, 16, 12, 15, 15, 16, 4],
    "speed": [["walk", "30 ft."],["swim", "30 ft."]],
    "senses": [12, ["darkvision", "60 ft."]],
    "special_abilities": [{
      "name": "Amphibious",
      "desc": "The rune naga can breathe air and water."
    }],
    "spellcasting": {
      "desc": "The naga is a 5th-level spellcaster (spell save DC 12, +4 to hit with spell attacks) that needs only verbal components to cast its spells. Its spellcasting ability is Intelligence, and it has the following wizard spells prepared:",
      "levels": ["mage hand,minor illusion,ray of frost", [4, "charm person,sleep"], [3, "detect thoughts,hold person"], [2, "lightning bolt"]]
    },
    "actions": [{
      "what": [1, "Bite", 5],
      "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit: 10 (2d6 + 3) piercing damage plus 10 (3d6) poison damage.",
    }]
  },
  "Water Elemental": {
    "core": ["Water Elemental", "Large", "elemental", [14, "natural armor"],"12d10+48", 114, 18, 14, 18, 5, 10, 8, 5],
    "speed": [["walk", "30 ft."],["swim", "90 ft."]],
    "senses": [10, ["darkvision", "60 ft."]],
    "resist" : ["acid", "bludgeoning, piercing, and slashing from nonmagical weapons"],
    "immune" : {
      "damage": ["poison"],
      "condition": ["exhaustion", "grappled", "paralyzed", "petrified", "poisoned", "prone", "restrained", "unconscious"],
    },
    "special_abilities": [{
      "name": "Water Form",
      "desc": "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
    }, {
      "name": "Freeze",
      "desc": "If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 ft. until the end of its next turn."
    }],
    "actions": [{
      "what": [0, "Multiattack"],
      "desc": "The elemental makes two slam attacks."
    },{
      "what": [1, "Slam", 7],
      "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.",
    },{
      "what": [0, "Whelm (Recharge 4-6)"],
      "desc":  `<p class="mb-2">Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it is Large or smaller, it is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space.
        </p></br>The elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes 13 (2d8 + 4) bludgeoning damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength and succeeding.`,
    }]
  },
  "Knight": {
    "core": ["Knight", "Medium", "humanoid", [18, "plate"],"8d8+16", 52, 16, 11, 14, 11, 11, 15, 3],
    "speed": [["walk", "30 ft."]],
    "senses": [10],
    "saves" : [["Con", 4],["Wis", 2]],
    "special_abilities": [{
      "name": "Brave",
      "desc": "The knight has advantage on saving throws against being frightened."
    }],
    "actions": [{
      "what": [0, "Multiattack"],
      "desc": "The knight makes two attacks."
    }, {
      "what": [1, "Greatsword", 5],
      "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
    }, {
      "what": [3, "Blaster Rifle", 2],
      "desc": "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d8+1) fire damage, reload 12.",
    },{
      "what": [0, "Leadership (Recharges after a Short or Long Rest)"],
      "desc": "For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 ft. of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated.",
    }],
    "reactions": [{
      "name": "Parry",
      "desc": `The knight adds 2 to its AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon.`
    }]
  },
  "Champion": {
    "core": ["Champion", "Medium", "humanoid", [18, "plate"],"22d8+44", 143, 20, 15, 14, 10, 14, 12, 9],
    "speed": [["walk", "30 ft."]],
    "senses": [16],
    "saves" : [["Str", 9],["Con", 6]],
    "proficiencies": [["Athletics", 9], ["Intimidation", 5], ["Perception", 6]],
    "special_abilities": [{
      "name": "Indomitable (2/Day)",
      "desc": "The champion rerolls a failed saving throw."
    }, {
      "name": "Second Wind (Recharges after a Short or Long Rest)",
      "desc": "As a bonus action, the champion can regain 20 hit points."
    }],
    "actions": [{
      "what": [0, "Multiattack"],
      "desc": "The champion makes three attacks."
    }, {
      "what": [1, "Greatsword", 9],
      "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage, plus 7 (2d6) slashing damage if the champion has more than half of its total hit points remaining.",
    }, {
      "what": [3, "Blaster Rifle", 6],
      "desc": "Ranged Weapon Attack: +6 to hit, range 100/400 ft., one target. Hit: 6 (1d8+2) fire damage, reload 12, plus 7 (2d6) slashing damage if the champion has more than half of its total hit points remaining.",
    }]
  },
  "Deva": {
    "core": ["Deva", "Medium", "celestial", [17, "natural armor"],"22d8+44", 143, 18, 18, 18, 17, 20, 20, 10],
    "speed": [["walk", "30 ft."],["fly", "90 ft."]],
    "senses": [19,["darkvision", "120 ft."]],
    "saves" : [["Wis", 9],["Cha", 9]],
    "proficiencies": [["Insight", 9], ["Perception", 9]],
    "resist" : ["radiant", "bludgeoning, piercing, and slashing from nonmagical weapons"],
    "immune" : {
      "condition": ["charmed", "exhaustion", "frightened"],
    },
    "special_abilities": [{
      "name": "Angelic Weapons",
      "desc": "The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack)."
    }, {
      "name": "Magic Resistance",
      "desc": "The deva has advantage on saving throws against spells and other magical effects."
    }],
    "spellcasting": {
      "desc": "The deva's spellcasting ability is Charisma (spell save DC 17). The deva can innately cast the following spells, requiring only verbal components:",
      "innate": [["At will", "detect evil and good"], ["1/day each", "commune,raise dead"], ]
    },
    "actions": [{
      "what": [0, "Multiattack"],
      "desc": "The deva makes two attacks.",
    }, {
      "what": [1, "Mace", 8],
      "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage.",
    }, {
      "what": [0, "Healing Touch (3/Day)"],
      "desc": "The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
    }, {
      "what": [0, "Change Shape"],
      "desc": `<p class="pb-2">The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice).
      </p></br>In a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks.`,
    }]
  },
  "Enchanter": {
    "core": ["Enchanter", "Medium", "humanoid", [12, "15 with mage armor"],"9d8", 40, 9, 14, 11, 17, 12, 11, 5],
    "speed": [["walk", "30 ft."]],
    "senses": [11],
    "saves" : [["Int", 6],["Wis", 4]],
    "proficiencies": [["Arcana", 6], ["History", 6]],
    "resist" : ["radiant", "bludgeoning, piercing, and slashing from nonmagical weapons"],
    "immune" : {
      "condition": ["charmed", "exhaustion", "frightened"],
    },
    "special_abilities": [],
    "spellcasting": {
      "desc": "The enchanter is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The enchanter has the following wizard spells prepared:",
      "levels": ["friends,mage hand,mending,message", [4, "charm person*,mage armor,magic missile"], [3, "hold person*,invisibility,suggestion*"], [3, "fireball,haste,tongues"], [3, "dominate beast*,stoneskin"], [2, "hold monster*"], ],
      "notes": "*Enchantment spell of 1st level or higher"
    },
    "actions": [{
      "what": [1, "Quarterstaff", 2],
      "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d6-1) bludgeoning damage, or 3 (1d8-1) bludgeoning damage if used with two hands.",
    }, {
      "what": [3, "Blaster Pistol", 2],
      "desc": "Ranged Weapon Attack: +2 to hit, range 40/160 ft., one target. Hit: 4 (1d4+2) fire damage, reload 20.",
    }]
  },
}

import {MONSTERS} from "../ogl-monster-data.js"

const byId = (id) => {
  if(MONSTERS[id] && !FORCES[id]) return {name:id,CR:MONSTERS[id].CR}
  if (!FORCES[id]) return {name:id,CR:-1} 
  let F = FORCES[id]
  //array conversion
  let ids = ["name","size","type","AC","HD","hp"]

  let force = Object.assign({
    abilities : F.core.slice(6,12),
    CR : F.core[12]
  },F)
  ids.forEach((id,i) => force[id] = F.core[i])
  return force
}

//  https://codepen.io/retractedhack/pen/gPLpWe  
const STATBLOCK = `
<div>
  <div class="stat-block" v-for="(force,i) in forces">
  <button type="button" class="close" @click="forces.splice(i,1)">&times;</button>
  <hr class="orange-border"/>
  <div class="section-left">
    <div class="creature-heading">
      <h1>{{force.name}}</h1>
      <h2>{{force.size}} {{force.type}}</h2>
    </div>
    <!-- creature heading -->
    <svg height="5" width="100%" class="tapered-rule">
      <polyline points="0,0 400,2.5 0,5"></polyline>
    </svg>
    <div class="top-stats">
      <div class="property-line first">
        <h4>Armor Class</h4>
        <p>{{force.AC[0]}} ({{force.AC.slice(1).join(', ')}})</p>
      </div>
      <!-- property line -->
      <div class="property-line">
        <h4>Hit Points</h4>
        <p>{{force.HD}} ({{force.hp}})</p>
      </div>
      <!-- property line -->
      <div class="property-line last">
        <h4>Speed</h4>
        <p>
            <span class="mx-1" v-for="s in force.speed">{{s.join(' ')}}</span>
        </p>
      </div>
      <!-- property line -->
      <svg height="5" width="100%" class="tapered-rule">
        <polyline points="0,0 400,2.5 0,5"></polyline>
      </svg>
      <div class="abilities">
        <div v-for="a in abilities[i]" :class="a.class">
            <h4>{{a.stat}}</h4>
            <p>{{a.val}} ({{a.b}})</p>
        </div>
      </div>
      <!-- abilities -->
      <svg height="5" width="100%" class="tapered-rule">
        <polyline points="0,0 400,2.5 0,5"></polyline>
      </svg>
      <div class="property-line" v-if="force.saves">
        <h4>Saving Throws</h4>
        <p>
            <span class="mx-1" v-for="s in force.saves">{{s.join(' +')}}</span>
        </p>
      </div>
      <!-- property line -->
      <div class="property-line" v-if="force.proficiencies">
        <h4>Proficiencies</h4>
        <p>
            <span class="mx-1" v-for="p in force.proficiencies">{{p.join(' +')}}</span>
        </p>
      </div>
      <!-- property line -->
      <div class="property-line first" v-if="force.damage_resistances">
        <h4>Damage Resistamces</h4>
        <p>{{force.damage_resistances.join(', ')}}</p>
      </div>
      <!-- property line -->
      <div class="property-line first" v-if="force.damage_immunities">
        <h4>Damage Immunities</h4>
        <p>{{force.damage_immunities.join(', ')}}</p>
      </div>
      <!-- property line -->
      <div class="property-line" v-if="force.condition_immunities">
        <h4>Condition Immunities</h4>
        <p>{{force.condition_immunities.join(', ')}}</p>
      </div>
      <!-- property line -->
      <div class="property-line" v-if="force.senses.slice(1).length > 0">
        <h4>Senses</h4>
        <p>
          <span class="mx-1" v-for="s in force.senses.slice(1)">{{s.join(' ')}}</span>
        </p>
      </div>
      <!-- property line -->
      <div class="property-line">
        <h4>Perception</h4>
        <p>{{force.senses[0]}}</p>
      </div>
      <!-- property line -->
      <div class="property-line last">
        <h4>Challenge</h4>
        <p>{{force.CR}}</p>
      </div>
      <!-- property line -->
    </div>
    <!-- top stats -->
    <svg height="5" width="100%" class="tapered-rule">
      <polyline points="0,0 400,2.5 0,5"></polyline>
    </svg>
    <div class="property-block">
      <div v-for="sa in force.special_abilities">
        <h4>{{sa.name}}.</h4>
        <p v-html="sa.desc"></p>
      </div>
    </div>
    <!-- property block -->
    <div class="property-block">
      <div v-if="force.spellcasting">
        <h4>Spellcasting.</h4>
        <p>{{force.spellcasting.desc}}
        <ul v-if="force.spellcasting.levels">
            <li>Cantrips (at will): {{force.spellcasting.levels[0].split(',').join(', ')}}</li>
            <li v-for="(l,i) in force.spellcasting.levels" v-if="i>0">Level {{i}} ({{l[0]}} slots): {{l[1].split(',').join(', ')}}</li>
        </ul>
        <ul v-if="force.spellcasting.innate">
            <li v-for="(l,i) in force.spellcasting.innate">{{l[0]}}: {{l[1].split(',').join(', ')}}</li>
        </ul>
        <span v-if="force.spellcasting.notes">{{force.spellcasting.notes}}</span>
        </p>
      </div>
    </div>
    <!-- property block -->
  </div>
  <!-- section left -->
  <div class="section-right">
    <div class="actions">
      <h3>Actions</h3>
      <div class="property-block" v-for="act in force.actions">
        <h4>{{act.what[1]}}.</h4>
        <p v-html="act.desc"></p>
      </div>
      <!-- property block -->
    </div>
    <!-- actions -->
    <div class="actions" v-if="force.reactions">
      <h3>Reactions</h3>
      <div class="property-block" v-for="act in force.reactions">
        <h4>{{act.name}}.</h4>
        <p v-html="act.desc"></p>
      </div>
      <!-- property block -->
    </div>
    <!-- actions -->
    <div class="actions" v-if="force.legendary_actions">
      <h3>Legendary Actions</h3>
      <div class="property-block" v-for="act in force.legendary_actions">
        <h4>{{act.name}}.</h4>
        <p>{{act.desc}}</p>
      </div>
      <!-- property block -->
    </div>
    <!-- actions -->
  </div>
  <!-- section right -->
  <hr class="orange-border bottom"/>
</div>
</div>
`

export {byId,STATBLOCK}
