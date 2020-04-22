const MELEE = [
  ["Unarmed","1d2","Fists"],
  ["Light","1d4","Knife,Chain,Club"],
  ["Standard","1d6","Short Sword,Staff,Longsword,Mace"],
  ["Large","1d8","Glaive,Two-handed Sword,Maul"],
]

const RANGED = [
  ["Light","1d4","Pistol"],
  ["Standard","1d6","Rifle,Shotgun,Bow,Crossbow"],
]

//acid, bludgeoning, cold, fire, force, lightning, necrotic, piercing, poison, psychic, radiant, slashing, and thunder

let WEAPONTAGS = [
      [`Concealed`, `Inconspicuous and easily hidden.`],
      [`Defensive`, `Can parry, deflect and disarm.`],
      [`Energy`, `The weapon does energy damage, pick the type: acid, cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder.`],
      [`Flexible`, `Whip length capable of binding and lashing.`],
      [`Glove`, `A heavy, weaponized glove. Can still manipulate objects.`],
      [`Hafted`, `Two handed. Long reach. Sweeping attacks.`],
      [`Shock`, `Electrocutes, causes malfunctions in electronics and robots.`],
      [`Stun`, `Non-lethal. Stuns, snares or renders unconscious.`],
      [`Thrown`, `Melee weapon that may be thrown.`],
      [`Ammo-n`, `The weapon requires ammo and comes with n standard.`],
      [`Burst`, `Fire 3 shots and roll double the damage dice.`],
      [`Auto`, `Fire 10 shots and damage everyone within a cone in front of you.`],
      [`Silenced`, `Suppressed muzzle flash and practically silent shot.`],
      [`Concussive`,`Exceptionally loud and bright. Those who fail a save are deaf and blind for a time.`],
      ['Range-d',`Has a range out to distance d, in feet. Can shoot up to double distance, but it is hard: -3 penalty to attacks.`],
      ['AP',`Armor piercing, it easily passes through natural and standard armor (+3 to attack), but not force or magical armor.`],
      ['Deadly+n',`Deadlier than standard, add n to damage roll.`],
      ['Accurate+n',`More accurate, good for precise attacks, add n your attack rolls.`],
      ['Area-type-sz',`Does damage to an area that starts from the user (unless it is ranged). Pick the area: cone, line, or circle and the sz is the size of the area.`]
]

const ARMOR = [
  ["Light",12,""],
  ["Medium",14,""],
  ["Heavy",16,"Clumsy"],
]

let ARMORTAGS = [
      [`Clumsy`,`Makes DEX based saves harder: -3 penalty.`],
      [`Force`,`The armor is a barrier of force.`],
      [`Hardened`,`The armor resists AP weapons.`],
]

/*
      [`Comms`,`Can receive and broadcast signals over great distances.`],
      [`Connected`,`Built-in CPU with eye-piece HUD, connects wirelessly to other systems.`],
      [`Impressive`,`Distinctive, intimidating, with embellishments and accessories.`],
      [`Jump`,`Jets Can give small burst jumps, slow descent, and controlled flight in zero-g.`],
      [`Rig`,`Choose a Kit: That Kit is integrated in the suit. Can still cary a 2nd Kit.`],
      [`Tough`,`Protects from elements, hard to damage, easy to repair.`],
      [`Sealed`,`Airtight suit with helmet and oxygen tank.`],
      [`Sensor`,`Choose a type of information. The wrist screen scans for that subject.`],
      [`Hardened`,`Penetrating weapons do not reduce its AC.`],
      [`Stealthy`,`Muffled, blends in to environments, difficult to pick up on scanners.`],
      [`Visor`,`Choose a type of information. The visor detects that subject.`],

*/

export {MELEE,RANGED,WEAPONTAGS,ARMOR,ARMORTAGS}