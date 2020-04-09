/*
Iron Horse	Abjuration	Necromancy																							
Cobalt Crane	Enchantment	Evocation 																							
Mercury Tiger	Transmutation	Illusion																							
Ruby Phoenix	Evocation 	Abjuration																							
Silver Fox	Conjuration	Divination																							
*/

const SCHOOLS = {
  "Abjuration" : `C.Blade Ward,C.Resistance,1.Mage Armor,1.Sanctuary,1.Shield,2.Aid,2.Lesser Restoration,2.Pass without Trace,3.Counterspell,3.Dispel Magic,3.Nondetection,3.Protection from Energy,4.Banishment,4.Death Ward,4.Freedom of Movement,4.Stoneskin,5.Antilife Shell,5.Dispel Evil and Good,5.Greater Restoration,6.Forbiddance,6.Globe of Invulnerability,6.Guards and Wards,7.Symbol,8.Antimagic Field,8.Mind Blank,9.Imprisonment`,
  "Conjuration" : `C.Acid Splash,C.Mage Hand,C.Produce Flame,1.Entangle,1.Fog Cloud,1.Grease,2.Flaming Sphere,2.Misty Step,2.Web,3.Call Lightning,3.Sleet Storm,3.Stinking Cloud,4.Conjure Minor Elementals,4.Dimension Door,4.Evard's Black Tentacles,4.Mordenkainen's Faithful Hound,5.Cloudkill,5.Conjure Elemental,5.Teleportation Circle,6.Arcane Gate,6.Wall of Thorns,6.Word of Recall,7.Plane Shift,7.Teleport,8.Incendiary Cloud,8.Maze,8.Tsunami,9.Storm of Vengeance`,
  "Divination" : `C.Guidance,C.True Strike,1.Detect Magic,1.Detect Poison and Disease,1.Identify,2.Augury,2.Beast Sense,2.Detect Thoughts,2.Find Traps,2.Locate Object,2.See Invisibility,3.Clairvoyance,3.Tongues,4.Arcane Eye,4.Divination,4.Locate Creature,5.Commune,5.Contact Other Plane,5.Legend Lore,6.Find the Path,6.True Seeing,9.Foresight`,
  "Enchantment" : `C.Friends,1.Bane,1.Bless,1.Command,1.Sleep,2.Calm Emotions,2.Hold Person,2.Suggestion,4.Confusion,4.Dominate Beast,5.Dominate Person,5.Geas,5.Hold Monster,6.Mass Suggestion,8.Dominate Monster,8.Feeblemind,8.Power Word Stun,9.Power Word Kill`,
  "Evocation" : `C.Dancing Lights,C.Fire Bolt,C.Light,C.Ray of Frost,C.Shocking Grasp,1.Burning Hands,1.Chromatic Orb,1.Cure Wounds,1.Faerie Fire,1.Guiding Bolt,1.Healing Word,1.Magic Missile,1.Thunderwave,2.Continual Flame,2.Darkness,2.Flame Blade,2.Gust of Wind,2.Melf's Acid Arrow,2.Moonbeam,2.Prayer of Healing,2.Scorching Ray,2.Shatter,2.Spiritual Weapon,3.Daylight,3.Fireball,3.Lightning Bolt,3.Mass Healing Word,3.Sending,3.Wind Wall,4.Fire Shield,4.Ice Storm,4.Otiluke's Resilient Sphere,4.Wall of Fire,5.Bigby's Hand,5.Cone of Cold,5.Flame Strike,5.Hallow,5.Mass Cure Wounds,5.Wall of Force,5.Wall of Stone,6.Blade Barrier,6.Chain Lightning,6.Heal,6.Otiluke's Freezing Sphere,6.Sunbeam,6.Wall of Ice,7.Delayed Blast Fireball,7.Fire Storm,7.Forcecage,7.Mordenkainen's Sword,7.Prismatic Spray,8.Earthquake,8.Sunburst,8.Telepathy,9.Mass Heal,9.Meteor Swarm`,
  "Illusion" : `C.Minor Illusion,1.Color Spray,1.Disguise Self,1.Silent Image,2.Blur,2.Invisibility,2.Magic Mouth,2.Mirror Image,2.Phantasmal Force,2.Silence,3.Fear,3.Hypnotic Pattern,3.Major Image,4.Greater Invisibility,4.Hallucinatory Terrain,4.Phantasmal Killer,5.Mislead,5.Seeming,6.Programmed Illusion,7.Mirage Arcane,7.Project Image,9.Weird`,
  "Necromancy" : `C.Chill Touch,1.Inflict Wounds,1.Ray of Sickness,2.Blindness/Deafness,2.Ray of Enfeeblement,3.Bestow Curse,3.Vampiric Touch,4.Blight,5.Contagion,6.Circle of Death,6.Harm,7.Finger of Death`,
  "Transmutation" : `C.Mending,C.Message,C.Prestidigitation,1.Create or Destroy Water,1.Expeditious Retreat,1.Feather Fall,1.Jump,1.Longstrider,2.Barkskin,2.Darkvision,2.Enhance Ability,2.Enlarge/Reduce,2.Heat Metal,2.Levitate,2.Magic Weapon,2.Spider Climb,2.Spike Growth,3.Blink,3.Fly,3.Gaseous Form,3.Haste,3.Meld into Stone,3.Slow,3.Water Walk,4.Control Water,4.Fabricate,4.Polymorph,4.Stone Shape,5.Animate Objects,5.Awaken,5.Passwall,5.Telekinesis,6.Disintegrate,6.Flesh to Stone,6.Move Earth,6.Wind Walk,7.Etherealness,7.Regenerate,7.Reverse Gravity,8.Control Weather,9.Shapechange,9.Time Stop,9.True Polymorph`
}

const FACTIONS = { 
  "cobaltCrane" : {
    "name" : "Cobalt Crane",
    "guild" : true,
    "text" : ``,
    "schools" : ["Enchantment","Evocation"]
  },  
  "ironHorse" : {
    "name" : "Iron Horse",
    "guild" : true,
    "text" : `Strong defenders with a shadowy side.`,
    "schools" : ["Abjuration","Transmutation"]
  },
  "jadeFox": {
    "name" : "Jade Fox",
    "guild" : true,
    "text" : ``,
    "schools" : ["Conjuration","Divination","Illusion"]
  }, 
  "mercuryTiger": {
    "name" : "Mercury Tiger",
    "guild" : true,
    "text" : `Adaptive.`,
    "schools" : ["Transmutation","Illusion"]
  },  
  "rubyPhoenix": {
    "name" : "Ruby Phoenix",
    "guild" : true,
    "text" : `Raw power.`,
    "schools" : ["Evocation","Necromancy"]
  }, 
  "dragons": {
    "name" : "Blood of Tiamat",
    "text" : `Distinct clans of dragons who love to amass power and subjugate all those they encounter.`
  }, 
  "starHive": {
    "name" : "Star Hive",
    "text" : `Giant monsters that devour entire planets in order to reproduce.`
  }, 
  "blackFlame": {
    "name" : "Blackflame",
    "text" : `Giants devoted to burning the Known Universe to the ground.`
  }, 
  "crimsonKhans": {
    "name" : "Crimson Khans",
    "text" : `Robot conquerors whose desire is to bring the Universe under their iron rule.`
  }, 
  "shadowSteel": {
    "name" : "Shadowsteel Syndicate",
    "text" : `Roving pirates.`
  }
}

const HTML = `
<div class="m-1 p-1" align="left">
    <div class="border m-1 p-1" align="left" v-for="f in factions">
        <h2>{{f.name}}</h2>
        <span v-if="f.guild" class="font-sm"><bi>Guild</bi></span>
        <div v-html="f.text"></div>
    </div>
</div>
`

const arraySortAlpha = (a, b, id) => {
    var textA = a[id].toUpperCase();
    var textB = b[id].toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
}

/* 
UI 
*/
const UI = (app)=>{
  app.guilds = Object.values(FACTIONS).filter(f => f.guild)
    .map(g => {
      let SBR = [[],[],[],[],[],[],[],[],[],[]]
      
      //create the list of spells 
      let spells = g.schools.reduce((all,s)=>{
        //push all spells from a school
        all += SCHOOLS[s] + ","
        return all 
      },"").split(',').filter(s=> s.length>0).map(s=>s.split("."))

      spells.forEach(s => {
        if(s[0]=="C") SBR[0].push(s)
        else if(s[0]=="1") SBR[1].push(s)
        else if(s[0]=="2") SBR[2].push(s)
        else if(s[0]=="3") SBR[3].push(s)
        else if(s[0]=="4") SBR[4].push(s)
        else if(s[0]=="5") SBR[5].push(s)
        else if(s[0]=="6") SBR[6].push(s)
        else if(s[0]=="7") SBR[7].push(s)
        else if(s[0]=="8") SBR[8].push(s)
        else if(s[0]=="9") SBR[9].push(s)
      })

      SBR.forEach(s => s.sort((a,b)=> arraySortAlpha(a,b,1)))
      g.spellsByRank = [SBR[0].concat(SBR[1]),SBR[2].concat(SBR[3]),SBR[4].concat(SBR[5]),SBR[6].concat(SBR[7]),SBR[8].concat(SBR[9])]

      return g 
    })

  Vue.component("factions",{
    template: HTML,
    data: function() {
      return {
        factions : Object.values(FACTIONS),
      }
    },
    mounted() {
    },
  })

}

export {UI}
