const powers = {
  "Animal Control": {
    "description": "Choose one favored type of animal. Heroes may communicate with favored animals of this type as if they were human NPCs, although their understanding of the world is limited."
  },
  "Creature Summoning": {
    "description": "Once per scene, a hero can generate a creature that’s under their control. They might bring forth an elemental, or something mundane like an animal sidekick. The creature that they summon will be the same every time, but it has HD equal to ½ the Usage Die of the power. The creature will dissipate or wander away at the end of the scene. \n\nThe summoned creature is not an NPC, but under the player’s control. When the creature is active during a conflict, it acts on the hero’s turn. Both may take a free movement, but only one can take an action."
  },
  "Disguise": {
    "description": "The hero can alter their face, build, and voice at will in order to become a completely different person. If they spend time interacting with someone, they can imitate them near-perfectly. Convincing someone trying to see through the disguise requires a CHA Test (Persuasion)."
  },
  "Duplication": {
    "description": "Once per scene, the hero can create a copy of themselves up to one zone away. This copy is perfectly identical, but their Level is equal to ½ the Usage Die. The duplicate is not an NPC, but another character under the player’s control. During a conflict, both the hero and duplicate get a free movement, but only one can take an action. The hero may dismiss the copy at will, or it will fade away on its own at the end of the scene. The duplicate has its own HP for physical damage, but mental attacks affect the hero and duplicate."
  },
  "Elasticity": {
    "description": "The hero’s body stretches to incredible lengths. By stretching, the hero can interact with objects and make melee attacks in an adjacent zone without moving. Additionally, they can contort their body into rough approximations of animals, objects, and tools, although their mass doesn’t change and they still very much look like yourself."
  },
  "Elemental Immunity": {
    "description": "Select a specific Element Tag - this power allows the hero to resist damage from those attacks. Reduce all damage from the selected element by the Usage Die maximum. They may roll the Usage Die and use Channel, but automatically ignore all damage. Thus Burning this power provides no further defensive benefits."
  },
  "Energy Blast": {
    "description": "The hero can fire a projectile of some sort, with a range of three zones - use a DEX Test. The nature of the projectile matches the chosen Element/Magic Tag."
  },
  "Flight": {
    "description": "The hero can move vertically through the air as easily as moving along the ground."
  },
  "Gadgeteering": {
    "description": "The hero has an intuitive understanding of machines of all types. Just by seeing a device, they can tell what it does, at least in general."
  },
  "Harm": {
    "description": "The hero can harm with their touch. This requires a DEX Test. The nature of the harm matches the chosen Element/Magic Tag."
  },
  "Healing": {
    "description": "This item allows the hero to use the Healing ability of pure cosmic on themselves or others. No Usage Die check is required. An individual can only benefit from this Healing once per day."
  },
  "Illusion": {
    "description": "A hero can project an illusory image, up to about human size, as far as one zone away. They can also generate sounds, including voices. They must concentrate to keep the illusion active. Others must actively try to see through the illusion. Convincing someone trying to see through the illusion requires a CHA Test (Persuasion)."
  },
  "Influence": {
    "description": "Make a CHA Attribute Test against a target. If the hero succeeds, they may give the target a task, which they will then attempt to fulfill. Anyone the hero gives a task to will try their best to accomplish it until they succeed or the scene ends, whichever comes first. The tasks they assign must be short-term objectives, such as “Give me that gun,” or “Go away.” Because even the weakest-willed are driven by self-preservation, the hero cannot force someone to directly harm themselves or put themselves in an inevitably fatal position, such as jumping off a building, but the hero can force them to take riskier actions than they would like to."
  },
  "Invisibility": {
    "description": "The hero completely fades from view, including their clothes and anything you’re carrying. Cameras and similar devices cannot detect them at all. Remaining invisible against someone trying to spot them requires a DEX Test (Stealth). If they attack while invisible their opponent automatically spots them. But they can use their next action to become invisible again."
  },
  "Item Summoning": {
    "description": "The hero can create simple items, such as hand tools or weapons, just by willing them into existence. This requires an INT Test, and the GM should set a level based upon the size and complexity of the item the hero wishes to create. While the item they summon can have multiple parts—for instance, a sack of they can’t summon electronic gadgets, explosives, or items that require precise manufacturing, like firearms. They may only summon one item at a time, but they can summon as often as you’d like. The GM should increase the level for every other item summoned in the scene. The hero can cause summoned objects to dissipate at will, but they’ll disappear on their own after a few minutes or at the end of the scene, whichever comes first."
  },
  "Machine Control": {
    "description": "A hero can control machines up to one zone away without touching them. Most machines won’t resist them at all, but something computerized will require an INT Test. The GM should determine the level of the computer based upon its complexity. They can only make a machine do something it’s capable of."
  },
  "Material Mimic": {
    "description": "While in contact with any material—iron, stone, wood, and so on—the hero can alter your body to mimic that substance. They can use this to gain the use of another power descriptor based upon the material that they are in contact with. This requires a CON Test. If they succeed, they gain the new power at the same Usage Die value. A hero may only have one such power at a time, and it goes away if you break contact with the substance that they are mimicking."
  },
  "Phasing": {
    "description": "The hero can walk through walls and other physical barriers. This requires a CON Test, and the GM should set a level based upon the thickness and materials of the barrier."
  },
  "Plant Control": {
    "description": "The hero can communicate with plants up to two zones away. They can direct and accelerate their movements, animating them and using them to take physical actions or even make attacks. When an animated plant takes action, the hero must make a WIS Test to control it."
  },
  "Power Amplification": {
    "description": "By touching a super-powered individual, you can make them Empowered. This status allows the individual to Burn once for free at a Usage Die equal to Power Amplification. Additionally, a hero with this power always knows who around them has powers and generally what those powers are."
  },
  "Power Nullification": {
    "description": "The hero can render their zone inhospitable to the use of cosmic/powers. If someone attempts to use cosmic/power in their zone, they may take an Action and make a WIS Test to stop it - use the HD of the target to determine whether there is a penalty to the roll. This nullification field does not affect the hero, and they can dismiss it at will. Additionally, a hero with this power always knows who around them has powers and generally what those powers are."
  },
  "Precognition": {
    "description": "The hero can see hits coming early. They can use a WIS Test to defend against all physical attacks. Also, during a conflict they can always act before anyone who does not have Precognition."
  },
  "Regeneration": {
    "description": "Roll the Usage Die (Downgrade if required), the hero regains that many HP every Minute for an Hour."
  },
  "Resistance": {
    "description": "Select physical or energy attacks - this power allows the hero to resist damage from those attacks. Reduce all selected damage by ½ the Usage Die. They may roll the Usage Die and use Channel, but always use the die maximum. Energy attacks include electricity—such as stun guns and tasers—radiation, fire, and most super-powered blasts. While physical attacks include bullets, punches, most melee weapons, etc."
  },
  "Shape-Shifting": {
    "description": "The hero can change their form into that of any creature. This requires a CON Test. The hero gains the use any powers that the creature may have. The powers are capped at the Shape-Shifting Usage Die value. The new shape persists until the hero decides to end it or they are unconscious."
  },
  "Shielding": {
    "description": "With a moment’s concentration, the hero can erect a barrier between their zone and an adjacent zone, which lasts until the end of the scene or they will it away. This barrier is transparent, but no matter can pass through it. The barrier has a HD equal to  ½ the Usage Die of Shielding. The hero may erect multiple barriers, but each active barrier after the first reduces the HD of all barriers by one."
  },
  "Slowing": {
    "description": "Select a target up to one zone away and make DEX Test. That target cannot move to another zone until the hero releases them or the hero fails a WIS Test. “Slowing” is a broad term for several different means of getting an opponent to stop in their tracks. The exact nature is dependent upon the chosen Element/Magic Tag."
  },
  "Super Agility": {
    "description": "The hero is preternaturally graceful. They may attempt feats of leaping, balancing, and agility that others cannot. They also have a prodigious leap: leaping up to a second-story window or from rooftop to rooftop across a wide alleyway is a simple task that does not require a Test. This distance doubles for every step up in Usage Die."
  },
  "Super Intelligence": {
    "description": "The hero automatically has an Advantage when performing actions related to working though puzzles, riddles, or other mentally absorbing tasks. They do not need to make a Usage Die check. In addition, they can answer complicated mathematical problems instantly."
  },
  "Super Senses": {
    "description": "For every die step, pick a sense—sight, hearing, smell, taste, or touch. That sense cannot be impeded; for instance, the hero can see in darkness or hear clearly in a cacophony. For every die step, the range/effectiveness of the selected senses is doubled."
  },
  "Super Speed": {
    "description": "The hero becomes super naturally fast. They can move quickly enough to run across liquids or up sheer vertical surfaces—although if they slow down or stop, they’ll fall."
  },
  "Super Strength": {
    "description": "The hero gains superhuman strength. For every die step, quadruple (4X) the hero’s lifting/carrying capability."
  },
  "Super Toughness": {
    "description": "This defensive power allows the hero to resist physical attacks. The power automatically reduces all physical damage by 1 point per die step."
  },
  "Telekinesis": {
    "description": "The hero can move objects in their own or adjacent zones without physically touching them. By hurling objects around, they can make a WIS Test to attack targets in your zone. The weight that they can lift is based upon their Wisdom. For every die step above d4, quadruple (4X) the telekinesis lifting/throwing capability."
  },
  "Telepathy": {
    "description": "Select a living target up to one zone away and make WIS/CHA Test. The hero can use this power to glean information from their mind. Using Charisma allows the hero to discover what the target is feeling, while Wisdom delves into thoughts and memories. The hero can also project words into the minds of anyone within range."
  },
  "Teleportation": {
    "description": "The hero can move up to three zones as an action, provided that they can see where they are moving to."
  },
  "Wall-Crawling": {
    "description": "The hero can move along any solid surface, even upside-down, as easily as if they were moving along the ground."
  },
  "Weather Control": {
    "description": "The hero can fill their zone with specific weather patterns with a successful WIS Test. The GM should set the level of the change based upon the current conditions and the desired result - a tornado should be Level 10 while fog should be relatively easy. These weather patterns fade away when the hero desires them to, when they leave the zone, or otherwise at the end of the scene."
  }
}

const OSRPOWERS = {
  "Blast" : {
    "type" : "RA",
    "cost" : 1,
    "options" : ["Acid", "Electricity", "Fire", "Force", "Sonic"],
    "dmg" : ["4d6","6d6","8d6"],
    "range" : ["ft",300,900,3000],
    "text": `Using a ranged attack, the hero fires a blast of energy. When selecting this power, you must pick which energy the hero uses.`,
    "reduced" : `You may use this power to do half the listed damage.`,
  },
  "Blast, Cold" : {
    "type" : "AA",
    "cost" : 1,
    "dmg" : ["2d8","3d8","4d8"],
    "area" : [["cone","ft",30,90,300]],
    "text": `The hero can project or breathe freezing frost or snow as a ranged cone attack.
      It inflicts cold damage; if a victim takes
      any damage after DR you make make a Power Roll, if successful they are
      frozen in ice and unable to act until thawed out. Unless thawed out in hospital
      or via Healing a victim loses 1d6 more hp.`,
    "reduced" : `You may use this power to do half the listed damage.`,
  },
  "Blast, Mental" : {
    "type" : "PA",
    "cost" : 1,
    "dmg" : ["2d6","3d6","4d6"],
    "range" : ["ft",50,150,500],
    "text": `The hero can assault the mind or nervous system of a conscious being.
      Make a Power Roll, if successful the target takes the listed damage. Mind Blast ignores DR, with the exception of that
      provided by a Mind Shield.`,
    "reduced" : `You may use this power to do half the listed damage.`,
  },
  "Blast, Explosive" : {
    "type" : "AA",
    "cost" : 2,
    "range" : ["ft",300,900,3000],
    "dmg" : ["4d6","6d6","8d6"],
    "area" : [["circle","ft",10,30,100]],
    "text": `The hero can use a ranged attack to fire an explosive missile or energy blast. 
    Make a Power Roll for every target in the the area, a failure results in half damage.`
  },
  "Blast, Guided" : {
    "type" : "AA",
    "cost" : 4,
    "range" : ["ft",500,1500,5000],
    "dmg" : ["4d6","6d6","8d6"],
    "area" : [["circle","ft",10,30,100]],
    "text": `The hero can create some form of homing or guided missile or energy bolt
      and fire it at the target. As the attack is guided it can be fired around one
      corner and it hits automatically.`
  },
  "Animal Control" : {
    "type" : "C",
    "cost" : 1,
    "options" : ["Avian", "Land", "Marine"],
    "HD" : [5,8,10],
    "range" : ["ft",50,150,500],
    "text": `The hero can control up to HD of normal animals within the range of the power. Animals that are loyal 
      to a master or fierce resist, and the hero must make a Power roll; others are automatically affected. 
      Specify either land animals, avians, or marine creatures. Types that fall into two categories (amphibians, etc.) can be
      controlled by either.`
  },
  "Analytic Taste" : {
    "type" : "C",
    "cost" : 1,
    "feature" : true,
    "text": `This is the ability to taste an organic substance and instantly perform
    the equivalent of a full laboratory scientific or genetic analysis on it. The
    hero can also compare two samples, e.g., taste a person’s blood and then
    determine if a bloodstain is the same person (or a close relative).`
  },
  "Apport" : {
    "type" : "PA",
    "cost" : 2,
    "range" : ["ft",100,300,1000],
    "weight" : ["30 lbs.","300 lbs.","3000 lbs."],
    "text": `The hero may teleport an object into his or her presence. This causes it to
    vanish and then instantly reappear within 5 ft., or in the their grasp if small
    enough. The object must be perceived or at a known location within the range and
    weight limits, and not part of something else. The hero could
    (for instance) teleport a sword or other small gadget out of someone’s hand,
    but not teleport the heart out of someone’s chest.`
  },
  "Armor" : {
    "type" : "P",
    "AC" : [7,8,9],
    "DR" : [8,12,16],
    "text": `The hero has very tough skin or actual armor.`
  },
  "Armor UP" : {
    "type" : "S",
    "cost" : 2,
    "AC" : [8,9,10],
    "DR" : [10,15,20],
    "text": `The hero can create ultra-strong armor for a brief period, often by forming
    ice or stone around his or her body, turning the entire body metallic, or
    reinforcing it with energy.`
  },
  "Astral Travel" : {
    "type" : "C",
    "cost" : 1,
    "text": `By going into a trance the hero’s spirit will leave his or her body. The spirit
      acts as if it had simultaneously activated Intangibility, Invisibility, and Flight
      powers but only paying the energy points for a single such power. However,
      the hero’s body is left behind (paralyzed) while his or her spirit is traveling.
      Astral characters can affect each other normally and while astral can take
      with them gadgets and costumes, but not other gear.`
  },
  "Aura" : {
    "type" : "S",
    "cost" : 1,
    "options" : ["Acid", "Cold", "Electricity", "Fire", "Sonic"],
    "dmg" : ["2d6","3d6","4d6"],
    "text": `The hero’s body drips with acid, radiates cold, burns with fire, crackles
      with electricity, or buzzes with sound. Anything touching the hero while
      unarmed takes the applicable damage. If the hero touches a foe this can be added to normal unarmed combat damage.
      In addition the hero has an additional DR (4|6|8) resistance against that damage
      type while the power is sustained. In addition any damage attacks of the
      specified type do (+1|+3|+5) damage per die when the hero attacks with them.`
  },
  "Bad Luck" : {
    "type" : "PA",
    "cost" : 1,
    "range" : ["ft",50,150,500],
    "duration" : ["1d6 turns","1d6 hours","1d6 days"],
    "text": `If the player succeds with a Power Roll, the hero will curse someone with bad luck. 
    If successful, the foe will suffer the a penalty to attack (-2|-4|-6), and 
    anyone attacking them gain a bonus to hit (+2|+4|+6) as well as an advantage on all non-combat rolls vs them. 
    The Referee can also have ill fortune happen to them.`
  },
  "Bestow Power" : {
    "type" : "S",
    "cost" : 1,
    "range" : ["ft",50,150,500],
    "text": `Use this to let the hero have a power that only works some of the time,
      but can be “cast” on other people, like a magic spell. This is a customizable
      power – define it by picking a Permanent power: for instance, Bestow Armor,
      or Bestow Flight. Instead of being permanent, it becomes a sustained power. 
      It can be used on/by the character, or with one round of
      concentration, cast on another target within the range of the power. The power lasts for as
      long as it is sustained, i.e., as long as 1 EP is paid every 10-minute turn. If it’s
      applied to a feature it actually lasts longer: 1 EP per hour sustained. Buying
      several Permanent powers this way can represent super-powered sorcerers
      and similar magic users. A character can’t bestow a power on more than one
      person at a time until the existing effect is removed.`
  },
  "Body Swap" : {
    "type" : "TA",
    "cost" : 2,
    "text": `The hero can switch bodies with someone else. It requires a touch attack,
and the victim gets a Charisma save to resist. Only personality and memory
transfers; otherwise exchange characters for the duration of effect.
Exception: The Body Swap power cannot be used by the new recipient; it
doesn’t transfer! It lasts until the subject makes his or her saving throw; a
new saving throw is allowed every turn.`
  },
  "Clairvoyance" : {
    "type" : "C",
    "cost" : 2,
    "range" : ["mi",100,1000,10000],
    "text": `The user may attempt to see a vision of a distant place, person, or object
      that he or she is familiar with, or knows where to look.      
      Only a brief glimpse is provided each round but the user can opt to move or rotate the 
      viewpoint up to 10 ft. per round if concentration is maintained.
      Clairvoyance won’t spot targets using a Mind Shield or Force Field.`
  },
  "Claws/Fangs" : {
    "type" : "P",
    "feature" : true,
    "text": `With this minor power, the hero has large talons, fangs, blades, hooves,
      fangs, beak, or stinger that increases his or her unarmed damage to 1d10
      damage (modified by your Soldier score).`
  },
  "Chameleon" : {
    "type" : "P",
    "feature" : true,
    "text": `The hero can change color to vanish against a background, allowing
    effective invisibility while motionless, or nearly so. The effect takes a few
    seconds to adjust, so the hero cannot use this ability while attacking or
    moving faster than a slow walk (30 ft./round).`
  },
  "Charm Person" : {
    "type" : "PA",
    "cost" : 2,
    "range" : ["ft",10,30,100],
    "text": `This power – often a hypnotic gaze – makes the subject into the hero’s new
      best friend. You must make a Power Roll to affect the target. 
      A charmed subject, perceives the hero’s words
      and actions in the most credulous or favorable way. This doesn’t affect their
      essential nature. A charmed mob boss will still be a scheming evil individual;
      he’ll just assign bodyguards to protect the PC and send hit men to rub out his
      enemies, and invite him to drug parties on his yacht. If the hero arrests him,
      perhaps he’ll convince himself that it was to save him from a double cross, or
      that it was all the fault of the other PCs, and if they’re removed, his new best
      friend will see the light. Love is likely if the hero is of the charmed person’s
      preferred gender and/or species. No linguistic is ability is provided, however.
      Charm lasts indefinitely but you must make a Power Roll every day
      to maintain the charm.`
  },
  "Control Fire" : {
    "type" : "AA",
    "cost" : 1,
    "dmg" : ["4d4","6d4","8d4"],
    "range" : ["ft",50,150,500],
    "area" : [["circle","ft",20,60,200],["area","ft",20,20,60,60,200,200]],
    "text": `The hero can concentrate for one round and expend two energy points to
      create a wall, cage, or ring of flame. It may not be created over a person or other
      object, but if anyone enters or passes through the flames they take the listed fire
      damage. The hero can also use this as a C1 power to extinguish a normal fire
      of up to the same size, or make flames dance about or spread.`
  },
  "Copy Appearance" : {
    "type" : "TA",
    "cost" : 1,
    "text": `This power lets the user copy a target’s shape as per Shapeshifting. The user
      must successfully hit or touch them first. You must make a successful Power Roll. The new appearance is
      retianed until the power is used again, or the user is knocked out or killed.`
  },
  "Danger Sense" : {
    "type" : "P",
    "feature" : true,
    "text": `The hero has a sixth sense that warns of danger. They are never surprised
      and gain an advantage to avoid hidden traps, spot hidden
      foes, or the like. The hero adds +1 to AC in combat due to a greater ability to
      sense attacks and evade them.`
  },
  "Darkness" : {
    "type" : "S",
    "cost" : 1,
    "range" : ["ft",10,30,100],
    "area" : [["circle","ft",30,90,300]],
    "text": `The hero can project a field of darkness, smoke, or pea-soup fog that covers
      the circular area up to the listed range. Effectively, everyone inside darkness
      is invisible as long as they remain there (-4 to be attacked or to attack
      others). Darkness is penetrated by radar, infrared, sonar, and true sight.
      Alternatively, the hero can radiate darkness as they move.`
  },
  "Dazzle" : {
    "type" : "AA",
    "cost" : 1,
    "range" : ["ft",30,90,300],
    "area" : [["circle","ft",10,30,100]],
    "duration" : ["1d6 turns","1d6 hours","1d6 days"],
    "text": `The hero can project a flash of light that bursts to blind all
      sighted beings facing within the affected area. You must make a Power Roll for every foe in the area, and 
      if successful, blindness lasts for the listed duration. Blinded characters fight as if everything around
      them was invisible. Alternatively, the character can create more gentle
      illumination, illuminating a 100 ft. radius at 500 ft range at no energy cost.`
  },
  "Detect Supernatural" : {
    "type" : "C",
    "cost" : 1,
    "feature" : true,
    "text": `The hero can detect the approximate location of the nearest supernatural entities or gadgets within
      100 ft. and tell their rough level (+/-2) their powers, and whether they have
      double, or tripled powers. The hero can exclude already-known supernaturals,
      that is, detect one new supernatural entity each time it is used.`
  },
  "Dimensional Barrier" : {
    "type" : "S",
    "cost" : 1,
    "range" : ["ft",100,300,1000],
    "area" : [["circle","ft",50,150,500]],
    "text": `The hero can establish a barrier zone equal to the area of the power 
      that blocks equal or lower power teleportation, portal,
      intangibility, and astral travel from entering or leaving it. Higher rank powers
      entering pay 1 energy point to break the barrier or 2 to destroy it.`
  },
  "Disease" : {
    "type" : "TA",
    "cost" : 2,
    "dmg" : ["2d4","3d4","4d4"],
    "text": `After hitting the target with a touch attack, the hero can inflict a fast-acting
      lethal disease. You must make a Power Roll, if successful 
      the victim takes the listed damage immediately and feels ill (-2 on all attacks and all
      skill throws). They must save again hourly, continuing to take damage
      until they finally succeed or die. If resting in bed the victim adds
      +2 to save against the disease, or +4 with medical care. The disease may be
      contagious if sharing fluids or sneezed on by a victim; you may make another Power 
      Roll, but with a disadvantage, to affect them.`
  },
  "Doesn’t Eat or Drink" : {
    "type" : "P",
    "feature" : true,
    "text": `The hero has no need for normal sustenance (or requires very little of it).`
  },
  "Doesn’t Sleep" : {
    "type" : "P",
    "feature" : true,
    "text": `The hero has the power to go without sleep. They are also immune to Dream Control and Sleep attacks.`
  },
  "Dream Control" : {
    "type" : "P",
    "range" : ["ft",100,300,1000],
    "text": `The hero can influence the dreams of a sleeping person. The
      hero can use the ability to perform Mind Control, Illusion, or Mind Scan,
      or Telepathy at the same power level, except the effect appears within
      the subject’s dreams. You must make the appropriate Power Roll, and any ongoing
      duration effects end if the subject awakens. The hero also controls his or her
      own dreams and may use this ability while he or she “sleeps."`
  },
  "Disintegration" : {
    "type" : "RA",
    "cost" : 3,
    "range" : ["ft",50,150,500],
    "dmg" : ["2d12","3d12","4d12"],
    "text": `This is a ranged all-or-nothing attack. 
      It does the listed damage, ignoring DR unless provided by a force
      field. If the damage was high enough to reduce the target to -10 hit points it
      is disintegrated. If not they are completely unharmed!`
  },
  "Duplication" : {
    "type" : "S",
    "cost" : 3,
    "text": `This calls up an exact duplicate of the hero (at the present state
      of HP, EP, etc. after using the power’s EP). It is complete with gadgets
      and equipment, except the duplicate lacks the Duplication power and will
      cooperate as an ally. The power can be used several times in succession
      to keep making duplicates as long as the original pays the EP, but can only
      create one new one per round. If the original is killed, knocked out or ceases
      to pay energy points all duplicates vanish as well. The original can voluntarily
      cease paying EP for some of the duplicates; if so they vanish.`
  },
  "Earth Control" : {
    "type" : "C",
    "cost" : 1,
    "range" : ["ft",50,150,500],
    "area" : [["cube","ft",10,30,100]],
    "dmg" : ["4d6","6d6","8d6"],
    "text": `Each round the hero can move, dig, or shape a volume of
      earth, sand, brick, stone, or pavement. By opening
      pits or burying/engulfing victims or creating a localized earthquake this may
      do an area attack (AA2) with the listed damage against someone on the ground
      or in the basement or ground floor of a building; this also affects the same
      volume. Buildings and other fixed structures take double damage from this
      effect.`
  },
  "Electrical Control" : {
    "type" : "C",
    "cost" : 1,
    "range" : ["ft",20,60,200],
    "text": `<p>The hero can sense and control any electrical systems or electronic devices
      within range, as if he or she had access to their normal control
      systems. Devices that are gadgets require a Power Roll. A Power Roll is 
      also required if two electrical controllers are battling for
      control of a gadget or system. A failure causes the device to burn out.
      </p><p>The hero can also use this power as if he or she had Mind Control, Mind
      Scan, and Telepathy against individuals with a Computer Mind (treating them
      as the same power level as the Electrical Control power). If the hero himself
      has a Computer Mind and has this power they may use the Mind Shield power
      to protect themselves against Electrical Control.</p>`
  },
  "Electromagnetic Pulse" : {
    "type" : "AA",
    "cost" : 1,
    "range" : ["ft",100,300,1000],
    "area" : [["cone","ft",50,150,500],["circle","ft",20,60,200]],
    "duration" : ["1d6 turns","1d6 hours","1d6 days"],
    "text": `This intense electromagnetic pulse is an area attack. Make a Power Roll for any
      normal electronic devices, and any foes with Robot Body, if successful they are paralyzed. 
      Vehicles with electronic ignitions are also paralyzed. Paralysis lasts for the listed duration.`
  },
  "Electrical Shock" : {
    "type" : "TA",
    "cost" : 1,
    "duration" : ["1d4 turns","1d4 hours","1d4 days"],
    "text": `A powerful electric shock that can stun or paralyze a target. Make a Power Roll, if
    successful the target is paralyzed for the listed duration. It also works on robot bodies or
    gadgets.`
  },
  "Emotion Projection" : {
    "type" : "PA",
    "cost" : 1,
    "duration" : ["1d6 turns","1d6 hours","1d6 days"],
    "text": `The hero can make one subject feel a particular primal emotion like fear,
      love, or hate as if it were his or her own. Make a Power Roll, if successful the subject 
      experiences the emotion for the listed duration.`
  },
  "Extra Arm or Prehensile Tail" : {
    "type" : "P",
    "feature" : true,
    "text": `The hero has an extra set of arms; although not granting extra attacks, these give
      a +1 bonus to hit in melee combat and allow wielding combinations such as
      2-handed weapon and shield. This feature can be taken multiple times for
      each extra set of arms. An extra arm could also be a prehensile tail (or tongue).`
  },
  "Extra Legs" : {
    "type" : "P",
    "text": `The hero has multiple legs - perhaps like a centaur - and can run at double speed.`
  },
  "Flight" : {
    "type" : "P",
    "speed" : [240,720,2400],
    "text": `The hero can fly, perhaps by gravity control, a fiery trail of energy, wings,
      riding the wind, or some other means. If
      capable of breathing at high altitudes (30,000 ft. or more) where the air is thin
      he or she may fly at up to 2x their speed.`
  },
  "Force Feild" : {
    "type" : "S",
    "cost" : 1,
    "AC" : ["+4","+5","+6"],
    "DR" : [8,12,16],
    "text": `The user can “raise shields” and gain the listed DR and bonus to AC for the duration of the ability
      from a protective force field. The user also gets
      Life Support (as per the power) but only while the field is up. The field also
      protects the hero’s carried gadgets and equipment.`
  },
  "Form Wall" : {
    "type" : "S",
    "cost" : 1,
    "DR" : [20,30,40],
    "area" : [["wall",10,20]],
    "range" : ["ft",50,150,500],
    "text": `The hero can cause an unyielding a wall to appear at an unoccupied point within range, 
      or alternatively as a dome or sphere that surrounds and moves with
      the character. It may be made of anything appropriate to the hero’s other
      powers: conjured ectoplasm, stone, solid sound, force fields, metal, etc. The
      wall will disintegrate immediately if any damage breaches its DR; until then it
      is solid. It can also be used horizontally as a causeway or bridge. The hero
      can only maintain one wall a time.`
  },
  "Force Projection" : {
    "type" : "S",
    "cost" : 1,
    "text": `The user can create a simple, solid object by forming it
      out of “solid energy” or “liquid metal”. They may produce any single, simple physical
      tool (without moving parts) or melee weapon like a hammer, sword, shovel, shield, bowl, sled, chair,
      or the like. In a fight the user can effectively create one weapon that works
      like a one or two handed melee weapon, but adds (+2|+4|+6) to hit and damage rolls,
      or one shield that works like a shield but improves Armor Class (+2|+3|+4).`
  },
  "Faster-Than-Light" : {
    "type" : "S",
    "cost" : 1,
    "speed" : ["1 ly per turn","3 ly per turn","10 ly per turn"],
    "text": `If the hero is already in space, or can fly there, he or she can accelerate to
      faster than light (FTL) speeds, traveling through hyperspace, wormholes,
      warp space. Assume the hero can activate the power and then travel the listed speed. Shorter “jumps”
      like across the solar system take one turn (due to the minimum time needed
      to navigate).`
  },
  "Gaseous Form" : {
    "type" : "C",
    "cost" : 1,
    "speed" : [30,90,300],
    "text": `The hero can transform his or body into a cloud of mist. While in this shape
      the hero can drift through narrow cracks that isn’t air tight, fly and is immune 
      to most physical damage-causing attacks but cannot
      attack. Lightning, wind, and fire attacks inflict half damage; disintegration
      does full damage.`
  },
  "Gas Protection" : {
    "type" : "P",
    "feature" : true,
    "text": `Gain an advantage to save vs. poison gas and similar attacks.`
  },
  "Glamour" : {
    "type" : "S",
    "cost" : 1,
    "range" : ["ft",50,150,500],
    "area" : [["circle","ft",10,30,100]],
    "text": `The hero can create a sustained illusionary disguise that
      looks and feels real around a specific object or being to hide its real nature,
      or around a static location of up the power's area. The illusion must be a similar
      size and shape to what it covers, and moves along with it. It won’t inflict
      damage (e.g. illusionary fire feels hot but doesn’t burn). It’s often used to
      disguise his or her true form. Glamour can’t fool Heightened Smell, Analytic
      Taste, or True Sight powers.`
  },
  "Good Luck" : {
    "type" : "PA",
    "cost" : 1,
    "range" : ["ft",50,150,500],
    "duration" : ["1d6 turns","1d6 hours","1d6 days"],
    "bonus" : ["+2 to hit and advantage on saves","+4 to hit and 2X advantage on saves","+6 to hit and 3X advantage on saves"],
    "text": `The hero will bless someone with good luck. The target will gain the listed bonus to all attacks and saving throws.`
  },
  "Growth" : {
    "type" : "S",
    "cost" : 2,
    "size" : ["large, 12 ft","huge, 24ft","gigantic, 48 ft"],
    "text": `The hero can grow to large size while the power is sustained. The hero’s
      reach increases proportionately to height. However, the hero will be unable
      to fit through normal doors, car seats, clothing, and so on while enlarged.
      At superior or ultimate levels growth is even greater.` 
  },
  "Haste" : {
    "type" : "SR",
    "cost" : 2,
    "text": `The hero’s reaction time and speed accelerate so that he or she gets 1
      additional action each round (after everyone else has acted). This also
      hastens non-combat tasks and allows movement twice per round (doubling
      speed). Rather than get additional actions, at Superior level the EP cost drops
      to SR 1; at Ultimate level it becomes S1 power (1 EP per turn to sustain).` 
  },
  "Heightened Smell" : {
    "type" : "P",
    "feature" : true,
    "text": `This power grants smell equivalent to a predator. The user can follow a trail
      like a bloodhound, or recognize a disguised person or shapeshifter by their
      scent at up to 50 ft. away. You gain an advantage to rolls where scent or
      tracking is important.` 
  },
  "Heightened Hearing" : {
    "type" : "P",
    "feature" : true,
    "text": `The hero has incredibly acute hearing. Triple the chance of hearing noises
      through a door or eavesdropping. The hero can emulate a lie detector by
      listening to heartbeats or hear a whisper at up to 50 ft. away. The hero
      takes only half the usual penalties for close combat in darkness, fog, or other
      conditions that obscure vision. You gain an advantage to rolls where hearing is
      important.` 
  },
  "Healing" : {
    "type" : "TA",
    "cost" : 1,
    "dmg" : ["2d6","3d6","4d6"],
    "text": `The hero can heal with a touch. Healing can also be used to cure most diseases or poisons, or fix
      something like a broken bone or a cold. In the case of very severe diseases
      it may require a Superior healing or for severed limbs, crippling, or fatal
      diseases, an Ultimate healing, to have any effect. The hero cannot heal the
      dead. Healing can cancel the same power level of Disease or Poison.`
  },
  "Hypnotic Voice" : {
    "type" : "C",
    "cost" : 2,
    "range" : ["ft",10,30,100],
    "text": `The hero’s singing or speech can charm all listeners within range.
      Make a Power Roll, if successful, those who hear fall into love or friendship 
      (as per Charm Person) but this is only as long as the hero speaks  
      or sings and they were willing to listen for at least one round!
      If you fail the roll that individual is immune for the rest of the day, however. Deaf
      individuals or those within silence are immune.`
  },
  "Ice Storm" : {
    "type" : "AA",
    "cost" : 1,
    "dmg" : ["2d8","3d8","4d8"],
    "range" : ["ft",100,300,1000],
    "area" : [["hailstorm circle","ft",20,60,200],["snowstorm circle","ft",50,150,500]],
    "text": `The user may evoke either a hailstorm or a snowstorm within the power's range.
      A hailstorm will cause damage every round to any creature within its area. 
      A snowstorm blinds all creatures in its area and makes the
      footing so slippery that ground and air movement is cut by 50%. You may make a 
      Power Roll for anyone attempting to move while in the storm, if successful they slip and fall
      prone, also losing their action for that round.`
  },
  "Illusion" : {
    "type" : "PA",
    "cost" : 1,
    "range" : ["ft",50,150,500],
    "text": `<p>The hero can create and sustain a hallucination in the mind of one person at
      a time that appears real to all senses as long as concentration is sustained.
      You must make a successful Power Roll. If desired
      it can leave the victim’s senses completely overloaded (e.g., falling endlessly
      through illusionary space, etc.) but subtle illusions that overlay enemies
      bodies on friends, or cover up a pit can be more effective. No damage is
      inflicted but the victim’s perceptions can be altered in any way. 
      </p><p>Victims who
      have reason to disbelieve an illusion and do so you must make a Power Roll each round; if an
      illusion is plausible no Power Roll is required past the first until something
      happens to break suspension of disbelief. The illusionist can alter the illusion
      each round as he or she concentrates. If the illusionist wishes they can
      creates a horrific illusion of the victim’s most feared horror slowly killing them.
      This requires a Power Roll each round, if successful the victim fails they can do nothing
      at all that round but struggle vs. the illusion. If you succeed three times in a row the 
      victim is take out due to trauma. If a character is knocked
      out or moved out of range before this happens (e.g., by a friend) the effect
      ends.`
  },
  "Intangibility" : {
    "type" : "C",
    "cost" : 1,
    "text": `The hero can become non-corporeal, going “out of phase” with the world.
      While intangible the hero’s body can only physically affect other intangible
      things, and passes through solid objects like a ghost. Mental powers can
      still be used, as can powers that have an indirect effect, like Electrical
      Control. The hero’s clothes and personal gear also become intangible.
      While intangible the hero effectively has Life Support and some sort of
      dimensional friction effect allowing them to still “walk” on solid surfaces; he
      or she can also “walk on air” at 1/4 speed. The hero snaps out of intangibility
      if they attack.`
  },
  "Heightened Immortality" : {
    "type" : "P",
    "feature" : true,
    "text": `The hero does not age (past maturity, anyway), or ages extremely slowly. He
      or she won’t catch any “normal” diseases. If in a gadget, he or she won’t age while
      bearing the gadget, but age catches up if it’s lost at 1 year per round.` 
  },
  "Jamming" : {
    "type" : "S",
    "cost" : 1,
    "area" : [["circile","mi",10,30,100]],
    "text": `The hero is effectively invisible against radar and infrared vision but not
      normal vision.
      The hero can radiate electronic countermeasures that jams all radio, wifi,
      cell phone, TV, and radar devices or powers up to the listed area, or
      alternatively opt to selectively jam only those of enemies within a 1-mile
      radius. A guided missile is -4 to hit the hero.`
  },
  "Invisibility" : {
    "type" : "C",
    "cost" : 1,
    "text": `The hero can turn invisible. This also usually affects any gear or clothing
      they had on, but gear becomes visible if let go of. If the power is Superior
      Invisibility the character can opt to form a field that also makes everyone
      within a 5-foot radius invisible; this changes it to C2. Note that since this is
      a concentration power the hero will be limited to 1/4 speed and no sudden
      movements; they will have to stop concentrating to launch any attack,
      becoming visible.`
  },
  "Life Drain" : {
    "type" : "TA",
    "cost" : 1,
    "dmg" : ["2d4","3d4","4d4"],
    "text": `Immediately after hitting the target with a melee attack, the hero can opt
      to activate this power and drain hit points from the victim (treated as
      damage but DR doesn’t protect). For every hit point drained away the hero
      can add 1 to his or her own hit points or energy points (as desired). If either
      increase results in totals that exceed the hero’s normal base values any
      excess not used will wear off 10 turns after having been drained.`,
    "reduced" : `You may use this power to do half the listed damage.`
  },
  "Life Support" : {
    "type" : "P",
    "text": `The possessor of this power requires no food, water, or oxygen to sustain
      his or herself, and has great resistance to temperature extremes of hot and
      cold. This is sufficient to survive in a hostile environment, but does not give
      extra resistance attack focused attacks. This grants immunity to attacks such
      as gasses that must be inhaled or attack the skin. It also includes DR 2 cold resistance.`
  },
  "Light Armor" : {
    "type" : "P",
    "feature" : true,
    "text": `This gives the user AC 15 (or +1 to a better AC) and DR 2 damage reduction.` 
  },
  "Liquid Form" : {
    "type" : "SR",
    "cost" : 1,
    "text": `The hero can transform his or body into a cohesive liquid shape. While in
      this shape they can ooze through narrow gaps or pipes that aren’t water
      tight and swim at full running speed. While fully immersed in water they
      also gain Regeneration as per the power (at the same rank). When not immersed in water 
      all strength/agility based rolls are made with a disadvantage and their movement is halved.
      Physical damage won’t affect a liquid form other than disintegration, fire (1/2
      damage) and ice/cold (full damage).`
  },
  "Magnetic Control" : {
    "type" : "SR",
    "cost" : 1,
    "text": `This works just like Telekinesis with two exceptions: it only affects ferrous
      metal, or mostly ferrous metal, objects, but has 2 x the Strength and range
      of telekinesis.`
  },
  "Micro-Vision" : {
    "type" : "P",
    "feature" : true,
    "text": `The hero can focus on microscopic things as long as they are close (within
      1 ft.). This allows seeing things as small as bacteria (or if doubled, as small as
      atoms) or target tiny Shrinking characters without penalty. If the hero also
      has Healing they heal an extra +1 point per die.` 
  },
  "Mind Control" : {
    "type" : "PA",
    "cost" : 2,
    "range" : ["ft",50,150,500],
    "text": `The hero can take over the mind of an intelligent being, who obeys to the
      best of their ability. Make a Power Roll, if successful the victim falls under the 
      hero’s mental domination and 
      is controlled for as long as the power is sustained. The user must spend 1 EP
      each round to do this but need not fully concentrate (and so can try to take
      over other victims or make other attacks). Mind Control can also be used to
      break an existing mind control; the power is focused on the target but the
      controller makes the save. Self-destructive commands require an additional Ppwer Roll.` 
  },
  "Mind Scan" : {
    "type" : "C",
    "cost" : 1,
    "range" : ["ft",50,150,500],
    "text": `This power allows the hero to read the thoughts of a person within range.
      Surface thoughts (what is currently being thought) are skimmed
      unobtrusively. A deep probe to force the subject to answer a particular
      question takes a full round and requires a Power Roll; it also makes the
      subject aware someone is in his or her mind. The hero can sustain the interrogation at a cost of 1 EP per
      round, forcing a victim to keep answering each round; further Power Rolls are 
      required only if answering would betray the target’s deepest convictions.` 
  },
  "Mind Shield" : {
    "type" : "P",
    "text": `The hero is highly resistant to mental or spirit attacks. Gain an 
      advantage against all psychic attack powers or gadgets with psychic attack
      powers such as dream control, emotion control, illusions, mind blast, mind
      control, mind scan, and sleep. Unwanted telepathy is blocked. It gives DR 4
      vs. psychic weapons and mind blast.` 
  },
  "Neutralize Power" : {
    "type" : "RA",
    "cost" : 1,
    "duration" : ["1d6 turns","1d6 hours","forever"],
    "text": `This power has no effect on a normal human, or a robot or cyborg, but strips
      supernatural powers and all associated changes. You must make a Power Roll, if successful
      the target loses all powers for the listed duration,
      with the exception of natural powers such as claws or extra arms. (Use the
      powers listed under Exotic Features Theme as a guide.)` 
  },
  "Omni-Lingual" : {
    "type" : "P",
    "feature" : true,
    "text": `The hero may use this power to learn a specific new language (written or
      spoken) or computer language as it’s encountered. The
      user can crack encryption the same way.` 
  },
  "Plant Animation" : {
    "type" : "C",
    "cost" : 1,
    "range" : ["ft",50,150,500],
    "area" : [["area",20,20,60,60,200,200]],
    "HD" : [8,12,16],
    "text": `The hero can animate a single large plant like a tree or a patch of smaller
      plants like bushes or grass to move or attack. If animated these may just
      trip anyone running through it (Make a Power Roll, if successful the target is
       tangled up with no action on their round). Animated trees fight as
      monsters with up to the listed HD and AC 8[12], speed 30 and strike for 2d6 damage
      in melee. Trees take x2 damage from fire.` 
  },
  "Poison" : {
    "type" : "P",
    "text": `The hero is poisonous. If he or she has fangs, claws, or a stinger they can
      opt to inject poison if these do any damage (past DR). If not, it requires a
      kiss or other exchange of saliva, blood, etc. to take effect. Make a Power Roll, 
      if successful the the target is paralyzed. After 1 hour, make another Power Roll, 
      if successful the target dies. (Hospital treatment, an antidote, etc.
      adds +4 to the save).` 
  },
  "Poison Gas" : {
    "type" : "AA",
    "cost" : 1,
    "range" : ["ft",30,90,300],
    "area" : [["circle","ft",10,30,100]],
    "dmg" : ["2d4","3d4","4d4"],
    "text": `The hero can create a cloud of poisonous gas. 
      Make a Power Roll each round for every target within the gas. If successful they take the listed damage. 
      Gas does not work underwater and slowly drifts down in air. Each cloud normally
      endures 1 turn (but only 1d4 rounds in a strong wind).` 
  },
  "Polymorph Other" : {
    "type" : "TA",
    "cost" : 2,
    "duration" : ["1d6 turns","1d6 hours","never"],
    "text": `This power can transform a subject into a different living creature, or
      alternatively a static form like stone, a tree, or crystal. The target must have HD less than the hero,
      and you must make a Power Roll to make the transformation. The new form should be one that the hero is
      familiar with and able to survive in the present environment. When transformed the
      user retains their motivation, etc. but is otherwise the creature: see Creating
      Creatures for guidelines. The effect lasts for the listed duration.` 
  },
  "Power Theft" : {
    "type" : "TA",
    "cost" : 2,
    "duration" : ["1d6 turns","1d6 hours","never"],
    "text": `The hero can steal the powers from other supernaturals. 
      These are then transferred to the power thief, leaving the victim in a
      coma for the duration of the effect. You must make a Power Roll to 
      steal the target’s pwoers. Its effects wear off after the specified duration or when the
      hero uses the power successfully on someone else. If using this power
      on someone with more HD the hero, you must make a Explorer Roll, or lose 1d6 hp for every full 3 HD of difference
      between themselves and their victim.` 
  },
  "Portal" : {
    "type" : "C",
    "cost" : 3,
    "range" : ["mi",100,1000,10000],
    "text": `The hero can form a teleport portal and hold it open as long as he or she
      concentrates and pays energy points. Each portal is the hero’s own height
      and appears within 10 ft. It connects to any distant location the hero can
      observe or has visited before, with a range of 100 miles. This increases
      to planetary range (10,000 miles) at Superior rank and unlimited range at
      Ultimate range, possibly also allowing time or dimensional travel at double
      energy cost. Anyone can see or step through it from either end and the hero
      can sustain it from either side. It’s also a semi-permeable airlock: it keeps
      environments on either side separate, so water or gas doesn’t flow through; it
      can’t be opened into utterly malign high-energy locations (e.g., the heart of a
      star) or into solid matter.` 
  },
  "Power Weapon" : {
    "type" : "S",
    "cost" : 1,
    "dmg" : ["2d8","3d8","4d8"],
    "text": `The hero can form a solid melee weapon (assume a sword, hammer, or
      other weapon) or summon it out of thin air, or have some mundane item like
      a walking stick transform into it. If anyone else tries to wield it they
      will fail or the user can just make it vanish and then recall it again. It can be
      wielded every round as a melee attack; use the listed damage but you may add your Soldier value. If that type of weapon
      can be thrown it costs 1 EP to have it return to the wielder’s hand after
      it is thrown.` 
  },
  "Precognition" : {
    "type" : "C",
    "cost" : 3,
    "text": `The user can attempt to see the future in a vision (or commune with a higher
      power). The hero can try to focus on a particular question (one per round),
      and the referee should give them a useful hint as to a likely possible future,
      or more than one. The hint could be a vision, riddle, nightmare, etc. This
      is a chancy power and reqires a Power Roll; failure means
      the vision, while not misleading, is very obscure. Precognition can also work
      spontaneously without the character attempting it if the Referee wants to
      pass on a particular clue or warning.` 
  },
  "Projectile Fire" : {
    "type" : "RA",
    "cost" : 1,
    "reduced" : true,
    "dmg" : ["2d10","3d10","4d10"],
    "range" : ["ft",500,1500,5000],
    "text": `This is the ability to conjure and fire solid missiles – ice shards, chunks of
      earth, spikes, or actual bullets – by expending energy. It might also represent
      a built-in gun or railgun. It can also Burst Fire at x3 energy point cost.`,
    "reduced" : `You may use this power to do half the listed damage. You may not use Burst Fire.`
  },
  "Psychic Weapon" : {
    "type" : "S",
    "cost" : 1,
    "dmg" : ["1d8","1d12","2d8"],
    "bonus" : ["+2","+4","+6"],
    "text": `The hero can conjure into his or her hand a weapon of pure thought or
      spirit that manifests as a specified type of melee weapon or archaic missile
      or thrown weapon. It gets the listed bonus to hit and damage, and completely ignores
      any type of opponent DR (other than Mind Shield). The wielder uses their
      Diplomat score to modify damage (but not to-hit) rolls. A psychic weapon can affect intangible, gaseous, liquid, or astral
      foes normally.` 
  },
  "Radar" : {
    "type" : "P",
    "feature" : true,
    "text": `The hero can use radar to see through darkness, fog, smoke, and detect
      invisible things. Given an unblocked line of sight he or she can detect a mansized
      object (or a stealth aircraft) at a range of up to 10 miles and a big object
      like an airplane or ship at 100 miles. If an object is silhouetted against ground
      or water range is 1/10 normal. Radar won’t work underwater. The hero’s
      radar gives +1 to hit with ranged attacks if taking a round to “lock on” unless
      the target has Jamming.` 
  },
  "Radio" : {
    "type" : "P",
    "feature" : true,
    "text": `The hero can receive and transmit radio and television signals at up to
      100 mi, but must specify which channel or frequency is being used/
      listened to. If of high intelligence he or she can use or monitor multiple
      channels at once (up to Intelligence bonus). The hero can detect and
      pinpoint transmitting radios or radars within twice their own range.` 
  },
  "Regeneration" : {
    "type" : "P",
    "HP" : [1,2,4], 
    "text": `The hero regenerates the listed number of HP per round unless dead. Whole body
      parts may also be regenerated and are assumed to do so once all lost HP are
      recovered.` 
  },
  "Resist" : {
    "type" : "P",
    "options" : ["Acid", "Cold", "Electricity", "Fire", "Sonic"],
    "feature" : true,
    "text": `These are five different features: specify the type, e.g., Resist Sonic. The
      hero gains  DR 4 vs. that class of damage only and an advantage on all saves vs. that class of effect e.g., sonic vs. hypnotic voice
      and electricity vs. electrical control.` 
  },
  "Resist Poison" : {
    "type" : "P",
    "text": `You have 2X advantage on all saves against poison.` 
  },
  "Retrocognition" : {
    "type" : "C",
    "cost" : 1,
    "text": `The character is sensitive to the “vibes” of an area. By touching an object or
      area of ground (up to a 10 ft. radius) that is strongly associated with traumatic
      or emotional events (such as a murder), or with a particular owner, he or
      she receives a brief vision or sensation of what happened there or who was
      the past owner. Previous events, traumas, or owners will overlay older ones;
      the hero can see the most recent unless the power is superior (three most
      recent) or ultimate (ten most recent). On occasion, retrocognition occurs
      spontaneously if the vibes were intense enough and the Referee wants to
      impart a clue.` 
  },
  "Sensory Protection" : {
    "type" : "P",
    "feature" : true,
    "text": `You have an advantage on all saves to resist dazzle, deafening, and similar effects that
      blind the hero's senses.` 
  },
  "Shapeshifter" : {
    "type" : "S",
    "cost" : 1,
    "text": `The hero can shift their own physical appearance, sprout new body parts,
      or imitate others. By concentrating for one round the shapeshifter can alter
      facial and body features to appear as someone of the same or a similar
      species (e.g., a human might look like an elf) and roughly similar mass. They
      may change sex, age, features, hair, retina print etc. If the shapeshifter has
      observed someone they can imitate their features. A person who knows the
      original well may notice the disguise from tiny errors in the imitation - a Roll is required. 
      The hero can also use this power to add up to 2 of the following 
      features as long as it is sustained: Chameleon, Claws/Fangs,
      Extra Arms, Extra Legs, Light Armor, Prehensile
      Tail, Tiny, Wall Crawling. It takes one round to change features.` 
  },
  "Shrinking" : {
    "type" : "S",
    "cost" : 2,
    "size" : ["tiny","insect","microscopic"],
    "text": `The hero can shrink down to the listed size with a
      proportionate reduction in mass but no loss of HP. At tiny size they are so small that if
      he or she remains motionless there is only a 10% chance of being spotted by
      creatures nearby. A tiny character moves on the
      ground or water (but not flying) at 1/10 speed and has only 1/10 their Strength
      but due to size is -4 to be hit (like Invisibility) by ranged attacks
      or by normal-sized melee weapons, but not by unarmed attacks (anyone can
      try to stomp them!). At smaller sizes the hero needs to find alternate means of transportation. 
      The character can use the power again to go back to
      normal size, but otherwise remains shrunk until they do so.` 
  },
  "Size" : {
    "type" : "P",
    "text": `This can be taken for permanently oversized characters; also use these
      statistics for growth. The hero is permanently larger than a human. Taking
      the power once means the character has a large size of 2x normal height,
      about 8x weight and x2 to strength. Taking the power at Superior rank means
      a Huge size of about 4x height, about 100x weight, and x3 strength. At
      Ultimate rank they are Giant sized with 8x height, 1,000x weight and x4 to
      strength. A big hero’s reach increases in proportionate to height and living
      expenses (food etc.) in proportion to weight. Big heroes will have trouble
      fitting inside vehicles or structures and will have few places to hide!` 
  },
  "Sonar" : {
    "type" : "P",
    "feature" : true,
    "text": `The hero can use echolocation, “seeing” by bouncing sound waves off
      objects like a whale or bat. In the air it has 50 ft. range. Underwater it has
      a 500 ft. range. It won’t work in vacuum or silenced areas or detect the
      intangible. Sonar can see invisible objects, and through smoke, fog, and
      darkness.` 
  },
  "Sleep" : {
    "type" : "PA",
    "cost" : 2,
    "range" : ["ft",50,150,500],
    "duration" : ["6 turns","6 hours","forever"],
    "text": `The hero can sedate the mind of a single living being within range.  
    It won’t affect anything that does not sleep (robots,
      zombies, etc.). Make a Power Roll, if successful the target will sleep deeply for the listed duration; after that shouts, shaking, etc. will wake them.` 
  },
  "Sound Control" : {
    "type" : "C",
    "cost" : 1,
    "range" : ["ft",100,300,1000],
    "area" : [["area",50,50,150,150,500,500]],
    "text": `The hero can create a zone filled with a single repeated loop of sound (up to
      a minute long, like a song or conversation, or just a particular type of noise) or
      a zone of total silence where nothing can be heard. The conditions in a zone of sound or silence
      are usually distracting to others other than the creator (-2 to hit).` 
  },
  "Steal Memories" : {
    "type" : "TA",
    "cost" : 2,
    "PR" : true,
    "text": `This power lets the user steal or erase some or all the victim’s memories,
      possibly leaving the victim with amnesia. The memory drain lasts until the power is used on someone
      else, or the user goes to sleep or is knocked out.` 
  },
  "Stretching" : {
    "type" : "P",
    "text": `The hero can stretch his or her limbs, neck, and other body parts, or twist
      and contort their torso, to make touch or melee attacks at up to 15 ft. range
      or to do things like extending a neck to peek around corners, squeezing flat
      under doors or even spreading into a net to catch someone. When attacking
      unarmed in melee they get +2 to-hit and are -2 to be hit. Their unarmed
      attacks do 2d6 damage (modified by Strength) as they constrict foes! They
      never takes damage from falls. They can roll up into a ball or stretch legs to
      run at speed 240.` 
  },
  "Summon Servitor" : {
    "type" : "S",
    "cost" : 2,
    "HD" : [6,9,12],
    "text": `The user can temporarily conjure one of a specified class of servant entity: a
      demon, angel, thought-form, elemental, elemental, monster, robot in a pocket
      dimension, or whatever. Create the servitor as one or more creatures up to the listed HD. 
      If the servitor is reduced to zero or fewer hit points they vanish but can
      be conjured again. The hero can use the power multiple times to conjure
      more than one servitor as long as he or she pays energy points for all of them.
      The referee should create a specific general class of servitor (with player’s
      input) in advance.` 
  },
  "Super Strength" : {
    "type" : "P",
    "dmg" : ["4d6","8d6","12d6"],
    "bonus" : ["advantage","2X advantage","3X advantage"],
    "text": `This multiplies your raw strength by 10X, 40X, and 160X respectively. You 
    do the listed damage with your basic punch, and you have the listed bonus when you
    have to roll for feats of strength.` 
  },
  "Super Aquatic" : {
    "type" : "P",
    "text": `This combines both Super Strength and Super Speed but only works if the
      hero occupies a sizable body of water (pond, river, swimming pool, ocean,
      etc.).` 
  },
  "Super Shooter" : {
    "type" : "P",
    "dmg" : ["2d8","3d8","4d8"],
    "text": `The character has built into their body (or built into a gadget) a projectile
      shooting weapon that does the listed damage and has the following statistics: RoF 2, range 200
      ft., Shots 20. The weapon does not require energy points to use, but can be
      fired each round using a normal ranged attack. It may resemble a gun, bow,
      or whatever. Alternatively, they just make any normal weapon they pick up
      “super” by virtue of their talents.` 
  },
  "Super Striker" : {
    "type" : "P",
    "dmg" : ["2d6","3d6","4d6"],
    "bonus" : ["+1 to hit and damage","+3 to hit and damage","+5 to hit and damage"],
    "text": `This is a built in or (if a gadget) innate weapon such as a metal talons, steel
      jaws, a monomolecular dagger, a magic sword, hammer, etc., doing the listed damage
      (modified by Strength BAM). Its construction uses exotic materials
      and perfect design. The weapon works like a standard weapon of its design but has a 
      bonus to hit and damage. In addition, it has the
      property that DR protects against it at half normal value!` 
  },
  "Super Jumping" : {
    "type" : "P",
    "distances" : ["100/50 ft","300/150 ft","1000/500 ft"],
    "speed" : ["2X","6X","20X"],
    "text": `Instead of using normal movement, the hero can long jump/high jump up to the listed distances. They can jump at
      1/2 this range and still attack as part of their turn. If they are Str 13+ the
      hero’s normal movement is increased by the listed speed multiplyer as they
      incorporate bounding leaps into their regular movement.` 
  },
  "Super Speed" : {
    "type" : "S",
    "cost" : 1,
    "text": `The hero’s movement speed can accelerate to 10 times greater (increasing
      to 30 times or 100 times for superior or ultimate speeds!). This applies
      to running and normal swimming speeds, plus if the character has flight,
      swinging, or super swimming, or FTL, these also increase!` 
  },
  "Super Swimming" : {
    "type" : "P",
    "speed" : ["360 ft","1000 ft","10000 ft"],
    "bonus" : ["+2 to hit in melee and +2 to AC","+4 to hit in melee and +3 to AC","+6 to hit in melee and +4 to AC"],
    "text": `The hero can swim faster than the swiftest fish and safely dive into the
      abyssal depths. He or she can move swiftly in or under water at up to the listed speed. 
      The hero adds the listed bonuses while in or underwater
      (at least the size of a big swimming pool). The hero can breathe normally in
      water.` 
  },
  "Super Vision" : {
    "type" : "P",
    "feature" : true,
    "text": `This power grants the user infrared vision (range 1,000 ft.), which can see in
      the dark and also detect invisible things (unless the target also has jamming).` 
  },
  "Swinging" : {
    "type" : "P",
    "feature" : true,
    "text": `Given a free hand and access to a grappling hook, web shooter, or just a
      handy series of clothes lines, power lines, and overhead vines to bounce off
      the character can swing from tree to tree in a forest or rooftop to rooftop in a
      city. Altitude is limited to that of the tallest building or tree being swung from.
      In an area of closely spaced trees and buildings hero’s swinging speed is 1.5
      x ground speed (normally 180 ft). A character can also use the swing line as a
      grapnel with a 50 ft. range.` 
  },
  "Telekinesis" : {
    "type" : "C",
    "cost" : 1,
    "range" : ["ft",30,50,70],
    "dmg" : ["3d6","5d6","7d6"],
    "weight" : ["3000/300 lbs.","30000/3000 lbs.","200000/25000 lbs."],
    "text": `<p>This is the ability to move objects with one’s mind. Telekinesis normally works
      on any solid object. It’s a very common hero power so is treated here in
      some detail.
      </p><p>Telekinesis can be used on a single being or object at time within range.
      It requires concentration and can do one of the following to a target being
      affected within the specified range (see below). A telekinetic can also choose
      to levitate their own body.</p>
      <ul>
        <li>Levitate: Slowly move the object or being at 30 ft./round. This does no
        damage unless the being is levitated up and the telekinetic later lets go, in
        which case they fall if unable to fly. If there is something to hold onto in reach that would be too heavy for the
        telekinetic to levitate, or the target has Flight or Telekinesis, you must make a Power Roll.  
        Someone levitated is free to act except that if off the ground and
        unable to fly won’t be able to move (but can still attack anyone is within
        range or reach).</li>
        <li>Hold: This is equivalent to the Binding power. It affects less weight than Levitate (the second weight listed).</li>
        <li>Throw: Make a Power Roll, if successful you hurl or push the target away at great force; this can also be used
        to disarm someone. Like Hold this affects less weight than levitate. 
        The object or being affected is hurled violently up to the telekinetic’s usual
        range and takes their usual damage inflicted. The telekinetic can also hurl
        the thrown object or being (if the latter failed to save) at another target:
        roll to hit normally as per a ranged thrown attack, with a hit doing the same
        damage to the target.</li>
      </ul>` 
  },
  "Telepathy" : {
    "type" : "S/P/A",
    "cost" : 1,
    "range" : ["miles",10,100,1000],
    "area" : [["radius","ft",100,300,1000]],
    "text": `The character can, as a (P) power, speak mentally to one person in line of
      sight with no more effort than normal speech. As an (S) power the telepath can also create a
      mind link with someone they know who is within range, allowing twoway
      mental communication with them as long as the ability is sustained. The
      telepath can, as an A1 power, “shout” sending a single everyone within the power's area. Telepathy works without regard for language.` 
  },
  "Teleport" : {
    "type" : "A",
    "cost" : 2,
    "range" : ["miles",10,100,1000],
    "text": `A hero with this power can vanish and reappear at a distant location up to
      the listed range. The location must be in line of sight or a memorized, or seen
      through a power like clairvoyance or telepathy. The hero may memorize
      a number of locations up to their Intelligence as waypoints and can
      always teleport to these places without error even if not in sight. Changing
      a memorized waypoint can be done with an hour or so of concentration.
      A telepath can give a character coordinates. If the target location is out of
      visual range, the hero must be familiar with the location or risk the possibility
      of teleporting into solid rock, high above the earth, etc. (5% chance) for 10d6
      damage! If he spends twice as many EP the hero may bring one additional
      human-sized creature along with him.`, 
    "reduced" : `You may use this power to teleport to anywhere that you can see within 100 feet.`
  },
  "Time Travel" : {
    "type" : "A",
    "cost" : 5,
    "PR": true,
    "text": `Concentrate and spend 5 EP to travel back or forward any distance in time
      (at the same location) by any length. At the superior level the traveller can
      bring one friend at double cost. At the ultimate power level the hero can
      bring everyone in a 5 ft. radius around the traveler or use this as a TA5
      power on a foe (with a successful Power Roll). Time travel is tricky – you must 
      make a Power Roll or end up in the wrong time (Referee’s option). It’s up to
      the referee if time travel creates paradoxes and disrupts the universe, if the
      universe acts to avoid this (try to kill your grandfather and the gun jams, etc.)
      or paradoxes create new parallel timelines.` 
  },
  "Transmutation" : {
    "type" : "TA",
    "cost" : 2,
    "weight" : ["10 lbs.","100 lbs.","1000 lbs."],
    "text": `Turn up to the listed weight of non-living matter into anything else of the same mass,
      provided the hero is familiar with what he or she is creating. If the matter has
      similar elemental composition it is permanent; otherwise (e.g., lead into gold)
      it lasts only while Sustained. If the hero has sufficient knowledge they can also fabricate and reshape
      items. This power can also act as Polymorph Other vs robotic targets.` 
  },
  "Tiny" : {
    "type" : "P",
    "feature" : true,
    "text": `This is permanent version of the effect from Shrinking.` 
  },
  "True Sight" : {
    "type" : "P",
    "range" : ["ft",60,180,600],
    "area" : [["depth","ft",2,6,20]],
    "text": `The character can see the auras emitted by the spirits or souls of living
      things and also detect magic or magic items within range. He or she can sense
      strong emanations of magic, good or evil, sickness or corruption, etc. This
      also allows detecting invisibility living things and seeing them in the dark. It is
      blocked by matter greater than its depth.` 
  },
  "Wall Crawling" : {
    "type" : "P",
    "text": `The character can move on walls or ceilings at their normal movement rate.` 
  },
  "Water Breathing" : {
    "type" : "P",
    "feature" : true,
    "text": `The character can breathe normally underwater.` 
  },
  "Water Control" : {
    "type" : "AA",
    "cost" : 1,
    "dmg" : ["2d4","3d4","4d4"],
    "PR": true,
    "area" : [["cone","ft",30,90,300]],
    "text": `<p>The hero can spray a high velocity geyser of water. Make a Power Roll for 
      Everyone in the area, if successful they are knocked
      backward the length of the gyser, stunned - losing their next chance to act (this round or next round
      if they already acted) - and take the listed damage. If knocked off a building or the like they may take falling damage.
      The power is more potent if used on the surface of a body of water: if so
      you have an advantage with the Power Roll, as it can create a miniature tsunami wave. The hero
      can also create more gentle sprays.
      </p><p>The hero can also concentrate to move water as per Telekinesis (35 cubic
      feet of water weighs a ton) or to use water currents to grab and push, pull, or
      suck down anyone who within a body of water.</p>` 
  },
  "Weather Control" : {
    "type" : "S",
    "cost" : 1,
    "area" : [["circle","mi",10,100,1000]],
    "text": `<p>The character may call forth or alter weather as appropriate to the climate
      and season, controlling general tendencies such as direction and intensity
      of wind. It can’t specifically
      guide lightning strikes or tornadoes at particular targets: use effects like wind
      control or lightning for this; the smallest area affected is a town-size region.
      When a condition is selected, weather gradually changes 10 minutes later at a
      cost of 1 energy point per turn. Contradictory conditions are not possible.
      </p><p>Control weather can do away with weather as well as create them. Weather
      Control at Superior power can change weather more rapidly: every round (at
      double energy point cost). Weather Control at Ultimate power can change
      weather each round at 1 EP/round.</p>
      <p>Weather by Season
      <ul>
        <li>Spring: Tornado, thunderstorm, sleet storm, or hot weather</li>
        <li>Summer: Torrential rain, heat wave, or hailstorm</li>
        <li>Autumn: Hot or cold weather, fog, or sleet</li>
        <li>Winter: Frigid cold, snows, or thaw</li>
        <li>Late winter: Hurricane-force winds or early spring (coastal area)</li>
      </ul>
      </p>
      <p>If the correct weather conditions prevail then any attack power using that
      weather costs 1 energy point less or does +1 per die damage.</p>
      ` 
  },
  "Binding" : {
    "type" : "RA",
    "cost" : 1,
    "range" : ["ft",50,150,500],
    "duration" : ["10 rounds","10 turns","10 hours"],
    "text": `The hero can project entangling webs, chains, mystic tentacles, vines,
      force-bands, or the like to bind a target. Make a Power Roll, if successful no damage is done
      but the target is entangled for the duration.
      You must roll a Power Roll every round to maintain the binding vs a struggling target. 
      Entangled victims can’t move (winged flyers also fall) but can break loose.
      Someone else can give up an attack to break them free.
      The binding has 2 HD if anyone targets it, but any damage to it also
      damages the imprisoned character.` 
  },
  "Wind Control" : {
    "type" : "AA",
    "cost" : 1,
    "dmg" : ["2d6","3d6","4d6"],
    "PR" : true,
    "area" : [["cone","ft",50,150,500]],
    "text": `The hero can create powerful directional gusts of wind: this could be
      weather control or even super breath! Make a Power Roll for everything not nailed down 
      in the power's area, if successful the target is knocked
      backward the length of the cone and stunned, taking the listed damage and losing
      their chance to act this round (or next round if they already acted). You have an advantage on the roll to affect Flyers 
      but the only take half damage. This will also snuff out fires. `, 
    "reduced" : `You may use this power to do half the listed damage, and you have a disadvantage on the Power Roll.`,
    "alternates" : [{
      "type" : "S",
      "cost" : 1,
      "text": `It can be used to create a breeze to propel a sailing vessel, blow
        away debris, etc.`
    },{
      "type" : "C",
      "cost" : 1,
      "area" : [["cylinder","ft",20,50,60,150,200,500]],
      "text": `Through continuous concentration the hero
        can create a whirlwind initially centered on the hero (with a 5 ft. eye in the center) which costs 2
        energy points to create and 1 per round to maintain. It requires concentration
        to move it at move 60; otherwise it remains in place. Anything in that storm’s
        area is affected as per wind blast, above.`
    }]
  },
  "Veil" : {
    "type" : "S",
    "cost" : 1,
    "range" : ["ft",50,150,500],
    "area" : [["sphere","ft",50,150,500]],
    "text": `The character can hide a particular person or
      object from being detected or noticed by clairvoyance, retro cognition, or
      precognition of equal or lower power. Higher power heroes can sense the veil and break through if
      they opt to spend one extra energy point to do so.` 
  },
  "X-ray Vision" : {
    "type" : "C",
    "cost" : 1,
    "range" : ["ft",50,150,500],
    "area" : [["depth","ft",2,6,20]],
    "text": `The hero can scan the interior of a particular solid object. 
      He or she can see inside it (to the listed depth). A 10 x 10 ft. area can be
      searched each round, and any secret doors, hidden recesses, or traps will be
      evident. Dense material like lead or gold block X-ray Vision as does a force
      field.`,
    "alternate" : [{
      "type" : "RA",
      "cost" : 1,
      "dmg" : ["2d6","3d6","4d6"],
      "text": `X-ray vision can also be used to attack by sending a burst of radiation into the target,
        heating it up.`,
      "reduced" : `You may use this power to do half the listed damage.`
    }] 
  },
}

const POWERTYPES = {
    "P" : ["Permanent",`powers work all the time, like a suit of armor. They cannot be
turned off or dispelled and require no energy points to use. They work even
when asleep or knocked out.`],
    "S" : ["Sustained",`powers can be activated or deactivated when it is a character’s
time to act in a round. Aside from spending energy points, using them doesn’t
require more than a brief moment or so of effort, and can be combined with
attacking or using another power. A character can activate multiple sustained
powers in a round. After spending energy points the power can be kept active
for up to 1 turn (10 minutes); additional energy points can be spent per turn
to sustain it. The user can turn it off earlier; if dispelled before a turn is up it
costs full energy to reactivate. Sustained powers deactivate should their user
fall unconscious, die, or sleep.`],
    "SR" : ["Sustained/Round",`powers are as Sustained but energy must be spent each
round.`],
    "C" : ["Concentration",`powers require continuous concentration to use
(preventing the hero from attacking, unless the power is itself useful as an
attack). Each round used the hero must pay the indicated energy point cost,
which only operates the power for that round! Since total concentration is
required, only one Concentration power can be going simultaneously. Like
an attack, however, the user can still move.
The only thing they can do while using this is a minor action like, perhaps,
opening a door or changing weapons. Sustained powers can be used while
concentrating. Thus, if using a concentration power like Invisibility one could
scout ahead while sneaking along, opening doors or looking at
things, but one couldn’t do anything stressful like attacking or complex work
without ending the power. Concentration powers also end automatically if
knocked out, stunned, or killed.`],
    "A" : ["Action",`powers require one of the hero's actions for the round. 
    They usually produce some brief, instant action like healing or teleportation
that still requires considerable energy. The energy points are paid
immediately.`],
    "RA" : ["Ranged Attack",`powers are a bolt or projectile like a laser, energy bolt,
arrow, or gunshot. They require an attack roll in order to inflict damage. If they
miss, they might damage people or property in the line of fire. All normal action and 
ranged combat rules apply.`],
    "AA" : ["Area Attack",`powers cover a cone or circular blast radius. The user
indicates the direction the cone is emitting from his body, or the center of
the blast radius at any point out to maximum range (as long as nothing is
in the way). It affects friends as well as foes! No attack roll is needed due
to the effect size. However, you must make a Power Roll for 
anyone in the target area who is unrestrained, not surprised, and able to 
move (drop prone, duck for cover, etc.). If the attack does damage, failure means they take
half damage (before applying any DR). If the attack is one that also requires
some other Power Roll, then you have a disadvantage on that roll instead. If
flying or able to use flight, super-speed, super-leap, phase, or blink powers,
a failed roll means they took no damage at all!`],
    "TA" : ["Touch Attack",`powers requires the user to touch the target. This might
be performed casually out of combat, but in a fight it requires making a
successful attack roll. As it is a touch, the user may not inflict any damage
except that produced by the power. The user must announce the touch attack
but does not pay any energy points unless he or she hits.`],
    "PA" : ["Psychic Attack",`powers require the user to simply gaze at or concentrate
on the target and pay the required energy points: this is typical of psychic or
mystic powers and other exotic attacks. You have to use a Power Roll instead
of an Attack Roll to affect the target. Some psychic attacks also require spending energy points
to sustain whatever effect was inflicted on the target (e.g., mind control).`], 
  }

const OSRPOWERHTML = `
<div class="m-1 p-1" align="left">
  <h4 class="m-0">{{name}}</h4>
  <div class="font-weight-bold font-sm">{{type}}<span v-if="p.cost">, {{p.cost}}</span></div>
  <div class="font-weight-bold font-sm" v-if="p.options">Options: <em>{{p.options.join(', ')}}</em></div>
  <div class="font-weight-bold font-sm" v-if="p.range">Range: {{p.range.slice(1).join(' | ')}} {{p.range[0]}}</div>
  <div class="font-weight-bold font-sm" v-if="p.area">
    <div v-for="a in p.area">{{a[0]}} {{a.slice(2).join(' | ')}} {{a[1]}}</div>
  </div>
  <div class="font-weight-bold font-sm" v-if="p.HD">HD: {{p.HD.join(' | ')}}</div>
  <div class="font-weight-bold font-sm" v-if="p.AC">AC: {{p.AC.join(' | ')}}</div>
  <div class="font-weight-bold font-sm" v-if="p.DR">DR: {{p.DR.join(' | ')}}</div>
  <div class="font-weight-bold font-sm" v-if="p.weight">Weight: {{p.weight.join(' | ')}}</div>
  <div class="font-weight-bold font-sm" v-if="p.duration">Duration: {{p.duration.join(' | ')}}</div>
  <div class="font-weight-bold font-sm" v-if="p.dmg">Damage: {{p.dmg.join(' | ')}}</div>
  <div v-html="p.text"></div>
  <div v-if="p.reduced"><span class="font-weight-bold">Reduced:</span> {{p.reduced}}</div>
  <div v-if="p.alternate" v-for="pa in p.alternate" >
    <span class="font-weight-bold">Alternate:</span> <power :p="pa" name=""></power>
  </div>
</div>
`

export {OSRPOWERS,OSRPOWERHTML as template,POWERTYPES}
