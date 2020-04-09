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
  "Hawks": {
    "name": "Hawks",
    "xp" : "Win a battle, protect a location, track down a quarry, or clear a dangerous site.",
    "abilities": [{
      "name": "Dangerous",
      "text": `Each PC may add +1 action rating to Hunt, Skirmish, or Wreck (up to a max rating of 3).`,
    },{
      "name": "Blood Brothers",
      "text": `When you fight alongside your cohorts in combat, they get +1d for teamwork rolls (setup and group actions). All of your cohorts get the Thugs type for free (if they're already Thugs, add another type).`,
    },{
      "name": "Door Kickers",
      "text": `When you execute an assault plan, take +1d to the engagement roll.`,
    },{
      "name": "Fiends",
      "text": `Fear is as good as respect. You may count each wanted level as if it was turf.`,
    },{
      "name": "Forged in the Fire",
      "text": `Each PC has been toughened by experience. You get +1d to resistance rolls.`,
    },{
      "name": "War Dogs",
      "text": `When you’re at war (-3 faction status), your crew does not suffer -1 hold and PCs still get two downtime activities, instead of just one.`,
    }],
    "map" : [
      [`Barracks`,`+1 scale for your Thug cohorts`],
      [`Turf`],
      [`Terrorized Citizens`,`+2 coin for battle or extortion`],
      [`Informants`,`+1d gather info for scores`],
      [`Protection Racket`,`(Tier roll) - Heat = coin in downtime`],
      [`Fighting Pits`,`(Tier roll) - Heat = coin in downtime`],
      ["Turf"],
      ["Lair"],
      ["Turf"],
      ["Turf"],
      [`Infirmary`,`+1d to healing rolls`],
      [`Bluecoat Intimidation`,`-2 heat per score`],
      [`Street Fence`,`+2 coin for lower-class targets`],
      [`Warehouses`,`Stockpiles give you +1d to acquire assets`],
      [`Bluecoat Confederates`,`+1d engagement for assault plans`]
    ],
    "upgrades" : ["Bravos rigging (2 free load of weapons or armor)","Ironhook Contacts (+1 Tier in prison)","Elite Rovers","Elite Thugs","Hardened (+1 trauma box)"]
  },
  "Merchants": {
    "name": "Merchants",
    "xp" : "Acquire product supply, execute a high-profile sale, or secure new territory.",
    "abilities": [{
      "name": "Silver Tongues",
      "text": `Each PC may add +1 action rating to Command, Consort, or Sway (up to a max rating of 3).`,
    },{
      "name": "Accord",
      "text": `Sometimes friends are as good as territory. You may count up to three +3 faction statuses you hold as if they are turf.`,
    },{
      "name": "The Good Stuff",
      "text": `Your merchandise is exquisite. The product quality is equal to your Tier+2. When you deal with a crew or faction, the GM will tell you who among them is hooked on your product (one, a few, many, or all).`,
    },{
      "name": "Cosmic Market",
      "text": `Through hard-won experience, you have a market with a Cosmic Faction. They do not pay in coin. What do they pay with?`,
    },{
      "name": "High Society",
      "text": `It's all about who you know. Take -1 heat during downtime and +1d to gather info about the city's elite.`,
    },{
      "name": "Hooked",
      "text": `Your gang members use your product. Add the savage, unreliable, or wild flaw to your gangs to give them +1 quality.`,
    }],
    "map" : [
      [`Turf`],
      [`Personal Clothier`,`+1d engagement roll for social plans`],
      [`Local Graft`,`+2 coin for for show of force or socialize`],
      [`Lookouts`,`+1d to Survey or Hunt on your turf`],
      [`Informants`,`+1d gather info for scores`],
      ["Turf"],
      ["Turf"],
      ["Lair"],
      ["Turf"],
      [`Luxury Venue`,`+1d to Consort and Sway on site`],
      [`Foreign Market`,`(Tier roll) - Heat = coin in downtime`],
      [`Vice Den`,`(Tier roll) - Heat = coin in downtime`],
      [`Surplus Caches`,`+2 coin for for product sale or supply`],
      [`Cover Opperation`,`-2 heat per score`],
      [`Cover Identities`,`+1d engagement for deception and transport plans`],
    ],
    "upgrades" : ["Merchants' rigging (1 carried item is concealed and has no load)","Ironhook Contacts (+1 Tier in prison)","Elite Rooks","Elite Thugs","Composed (+1 stress box)"]
  },
  "Shadows": {
    "name": "Shadows",
    "xp" : "Execute a successful espionage operation, delve unseen, conduct an act of sabotage, or commit a theft.",
    "abilities": [{
      "name": "Everyone Steals",
      "text": `Each PC may add +1 action rating to Prowl, Finesse, or Tinker (up to a max rating of 3).`,
    },{
      "name": "Pack Rats",
      "text": `Your lair is a jumble of stolen items. When you roll to acquire an asset, take +1d.`,
    },{
      "name": "Second Story",
      "text": `When you execute a clandestine infiltration, you get +1d to the engagement roll.`,
    },{
      "name": "Slippery",
      "text": `When you roll entanglements, roll twice and keep the one you want. When you reduce heat on the crew, take +1d.`,
    },{
      "name": "Synchronized",
      "text": `When you perform a group action, you may count multiple 6s from different rolls as a critical success.`,
    },{
      "name": "Lurking",
      "text": `When you follow someone to their destination, take +1d to avoid being noticed.`,
    }],
    "map" : [
      [`Interrogation Chamber`,`+1d to Command and Sway on site`],
      [`Turf`],
      [`Loyal Fence`,`+2 coin for burglary or robbery`],
      [`Gambling Den`,`(Tier roll) - Heat = coin in downtime`],
      [`Tavern`,`+1d to Consort and Sway on site`],
      [`Drug Den`,`(Tier roll) - Heat = coin in downtime`],
      [`Informants`,`+1d gather info for scores`],
      ["Lair"],
      ["Turf"],
      [`Lookouts`,`+1d to Survey or Hunt on your turf`],
      [`Hagfish Farm`,`Body disposal, +1d to reduce heat after killing`],
      [`Infirmary`,`+1d to healing rolls`],
      [`Covert Drops`,`+2 coin for espionage or sabotage`],
      ["Turf"],
      [`Secret Pathways`,`+1d engagement for stealth plans`],
    ],
    "upgrades" : ["Theif Rigging (2 free load of tools or gear)","Underground maps & passkeys","Elite Rooks","Elite Skulks","Composed (+1 stress box)"]
  },
  "Wayfinders": {
    "name": "Wayfinders",
    "xp" : "Establish a way, discover a new shard, map a new site or ruin, or acquire a new client.",
    "abilities": [{
      "name": "Like Part of the Family",
      "text": `Create one of your vehicles as a cohort (use the vehicle edges and flaws, below). Its quality is equal to your Tier +1.`,
    },{
      "name": "All Hands",
      "text": `During downtime, one of your cohorts may perform a downtime activity for the crew to acquire an asset, reduce heat, or work on a long-term project.`,
    },{
      "name": "Just Passing Through",
      "text": `During downtime, take -1 heat. When your heat is 4 or less, you get +1d to deceive people when you pass yourselves off as ordinary citizens.`,
    },{
      "name": "Leverage",
      "text": `Your crew supplies contraband for other factions. Your success is good for them. Whenever you gain rep, gain +1 rep.`,
    },{
      "name": "Reavers",
      "text": `When you go into conflict aboard a vehicle, you gain +1 effect for vehicle damage and speed. Your vehicle gains armor.`,
    },{
      "name": "Renegades",
      "text": `Each PC may add +1 action rating to Finesse, Prowl, or Skirmish (up to a max rating of 3).`,
    }],
    "map" : [
      [`Turf`],
      [`Side Business`,`(Tier roll) - Heat = coin in downtime`],
      [`Luxury Fence`,`+2 coin for high class targets`],
      [`Side Business`,`(Tier roll) - Heat = coin in downtime`],
      [`Tavern`,`+1d to Consort and Sway on site`],
      [`Ancient Gate`,`Safe passage in the Deathlands`]
      [`Turf`],
      ["Lair"],
      ["Turf"],
      [`Turf`],
      [`Secret Routes`,`+1d engagement for transport plans`],
      [`Informants`,`+1d gather info for scores`],
      [`Fleet`,`Your cohorts have their own vehicles`],
      [`Cover Opperation`,`-2 heat per score`],
      [`Warehouse`,`Stockpiles give you +1d to acquire assets`],
    ],
    "upgrades" : ["Smuggler's Rigging (2 items carried are perfectly concealed)","Camouflage (vehicles are perfectly concealed at rest)","Elite Rovers","Composed (+1 stress box)"]
  },
  "Arcanomancers": {
    "name": "Arcanomancers",
    "xp" : "Acquire a relic, clean a contaminated site, catalog a cosmic source, or have a technical breakthrough.",
    "abilities": [{
      "name": "Studied",
      "text": `Each PC may add +1 action rating to Attune, Study, or Tinker (up to a max rating of 3).`,
    },{
      "name": "Warderd",
      "text": `You get +1d to resistance rolls against supernatural threats. You get +1d to healing rolls when you have supernatural harm.`,
    },{
      "name": "Researcher",
      "text": `Each PC gains an additional Vice: Research. When you indulge this vice, you don't overindulge if you clear excess stress. In addition, each player gets a free gambit from now until you indulge this vice again.`,
    }],
    "map" : [
,
    ],
    "upgrades" : []
  },
}

export {PCPLAYBOOKS,CREWPLAYBOOKS}
