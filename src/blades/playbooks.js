const GEAR = [
  [`A Melee Weapon or Two`,`Swords, a mace, an axe or two, or maybe a rapier or a spear. It’s always made from some special metal or maybe it’s a vibro-weapon – modern armor demands that pointy and stabby gear remains on the cutting edge of dangerous tech.`,1],
  [`Throwing Knives`,`A handful of small, light blades. Like with regular weapons, something makes them more dangerous than your standard kitchen knife.`,1],
  [`A Pistol`,`A light, single handed firearm. What kind of energy does it shoot? Dangerous out to speaking distance. Quick to reload.`,1],
  [`A Large Weapon`,`A two handed implement of doom. It may be a greatsword, battle axe or pole-arm. Alternately, for those who like to keep their distance it could be a bow or a rifle.`,2],
  [`An Unusual Weapon`,`It isn’t normally a weapon, but you’ll prove otherwise.`,1],
  [`Ammo`,`Extra ammunition. An extra set of throwing knives, arrows, bullets.`,"1+"],
  [`Armor`,`Common light armor is a misnomer – not really light but it does help stop things intent on your harm. Maybe its padded and reinforced composites or perhaps rune etched padded leather is more your style.`,2],
  [`Heavy Armor`,`More complete protection – from head to toe.`,4],
  [`Burglary Gear`,`An autopicker. A maglock sequencer. A suction-cup glass cutter. A small pry-bar. Vial of lubricant for squeaky hinges. A small pouch of fine sand.`,1],
  [`Climbing Gear`,`Grappling hooks. Magnetic shoe pads. Suction cup gloves. Carbiners and crampons. Secure rigging for assisted climbing maneuvers.`,2],
  [`Documents`,`Access to a collection of varied information including a registry of the important people and recent events of a region. A number of interesting maps. A suite of dictation and word-processing software and a few sheets of blank digital paper.`,1],
  [`Demolition Tools`,`Impact drill and power packs. A welding torch and large fuel tank. Heavy-duty crowbar.Secure rigging for assisted climbing maneuvers.`,2],
  [`Lighting: A string of work lights, kinetically charging flashlight or lantern, or focused spotlight.`,1],
  [`Mechanical Tools`,`A set of heavy tools for working on machinery. Gas-powered jack stands, large screwdrivers and wrenches, heavy clamps, and air compressor. Usable sections of scrap metal, a handheld miniwelder, and small gas tank.`,2],
  [`Subterfuge Supplies`,`A theatrical makeup kit and costume jewelry. A collection of blank license templates, ready for the forger’s hand. A reversible trenchcoat and distinctive hat. A maglock skeleton key. A lightweight earpiece containing a tiny communicator.`,1],
  [`Technical Tools`,`A basic set of tools for detailed mechanical or electrical work. Soldering iron, spools of wire, precision screwdrivers & wrenches, and a small case containing assorted fasteners. Small hammer and pry bar, an assortment of chargers and power packs, a universal data cable.`,1],
  [`Arcane Implements`,`A vial of quicksilver. A pouch of black salt. A spirit anchor in the form of a small stone. A spirit bottle. A vial of electroplasm, designed to break and splatter on impact.`,1],
  [`Hued Cosmic`,`A set of three finger sized shards of gemstone cosmic. Pick the hues as required. You can’t carry more than one set or it produces feedback. [3 uses]`,0]
]

/*
  "Name" : {
    "name" : "",
    "actions" : "Study.1,Consort.2",
    "abilities" : [
      {
        "name" : "",
        "text" : ``,
      }
    ],
    "gear" : [
      {
        "name" : "",
        "text" : ``,        
        "extra" : ``,
        "load" : 1
      },
    ]
  }    
*/

/*
   Veteran: Choose a special ability from another source.
*/

const PCPLAYBOOKS = {
  "Cutter": {
    "name": "Cutter",
    "actions": "Command.1,Skirmish.2",
    "abilities": [{
      "name": "Battleborn",
      "text": `You may expend your special armor to reduce harm from an attack in combat or to push yourself during a fight.`,
    }, {
      "name": "Bodyguard",
      "text": `When you protect a teammate, take +1d to your resistance roll. When you gather info to anticipate possible threats in the current situation, you get +1 effect.`,
    }, {
      "name": "Supernatural Fighter",
      "text": `You may imbue your hands, melee weapons, or tools with spirit energy. You gain potency in combat vs. the supernatural.`,
    }, {
      "name": "Leader",
      "text": `When you Command a cohort in combat, they continue to fight when they would otherwise break (they're not taken out when they suffer level 3 harm). They gain +1 effect and 1 armor.`,
    }, {
      "name": "Mule",
      "text": `Your load limits are higher. Light: 5. Normal: 7. Heavy: 8.`,
    }, {
      "name": "Not to be Trifled With",
      "text": `You can push yourself to do one of the following: perform a feat of physical force that verges on the superhuman—engage a small gang on equal footing in close combat.`,
    }, {
      "name": "Savage",
      "text": `When you unleash physical violence, it's especially frightening. When you Command a frightened target, take +1d.`,
    }, {
      "name": "Vigorous",
      "text": `You recover from harm faster. Permanently fill in one of your healing clock segments. Take +1d to healing treatment rolls.`,
    }, ],
    "gear": [{
      "name": "Fine hand weapon",
      "text": ``,
      "extra": ``,
      "load": 1
    }, {
      "name": "Fine heavy weapon",
      "text": ``,
      "extra": ``,
      "load": 2
    }, {
      "name": "Scary weapon or tool",
      "text": ``,
      "extra": ``,
      "load": 1
    }, {
      "name": "Zip ties or light restraints",
      "text": ``,
      "extra": ``,
      "load": 0
    }, {
      "name": "Overdrive spice",
      "text": ``,
      "extra": ``,
      "load": 0
    }, {
      "name": "Spiritbane charm",
      "text": ``,
      "extra": ``,
      "load": 0
    }, ]
  },
  "Hound": {
    "name": "Hound",
    "actions": "Survey.1,Hunt.2",
    "abilities": [{
      "name": "Sharpshooter",
      "text": `You can push yourself to do one of the following: make a ranged attack at extreme distance beyond what’s normal for the weapon—unleash a barrage of rapid fire to suppress the enemy.`,
    }, {
      "name": "Focused",
      "text": `You may expend your special armor to resist a consequence of surprise or mental harm (fear, confusion, losing track of someone) or to push yourself for ranged combat or tracking.`,
    }, {
      "name": "Supernatural Hunter",
      "text": `Your hunting pet is imbued with supernatural energy. It gains potency when tracking or fighting the supernatural, and gains an arcane ability: ghost-form, mind-link, or arrow-swift. Take this ability again to choose an additional arcane ability for your pet.`,
      "n": 2
    }, {
      "name": "Scout",
      "text": `When you gather info to locate a target, you get +1 effect. When you hide in a prepared position or use camouflage, you get +1d to rolls to avoid detection.`,
    }, {
      "name": "Survivor",
      "text": `From hard won experience or ritual, you cannot be poisoned and you are always able to find edible lora and fauna when exploring the Outlands. You get +1 stress box.`,
    }, {
      "name": "Tough as Nails",
      "text": `Penalties from harm are one level less severe (though level 4 harm is still fatal).`,
    }, {
      "name": "Vengeful",
      "text": `You gain an additional xp trigger: You got payback against someone who harmed you or someone you care about. If your crew helped you get payback, also mark crew xp.`,
    }, ],
    "gear": [{
      "name": "Fine pair of pistols",
      "text": ``,
      "extra": ``,
      "load": 1
    }, {
      "name": "Fine long rifle",
      "text": ``,
      "extra": ``,
      "load": 2
    }, {
      "name": "Special ammunition",
      "text": ``,
      "extra": ``,
      "load": 1
    }, {
      "name": "A trained hunting pet",
      "text": ``,
      "extra": ``,
      "load": 0
    }, {
      "name": "Fine optics",
      "text": ``,
      "extra": ``,
      "load": 1
    }, {
      "name": "Spiritbane charm",
      "text": ``,
      "extra": ``,
      "load": 0
    }, ]
  },
  "Artificer": {
    "name": "Artificer",
    "actions": "Wreck.1,Tinker.2",
    "abilities": [{
      "name": "Alchemist",
      "text": `When you invent or craft a creation with alchemical features, take +1 result level to your roll. You begin with one special formula already known.`,
    }, {
      "name": "Analyst",
      "text": `During downtime, you get two ticks to distribute among any long term project clocks that involve investigation or learning a new formula or design plan.`,
    }, {
      "name": "Artificer",
      "text": `When you invent or craft a creation with cosmic features, take +1 result level to your roll. You begin with one special design already known.`,
    }, {
      "name": "Fortitude",
      "text": `You may expend your special armor to resist a consequence of fatigue, weakness, or chemical effects, or to push yourself when working with technical skill or handling alchemicals.`,
    }, {
      "name": "Supernatural Ward",
      "text": `You know how to Wreck an area with arcane substances and methods so it is either anathema or enticing to supernaturals (your choice).`,
    }, {
      "name": "Physicker",
      "text": `You can Tinker with living beings to treat wounds or stabilize the dying. You may study a malady or corpse. Everyone in your crew gets +1d to their healing treatment rolls.`,
    }, {
      "name": "Saboteur",
      "text": `When you Wreck, the work is much quieter than it should be and the damage is hidden from casual inspection.`,
    }, {
      "name": "Venomous",
      "text": `Choose a drug or poison (from your bandolier stock) to which you have become immune. You can push yourself to secrete it through your skin or saliva or exhale it as a vapor.`,
    }, ],
    "gear": [{
      "name": "Fine tinkering tools",
      "text": ``,
      "extra": ``,
      "load": 1
    }, {
      "name": "Fine wrecking tools",
      "text": ``,
      "extra": ``,
      "load": 2
    }, {
      "name": "Bandolier (3 uses)",
      "text": ``,
      "extra": ``,
      "load": 1
    }, {
      "name": "Bandolier (3 uses)",
      "text": ``,
      "extra": ``,
      "load": 1
    }, {
      "name": "Gadgets",
      "text": ``,
      "extra": ``,
      "load": 1
    }, ]
  },
  "Rogue": {
    "name": "Rogue",
    "actions": "Finesse.1,Prowl.2",
    "abilities": [{
      "name": "Infiltrator",
      "text": `You are not affected by quality or Tier when you bypass security measures.`,
    }, {
      "name": "Ambush",
      "text": `When you attack from hiding or spring a trap, you get +1d.`,
    }, {
      "name": "Daredevil",
      "text": `When you roll a desperate action, you get +1d to your roll if you also take -1d to any resistance rolls against consequences from your action.`,
    }, {
      "name": "The Devil's Footsteps",
      "text": `When you push yourself, choose one of the following additional benefits: perform a feat of athletics that verges on the superhuman—maneuver to confuse your enemies so they mistakenly attack each other.`,
    }, {
      "name": "Expertise",
      "text": `Choose one of your action ratings. When you lead a group action using that action, you can suffer only 1 stress at most regardless of the number of failed rolls.`,
    }, {
      "name": "Shadow Walk",
      "text": `You may become shadowy and insubstantial for a few moments. Take 2 stress when you shift, plus 1 stress for each extra feature: It lasts for a few minutes rather than moments—you are invisible rather than shadowy—you may float through the air like a ghost`,
    }, {
      "name": "Reflexes",
      "text": `When there's a question about who acts first, the answer is you (two characters with Reflexes act simultaneously).`,
    }, {
      "name": "Shadow",
      "text": `You may expend your special armor to resist a consequence from detection or security measures, or to push yourself for a feat of athletics or stealth.`,
    }, ],
    "gear": [{
      "name": "Fine lockpicks",
      "text": ``,
      "extra": ``,
      "load": 0
    }, {
      "name": "Fine shadow cloak",
      "text": ``,
      "extra": ``,
      "load": 1
    }, {
      "name": "Light climbing gear",
      "text": ``,
      "extra": ``,
      "load": 1
    }, {
      "name": "Silence potion vial",
      "text": ``,
      "extra": ``,
      "load": 0
    }, {
      "name": "Dark-sight goggles",
      "text": ``,
      "extra": ``,
      "load": 1
    }, {
      "name": "Spiritbane charm",
      "text": ``,
      "extra": ``,
      "load": 0
    }, ]
  },
  "Empath": {
    "name": "Empath",
    "actions": "Consort.1,Sway.2",
    "abilities": [{
      "name": "Psychologist",
      "text": `When you gather information to discover the personality, motivation, or ambition of a person gain +1 effect. When you get +1d to rolls when you socially interact with that person.`,
    }, {
      "name": "Socialite",
      "text": `You gain +1d to Consort when you gather information on a target for a score. You get +1d to the engagement roll for that operation.`,
    }, {
      "name": "Empathic Read",
      "text": `You always know when someone is lying to you.`,
    }, {
      "name": "Telepathic Influence",
      "text": `You may push yourself to cloud a target's mind and sway them in the face of contradictory evidence. Spend 1 stress for each additional feature: they have only vague memories of the event — it works on a small group. Telepathic Influence: You may push yourself to cloud a target's mind and sway them in the face of contradictory evidence. Spend 1 stress for each additional feature: they have only vague memories of the event — it works on a small group. `,
    }, {
      "name": "Connected",
      "text": `During downtime, you get +1d when you acquire assets or lay low. Any time you gather info take +1d.`,
    }, {
      "name": "Subterfuge",
      "text": `You may expend your special armor to resist a consequence of persuasion or suspicion. When you resist with insight, gain +1d. `,
    }, {
      "name": "Councilor",
      "text": `When you provide meaningful insight or heartfelt advice that a crewmate follows, you both clear 1 stress.`,
    }, {
      "name": "Old Friends",
      "text": `Whenever you land in a new location, write down a friend you know there (see Influential Friends below). `,
    }, {
      "name": "Disarming",
      "text": `Whenever you use a gambit while speaking, hostilities and danger also pause while you speak.`,
    }, ],
    "gear": [{
      "name": "Fine clothes & jewlery",
      "text": ``,
      "extra": ``,
      "load": 0
    }, {
      "name": "Fine bottle of whiskey",
      "text": ``,
      "extra": ``,
      "load": 1
    }, {
      "name": "Fine concealed weapon",
      "text": ``,
      "extra": ``,
      "load": 0
    }, {
      "name": "Spiritbane charm",
      "text": ``,
      "extra": ``,
      "load": 0
    }, ]
  },
  "Proxy": {
    "name": "Proxy",
    "actions": "Study.1,Attune.2",
    "abilities": [{
      "name": "Cosmic Bond",
      "text": `You are bound/have bound yourself in the service of a Cosmic or Cosmic organization. Say their name and describe how the power within physically manifests to identify you (noticeable aura, striking physical appearance, etc). In return they have empowered you. When you spend a downtime action communicating / reporting to your benefactor set your Power to 3. You may spend 1 Power instead of 2 stress to push yourself. You may also spend a Power to resist a source of physical or mundane harm. If do not spend a downtime action to communicate you lose 1 Power. When you start select Mystic or Cosmic Bond.`,
    }, {
      "name": "Burn Bright",
      "text": `You may push yourself twice.`,
    }, {
      "name": "Might",
      "text": `You may spend a Power to attempt of superhuman strength, agility, or endurance (run across ropes, bend iron with your hands, deflect bullets with your empty palms, etc) or project your cosmic power in a wave of energy.`,
    }, {
      "name": "Beyond Flesh and Blood",
      "text": `While you have at least one Power your flesh and bones are filled with cosmic essence. You do not need to eat, sleep, or breathe. Your body is a fine holy weapon and grants Potency against the enemies of your Cosmic’s Faction.`,
    }, {
      "name": "Cosmic Oracle",
      "text": `When you Gather Information you may Attune to communicate with your benefactor and tap into their vast information network. Take +1d when acting on the answers.`,
    }, {
      "name": "Protector",
      "text": `When you protect a teammate, take +1d to your Resistance roll. When you gather info to anticipate possible threats in the current situation you get +1 effect.`,
    }, {
      "name": "Lay on Hands",
      "text": `When you have a moment of respite and calm you may spend 2 Power to remove one harm from an ally you can touch skin to skin.`,
    }, {
      "name": "Greater Favor",
      "text": `The Power you gain from your downtime in communication is increased to 4. If you take this ability a second time it becomes 5. Each time you take this ability you lose 1 contact as you devote more of your life to working your benefactor’s goals.`,
      "n": 2
    }, {
      "name": "Thaumaturgy",
      "text": `While you have at least 1 Power you may make yourself a conduit for the cosmic energy you store. You may Attune to call on your benefactor's elemental domains and bend them to your will. Say the effect you want and the GM will tell you what you risk and/or what harm you suffer.`,
    }, {
      "name": "Enhanced",
      "text": `The bond with your benefactor has enhanced your natural capability. Choose an Action and say how it represents your benefactor’s focus / attributes. You gain +1d in this Action as long as you have at least 1 Power. If you ever have 0 Power take -1d in this Action. You may take this twice choosing a different action each time.`,
      "n": 2
    }, ],
    "gear": [{
      "name": "Fine hand weapon of your faction",
      "text": ``,
      "extra": ``,
      "load": 1
    }, {
      "name": "Fine clothes of your faction",
      "text": ``,
      "extra": ``,
      "load": 1
    }, {
      "name": "Cosmic artifact",
      "text": ``,
      "extra": `What does it do?`,
      "load": 1
    }, {
      "name": "Magical Bracers",
      "text": `These provide magical defense equivalent to wearing armor, but with no load. You cannot wear armor as well.`,
      "extra": `How did you acquire these bracers?`,
      "load": 0
    }, {
      "name": "Spiritbane charm",
      "text": ``,
      "extra": ``,
      "load": 0
    }, ]
  },
  "Wizard": {
    "name": "Wizard",
    "actions": "Study.1,Consort.2",
    "abilities": [{
      "name": "Spellcaster",
      "text": `You are a scholarly wizard who has spent years pouring over arcane tomes. 
          When you spend a downtime action in arcane study set your spell-reserve to 3. 
          You may spend 1 spell-reserve instead of 2 stress to push yourself. 
          Also, select one school ability as an initial focus – select from: <em>Abjuror, Conjuror, Diviner, Evoker, Illusionist, or Transmuter.</em>`,
    }, {
      "name": "Artificer",
      "text": `When you invent or craft a creation with arcane features, take +1 result level to your roll. You begin with one arcane design already known.`,
    }, {
      "name": "Abjuror",
      "text": `When you protect a teammate, take +1d to your Resistance roll. When you gather info to anticipate possible threats in the current situation you get +1 effect.`,
    }, {
      "name": "Conjuror",
      "text": `You can summon tools or items in a time of need - add +2 to your load capacity.`,
    }, {
      "name": "Diviner",
      "text": `You can use Attune when you gather information on a target for a score. You get +1d to the engagement roll for that operation.`,
    }, {
      "name": "Evoker",
      "text": `You can push yourself to do one of the following: unleash elemental blast (fire, ice, electricity, force, etc) as a weapon—create a wall of raw elemental material (fire, ice, stone, force, etc) large enough to enclose a small room in your immediate vicinity.`,
    }, {
      "name": "Illusionist",
      "text": `You can push yourself to do one of the following: turn invisible to the eyes and ears—create illusions that look, sound, and feel real.When you push yourself to activate this ability, you also get one of the normal benefits of pushing yourself (+1d, +1 effect, etc.)`,
    }, {
      "name": "Transmuter",
      "text": `You can make superficial changes to an inanimate object, like small changes in texture or color that last for up to an hour. You can also use Attune to manipulate inanimate objects to grasp or trip an opponent or to destroy an object (+1d and use Attune instead of Wreck).`,
    }, {
      "name": "Spell for Every Occasion",
      "text": `You can push yourself to roll Attune while performing a different action. Describe the spell you have studied that would be just perfect for the occasion.`,
    }, {
      "name": "Ritual",
      "text": `You can Study an arcane ritual (or create a new one) to summon a supernatural effect or being. You know the arcane methods to perform ritual sorcery. You begin with one ritual already learned.`,
    }, {
      "name": "Warderd",
      "text": `You may expend your special armor to resist a supernatural consequence, or to push yourself when you deal with arcane force.`,
    }, ],
    "gear": [{
      "name": "Scrolls and books",
      "text": `A collection of books on arcane theory and practice along with some rarer esoteric subjects contained on scrolls. If there is a topic concerning the arcane, you probably have some information…somewhere.`,
      "extra": `Where did you get the books and scrolls from? What has been the focus of your study?`,
      "load": 1
    }, {
      "name": "Fine Magical Staff",
      "text": `A finely carved staff - no long bearded wizard would be without one. You can use it to bash people or, as long as you have one spell-reserve, you can fire bolts of arcane energy from it equivalent to using a crossbow/pistol.`,
      "extra": `What type of elemental energy is bound to the staff? How did you acquire it?`,
      "load": 2
    }, {
      "name": "Magical Bracers",
      "text": `These provide magical defense equivalent to wearing armor, but with no load. You cannot wear armor as well.`,
      "extra": `How did you acquire these bracers?`,
      "load": 0
    }, {
      "name": "Familiar",
      "text": `A small creature incapable of speaking, but can understand language and assist with basic tasks. Likes you. Anticipates your actions. `,
      "extra": `What type of creature is it? Where did you acquire it?`,
      "load": 0
    }]
  }
}

/*
Patron: When you advance your Tier, it costs half the coin it normally would. Who is your patron? Why do they help you?
Veteran: Choose a special ability from another crew.
*/

const CREWPLAYBOOKS = {
  "Enclave": {
    "name": "Enclave",
    "short" : "Tapping into the Arcane",
    "about" : `An enclave is infused with magic, housing denizens who dabble heavily in the arcane. 
      Magic lingers in the air, runes are scrawled on the walls, and even the basic personnel may have some level of magical aptitude.
      The sites and trades of an enclave are focused on the arcane, giving magical bonuses and abilities to its inhabitants. `,
    "special" : `Guards and Wards. Establish an area around your HQ and gain arcane power within it (choose 3):  
      weather control - magical sentries - mindlink - dark whispers - living plants - illusions - corrupted wildlife. 
      Roll your tier as a fortune roll to determine their effect as a trap, trick, or spell.`,
    "xp" : "Acquire a relic, have an arcane/technical breakthrough, catalog a cosmic source, or explore the unknown.",
    "turf" : `An extension/library/lab on another shard; a new field of arcane expertise; an expanded relic collection.`,
    "advancements": [{
      "name": "Academy",
      "text": `All personnel add Invoke as an action. Choose a path of magic that they can cast. 
      If they already have Invoke, they instead gain the adept edge.`,
    },{
      "name": "Arcane Rigging",
      "text": `You get 2 free load of arcane implements.`,
    },{
      "name": "Bestiary",
      "text": `You always have fresh mounts, which come with an edge (choose one): aquatic - armored - fast - 
        flying - intelligent - magical - terrifying. Your mount can help out on a roll, but you risk losing it.`,
    },{
      "name": "Crucible",
      "text": `You can pay cost to push you personnel into making a magic item. 
      Roll dice depending on the cost - light gives 1d, medium gives 2d, and heavy gives 3d. 
      Failure: Tier 1, volatile, Mixed: Tier 1, Success:  Tier 2, Critical: Tier 3.`,
    },{
      "name": "Extensive Curriculum",
      "text": `Each PC may add +1 action rating to Study, Attune, or Sway (up to a max rating of 3). 
      Each player may choose the action they prefer (you don’t all have to choose the same one). 
      If you take this ability during initial character and guild creation, it supersedes the normal starting limit for action ratings.`,
    },{
      "name": "Gardens",
      "text": `You can pay a cost to have the mystical plants produce a potion of your 
      choice equal to the cost's tier or a limited supply of organic goods.`,
    },{
      "name": "Infirmary",
      "text": `You have an established infirmary and professional doctors. You take +1d to healing rolls.`,
    },{
      "name": "Lexicon of Ways",
      "text": `You have accumulated a massive collection of Ways. When undertaking a Journey 
        in your Realm you always know a way connecting the origin and destination. 
        This may be taken a second time and the PCs take +1d on challenges made during a Journey.`,
    },{
      "name": "Library",
      "text": `You take +1d to gather information when you use the library to look up information and always 
      have a source of arcane knowledge. You can always flashback to gathering information here.`,
    },{
      "name": "Potion Lab",
      "text": `Choose a single magic path. You always have a supply of any tier 1 potion and a single 
      tier 2 potion of that path. The tier 2 potion is the same for everyone and chosen when the trade is established.`,
    },{
      "name": "Scrying Pool",
      "text": `You can pay light cost to see any location in your region. You take +1d on your next roll when you apply what you saw.`,
    },{
      "name": "Supernatural Warding",
      "text": `You specialize in defense against supernatural trouble. 
        You gain +1d to resistance rolls against supernatural threats. You get +1d to healing rolls when you have supernatural harm.`,
    },{
      "name": "Vehicle Bay",
      "text": `You have a vehicle that your personnel upkeep (choose one): 
        gas sub - hot air balloon - horseless cart. It has edges (choose two): armored - 
        dependable - camouflaged - fast - nimble.  It also has a flaw (choose one): clumsy - 
        distinct - noisy - rickety - slow. The vehicle is fully repaired or rebuilt each recovery.`,
    }],
    "upgrades" : []
  },
  "Forge": {
    "name": "Forge",
    "short" : "Harnessing the Power of Industry",
    "about" : `A forge is built for production - crazy inventions, factories, steamworks, and alchemicals can be found on site. 
      Problems are approached with ingenuity, eagerness, and a keen disregard for danger. A forge always has a source of power - 
      perhaps it is a volcano, or it contains a giant steamworks, or harnesses the power of mighty river.`,
    "special" : `Your HQ has a power track. Each downtime, you gain power equal to 1 + tier. 
      Any player can spend these to take +1d on a downtime activity.`,
    "xp" : "Clean a contaminated site, create a new technologic wonder, help a people through technology, or harness a new source of power.",
    "turf" : `A new source of power; labs or experiment test sites; a new field of expertise.`,
    "advancements": [{
      "name": "Alchemist Lab",
      "text": `You always have a supply of any tier 1 alchemical. 
        You can also pay 1 gold to acquire a single tier 2 alchemical.`,
    },{
      "name": "Always the Right Tool",
      "text": `You get 2 free load of tools.`,
    },{
      "name": "Break Room",
      "text": `You take +1d on calamity rolls and can pay light cost to automatically recruit the following minion types: 
      alchemists - workers.`,
    },{
      "name": "Engineering Labs",
      "text": `Each PC may add +1 action rating to Study, Wreck, or Tinker (up to a max rating of 3). 
      Each player may choose the action they prefer (you don’t all have to choose the same one). 
      If you take this ability during initial character and guild creation, it supersedes the normal starting limit for action ratings.`,
    },{
      "name": "Factory",
      "text": `Your personnel make some contraption every downtime phase. 
        Roll your tier to determine its quality. 
        Failure: Fun, but practically useless item, Mixed: Tier 1, Success:  Tier 2, Critical: Tier 3.`,
    },{
      "name": "Mines",
      "text": `You have a mine entrance with a large mineshaft extending away from it. 
        You take +2d on discovery rolls and can make an immediate discovery roll when this trade is created.`,
    },{
      "name": "Test Chamber",
      "text": `You can make personnel take a contraption into the chamber and test it out. 
        Roll your tier to determine what happens. Failure: The minion gets crushed, 
        Mixed: Remove its volatility, Success: Add an edge, Critical: Add two edges.`,
    },{
      "name": "Vehicle Bay",
      "text": `You have a vehicle that your personnel upkeep (choose one): 
        gas sub - hot air balloon - horseless cart. It has edges (choose two): armored - 
        dependable - camouflaged - fast - nimble.  It also has a flaw (choose one): clumsy - 
        distinct - noisy - rickety - slow. The vehicle is fully repaired or rebuilt each recovery.`,
    },{
      "name": "Workshop",
      "text": `All personnel add Tinker as an action. If they already have Tinker, they instead gain the crafty edge.`,
    },{
      "name": "Warehouses",
      "text": `Stockpiles give you +1d to acquire assets.`,
    },{
      "name": "Side Business",
      "text": `You have an established business. What devices or creations do you sell? 
        Roll your tier minus the threat of the region. You earn that much coin in downtime.`,
    },],
    "upgrades" : []
  },
  "Grand Bazaar": {
    "name": "Grand Bazaar",
    "short" : "Merchandise from across the Outlands",
    "about" : ``,
    "special" : ``,
    "xp" : "Acquire product supply, execute a high profile sale, out maneuver the competition, or secure new territory.",
    "turf" : `A new bazaar; supply of goods; different goods specialty; important group of clients.`,
    "advancements": [{
      "name": "Bestiary",
      "text": `You always have fresh mounts, which come with an edge (choose one): aquatic - armored - fast - 
        flying - intelligent - magical - terrifying. Your mount can help out on a roll, but you risk losing it.`,
    },{
      "name": "Empathic Arts",
      "text": `Each PC may add +1 action rating to Command, Consort, or Sway (up to a max rating of 3). 
      Each player may choose the action they prefer (you don’t all have to choose the same one). 
      If you take this ability during initial character and guild creation, it supersedes the normal starting limit for action ratings.`,
    },{
      "name": "Gift Giver",
      "text": `You get 2 free load of luxury gifts.`,
    },{
      "name": "Infirmary",
      "text": `You have an established infirmary and professional doctors. You take +1d to healing rolls.`,
    },{
      "name": "Lexicon of Ways",
      "text": `You have accumulated a massive collection of Ways. When undertaking a Journey 
        in your Realm you always know a way connecting the origin and destination. 
        This may be taken a second time and the PCs take +1d on challenges made during a Journey.`,
    },{
      "name": "Personal Clothier",
      "text": `+1d engagement roll for social plans.`,
    },{
      "name": "Business",
      "text": `You have an established business. What wonders do you sell? 
        Roll your tier minus the threat of the region. You earn that much coin in downtime.`,
    },{
      "name": "Surplus Caches",
      "text": `+2 coin for for product sale or supply.`,
    },{
      "name": "Luxury Venue",
      "text": `+1d to Consort and Sway on site.`,
    },{
      "name": "Warehouses",
      "text": `Stockpiles give you +1d to acquire assets.`,
    },{
      "name": "Informants",
      "text": `+1d gather info for job within your shard's region.`,
    },{
      "name": "Only the Best",
      "text": `You only carry the finest of what you specialize in. The product quality is equal to your Tier+2. 
        When you deal with a crew or faction, the GM will tell you who among them buys your goods (one, a few, many, or all).`,
    }],
    "upgrades" : []
  },
  "Hideout": {
    "name": "Hideout",
    "short" : "Espionage and Clandestine Acquisition",
    "about" : `A hideout is a place to lay low and try to stay out of sight. 
      A hideout's trades focus on secrecy, teamwork and efficiency when running missions.
      Your HQ is incredibly difficult to locate and you put an extreme emphasis on laying low and following plans.
      `,
    "special" : `Hidden Entrance: You take +1d on heat rolls and if you roll a success, each PC gains two luck.`,
    "xp" : "Conduct a successful espionage, sabotage, or theft operation.",
    "turf" : `An important group of clients; a remote hideout.`,
    "advancements": [{
      "name": "Bestiary",
      "text": `You always have fresh mounts, which come with an edge (choose one): aquatic - armored - fast - 
        flying - intelligent - magical - terrifying. Your mount can help out on a roll, but you risk losing it.`,
    },{
      "name": "Den of Thieves",
      "text": `Each PC may add +1 action rating to Prowl, Finesse, or Tinker (up to a max rating of 3). 
      Each player may choose the action they prefer (you don’t all have to choose the same one). 
      If you take this ability during initial character and guild creation, it supersedes the normal starting limit for action ratings.`,
    },{
      "name": "Dojo",
      "text": `When you perform a group action, you may count multiple 6s from different rolls as a critical success. 
      This trade's resource's is a master to train you, which also functions as personnel equal to your tier.`,
    },{
      "name": "Gambling Den",
      "text": `Each PC skims 1 gold on the side every downtime phase. You can pay light cost to automatically 
        recruit the following personnel types: grunts - thieves - tricksters.`,
    },{
      "name": "Gear Locker",
      "text": `Every PC always has a supply of the following: smoke bombs (T1) - sunrods (T1) - tar bombs (T2) 
        - thunderstones (T2) - climbing gear - throwing weapons - traps. You also gain 1 extra supply slot.`,
    },{
      "name": "Inflitrators",
      "text": `When you execute a clandestine infiltration, you get +1d to the engagement roll.`,
    },{
      "name": "Leave No Trace",
      "text": `When you keep an operation quiet or make it look like an accident, 
        you get half the rep value of the target (round up) instead of zero. 
        When you end downtime with zero heat, take +1 rep. There are many clients who value quiet operations. 
        This ability rewards you for keeping a low-profile.`,
    },{
      "name": "Lexicon of Ways",
      "text": `You have accumulated a massive collection of Ways. When undertaking a Journey 
        in your Realm you always know a way connecting the origin and destination. 
        This may be taken a second time and the PCs take +1d on challenges made during a Journey.`,
    },{
      "name": "Obstacle Course",
      "text": `Each PC can immediately place one extra dot in a Prowess action of their choice.`,
    },{
      "name": "Planning Room",
      "text": `Take +1d on engagement rolls for the following plans: pull a trick, talk it out, sneak in & out.`,
    },{
      "name": "Roost",
      "text": `Before a job, you can roll your dungeon tier to gather information about a target. 
        Your ravens, bats, or other small, winged creatures are always on the lookout for you. 
        You can also use these to communicate with distant factions.`,
    },{
      "name": "Something Up the Sleave",
      "text": `You get 2 free load of gear.`,
    },{
      "name": "Uncompromised Training",
      "text": `You have established routine, grueling, and relentless training that has hardened the PCs. 
        You get +1d to resistance rolls. It doesn’t confer any special toughness to your personnel.`,
    },{
      "name": "Informants",
      "text": `+1d gather info for jobs within your shard's region.`,
    },{
      "name": "Lookouts",
      "text": `+1d to Survey or Hunt in your shard's region.`,
    }],
    "upgrades" : []
  },
  "Stronghold": {
    "name": "Stronghold",
    "short" : "Strength of Arms and Protection",
    "about" : `A stronghold is a seat of power, security and might.  
      You build squads and later armies, looking to bring a region under your dominion or root out any 
      trouble that dares to slink out of the shadows. In a stronghold, people flock to your banners looking 
      to follow powerful leaders and for protection.
      `,
    "special" : `War Banners: You start with personnel salaries 1 and your salaries are always one higher than your tier. 
      At salaries 5, you attract an enormous beast of war or small army, a single veteran personnel with three edges 
      that rolls 3d on actions and can face a tier 3 faction on equal footing.`,
    "xp" : "Defend a people, root out trouble, secure a location, or succeed in battle.",
    "turf" : `A village/city under your protection; a foe/faction you specialize in fighting; new fortification; memorial to those that have fallen.`,
    "advancements": [{
      "name": "Armed and Ready",
      "text": `You get 2 free load of weapons & armor.`,
    },{
      "name": "Armorer",
      "text": `Each of your personnel gains the armored edge as you equip them with armor. 
        If they already had it, they gain it again, becoming heavily armored.`,
    },{
      "name": "Ample workforce",
      "text": `Each player can tick a clock one time per downtime. 
        However, you cannot tick a clock another player has ticked with this.`,
    },{
      "name": "Barracks",
      "text": `You can pay light cost to automatically recruit the following personnel: 
        grunts - raiders - scouts. These fresh recruits also function as a creature equal to your tier.`,
    },{
      "name": "Bestiary",
      "text": `You always have fresh mounts, which come with an edge (choose one): aquatic - armored - fast - 
        flying - intelligent - magical - terrifying. Your mount can help out on a roll, but you risk losing it.`,
    },{
      "name": "Militant",
      "text": `Each PC may add +1 action rating to Hunt, Prowl, or Skirmish (up to a max rating of 3). 
        Each player may choose the action they prefer (you don’t all have to choose the same one). 
        If you take this ability during initial character and guild creation, 
        it supersedes the normal starting limit for action ratings.`,
    },{
      "name": "Smithy",
      "text": `Each of your personnel gains the deadly edge as you equip them with dangerous weapons. 
        If they already had it, they take +effect when attacking.`,
    },{
      "name": "Supernatural Warding",
      "text": `You specialize in defense against supernatural trouble. 
        You gain +1d to resistance rolls against supernatural threats. You get +1d to healing rolls when you have supernatural harm.`,
    },{
      "name": "Uncompromised Training",
      "text": `You have established routine, grueling, and relentless training that has hardened the PCs. 
        You get +1d to resistance rolls. It doesn’t confer any special toughness to your personnel.`,
    },{
      "name": "War Room",
      "text": `Take +1d on engagement rolls for the following raid plans: set a trap, slaughter, smash & grab.`,
    },{
      "name": "Lookouts",
      "text": `+1d to Survey or Hunt in your shard's region.`,
    }],
    "upgrades" : []
  },
}

const UNIVERSALADV = [
  {
    "name": "Secure Lair",
    "text": `Your HQ has locks, alarms, and traps to thwart intruders. A second advancement improves the defenses to include arcane measures. You might roll your guild’s Tier if these measures are ever put to the test, to see how well they thwart an intruder.`,
  },{
    "name": "Vault",
    "text": `Your HQ has a secure vault, increasing your storage capacity for coin to 8. A second advancement increases your capacity to 16. A separate part of your vault can be used as a holding cell.`,
  },{
    "name": "Quality",
    "text": `Each advancement improves the quality rating of all the PCs’ items of that type, beyond the quality established by the crew’s Tier and fine items. You can improve the quality of Documents, Gear (covers Burglary Gear and Climbing Gear), Arcane Implements, Subterfuge Supplies, Tools (covers Demolitions Tools and Tinkering Tools), and Weapons.`,
  },{
    "name": "Training",
    "text": `If you have a Training upgrade, you earn 2 xp (instead of 1) when you train a given xp track during downtime (Insight, Prowess, Resolve, or Playbook xp). This upgrade essentially helps you advance more quickly. This advancement may be taken multiple times – once for each xp tack.  `,
  },{
    "name": "Patron",
    "text": `When you advance your Tier, it costs half the coin it normally would. Who is your patron? Why do they help you?`,
  },{
    "name": "Turf",
    "text": `Expand your guild. This may be taken multiple times. Each turf counts as one reputation (up to a max of 4). Where - what shard? What does it represent to your guild?`,
  },{
    "name": "Personnel",
    "text": `You recruit new personnel. Are they are a group or an expert? What actions do they specialize in? Add up to 2 edges and an equal number of flaws.`,
  }
]

const CREWUPGRADES = [
  [`Personnel`,`Personnel is either a group of individuals or a single expert NPC who works for your crew. For all the details on personnel, see the following pages.`],
  [`Hidden HQ`,`Your HQ has a secret location and is disguised to hide it from view. If your HQ is discovered, use two downtime activities and pay coin equal to your Tier to relocate it and hide it once again.`],
  [`Mastery`,`Your crew has access to master level training. You may advance your PCs’ action ratings to 4 (until you unlock this upgrade, PC action ratings are capped at 3). This costs four upgrade boxes to unlock.`],
  [`Quality`,`Each upgrade improves the quality rating of all the PCs’ items of that type, beyond the quality established by the crew’s Tier and fine items. You can improve the quality of Documents, Gear (covers Burglary Gear and Climbing Gear), Arcane Implements, Subterfuge Supplies, Tools (covers Demolitions Tools and Tinkering Tools), and Weapons.`,`So, if you are Tier 0, with fine lockpicks (+1) and the Quality upgrade for gear (+1), you could contend equally with a Tier II quality lock.`],  
  [`Quarters`,`Your HQ includes living quarters for the crew. Without this upgrade, each PC sleeps elsewhere, and is vulnerable when they do so.`],
  [`Secure HQ`,`Your HQ has locks, alarms, and traps to thwart intruders. A second upgrade improves the defenses to include arcane measures that work against the supernatural. You might roll your crew’s Tier if these measures are ever put to the test, to see how well they thwart an intruder.`],
  [`Training`,`If you have a Training upgrade, you earn 2 xp (instead of 1) when you train a given xp track during downtime (Insight, Prowess, Resolve, or Playbook xp). This upgrade essentially helps you advance more quickly.`,`If you have Insight Training, when you train Insight during downtime, you mark 2 xp on the Insight track (instead of just 1). If you have Playbook Training, you mark 2 xp on your playbook xp track when you train.`],
  [`Vault`,`Your HQ has a secure vault, increasing your storage capacity for coin to 8. A second upgrade increases your capacity to 16. A separate part of your vault can be used as a holding cell.`],
  [`Workshop`,`Your HQ has a workshop appointed with tools for tinkering and alchemy, as well as a small library of books, documents, and maps. You may accomplish long-term projects with these assets without leaving your lair.`]
]

const BONDS = [
      [`Turf`,`Counts as Rep. Max of 4.`],
      [`Side Business`,`(Tier roll) - Heat = coin in downtime`],
      [`Cover Opperation`,`-2 heat per score`],
      [`Infirmary`,`+1d to healing rolls`],
      [`Informants`,`+1d gather info for scores`],
      [`Warehouses`,`Stockpiles give you +1d to acquire assets`],

      [`Lookouts`,`+1d to Survey or Hunt on your turf`],
      [`Tavern/Luxury Venue`,`+1d to Consort and Sway on site`],

      [`Cover Identities`,`+1d engagement for deception and transport plans`],
      [`Archon Confederates`,`+1d engagement for assault plans`],
      [`Secret Ways`,`+1d engagement for stealth and transport plans`],
      [`Personal Clothier`,`+1d engagement roll for social plans`],
      [`Extenisve Labs`,`+1d engagement roll for research plans`],

      [`Hearts & Minds `,`+2 coin for protecting or clearing`],
      [`Street Fence`,`+2 coin for lower-class targets`],
      [`Luxury Fence`,`+2 coin for high class targets`],
      [`Loyal Fence`,`+2 coin for burglary or robbery`],
      [`Covert Drops`,`+2 coin for espionage or sabotage`],      
      [`Local Graft`,`+2 coin for for show of force or socialize`],
      [`Surplus Caches`,`+2 coin for for product sale or supply`],

      [`Barracks`,`+1 scale for your Thug cohorts`],
      [`Fleet`,`Your cohorts have their own vehicles`], 
      [`Catalog of Ways`,`Safe travel within a certain Region - you don't have to make a Travel Roll to get where you want to go`]      
]

const PLANS = [
  [`Attack plan`,`Do violence to a target.`,`The point of attack.`],
  [`Deception Plan`,`Lure, trick, or manipulate.`,`The method of deception.`],
  [`Research Plan`,`Exploit (pseudo-)science and the forces of nature.`,`The science/force you will exploit.`],
  [`Stealth plan`,`Trespass unseen where you're not wanted.`,`The entry point of infiltration.`],
  [`Social plan`,`Negotiate, bargain, or persuade.`,`The social connection you're using.`],
  [`Transport Plan`,`Move something from place to place.`,`Coordinates or course.`]
]

const PERSONNEL = [
  [`Artificers`,`Chemists, engineers, mechanics, saboteurs.`],
  [`HR`,`Diplomats, sales, and psychologists.`],
  [`Medical`,`Doctors, biologists, and chemists.`],
  [`Rogues`,`Infiltrators, thieves, and spies.`],
  [`Scouts`,`Scouts, `],
  [`Soldiers`,`Soldiers, toughs, mercs, and guards.`],
  [`Science`,`Cyberneticists, sensor technicians, physicists.`]	
]

export {PCPLAYBOOKS,CREWPLAYBOOKS,PLANS,GEAR,BONDS,CREWUPGRADES,PERSONNEL,UNIVERSALADV}
