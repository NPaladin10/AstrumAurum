//"Goblin,Goblin Boss,Dust Mephit,Magma Mephit,Mud Mephit,Steam Mephit,Troll,Needle Blight",
//core : name, CR, size, type, abilities 
const FORCES = {
  "Goblyn": {
    "core": ["Goblyn", 1, "Small", "aberration", "3 hp", 12],
    "senses": ["dk.60"],
    "atks": [["m", "Claws", "slashing","1d4"]],
    "extras": [{
      "what": ["sa", "Elemental"],
      "text": `Each goblyn has an elemental nature that provides a minor benefit, pick from the following: 
        earth (4hp/+2 AC), fire (1d6 claw damage), air (+1 AC/fly 30ft.), water (+1 AC/swim 30ft.).  
      `
    }]
  },
  "Mephit": {
    "core": ["Mephit", 1, "Small", "aberration", "3 hp", 13],
    "speed" : ["f.30"],
    "senses": ["dk.60"],
    "atks": [["m", "Claws", "slashing","1d4"]],
    "extras": [{
      "what": ["sa", "Elemental"],
      "text": `Each mephit has an elemental nature that provides a minor benefit, pick from the following: 
        earth (4hp/+2 AC), fire (1d6 claw damage), air (+1 AC/fly 30ft.), water (+1 AC/swim 30ft.).  
      `
    }]
  },
  "Goblyn Brute": {
    "core": ["Goblyn Brute", 1, "Medium", "aberration", 2, 14],
    "senses": ["dk.60"],
    "atks": [["m", "Claws", "slashing","1d6"]],
    "extras": [{
      "what": ["sa", "Elemental"],
      "text": `Each goblyn has an elemental nature that provides a minor benefit, pick from the following: 
        earth (4hp/+2 AC), fire (1d6 claw damage), air (+1 AC/fly 30ft.), water (+1 AC/swim 30ft.).  
      `
    }]
  },
  "Goblyn Boss": {
    "core": ["Goblyn Boss", 3, "Medium", "aberration", 4, 15],
    "senses": ["dk.60"],
    "atks": [["m", "Claws", "slashing","1d8"]],
    "extras": [{
      "what": ["sa", "Elemental"],
      "text": `Each goblyn has an elemental nature that provides a minor benefit, pick from the following: 
        earth (4hp/+2 AC), fire (1d6 claw damage), air (+1 AC/fly 30ft.), water (+1 AC/swim 30ft.).  
      `
    },{
      "what": ["sa", "Regeneration"],
      "text": `A boss cannot be killed except by magical damage. 
      If dropped to 0 HD by any other type of damage the goblyn stands up the next round with 1 HD.`
    }]
  },
  "Troll": {
    "core": ["Troll", 3, "Small", "aberration", 6, 14],
    "senses": ["dk.60"],
    "atks": [["m", "Claws & Bite", "slashing","1d8+1"]],
    "extras": [{
      "what": ["sa", "Elemental"],
      "text": `Each goblyn has an elemental nature that provides a minor benefit, pick from the following: 
        earth (4hp/+2 AC), fire (1d6 claw damage), air (+1 AC/fly 30ft.), water (+1 AC/swim 30ft.).  
      `
    },{
      "what": ["sa", "Regeneration"],
      "text": `A troll cannot be killed except by fire or acid damage. 
      If dropped to 0 HD by any other type of damage the troll stands up the next round with 1 HD.`
    }]
  },
}

export {FORCES}