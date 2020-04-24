import {JOBS} from "./jobs.js"
import {tables} from "./generatorTables.js"
import {data as settingData} from "./shards-core.js"
import * as shardData from "./shards-data.js"
import {regionGen} from "./region-gen.js"

const COSMICHUES = [
  ["Red","Ruby","Charisma, Evocation, Fire, Light"],
  ["Orange","Citrine","Dexterity, Illusion,Summoning, Air, Storm"],
  ["Yellow","Topaz","Strength, Abjuration, Enchantment, Earth"],
  ["Green","Emerald","Constitution, Transmutation, Life, Plants"],
  ["Blue","Sapphire","Intelligence, Divination, Water, Ice"],
  ["Violet",'Amethyst',"Wisdom, Necromancy, Death, Shadow"]
]

const about = `
<div class="m-1 p-2" align="left">
    <h2>Welcome</h2>
        <p>The Outlands is a high adventure science fantasy setting. 
        Our goal was to create a Sword and Planet setting inspired by Planescape 
        but blend in aspects of Star Wars. At is core the Outlands is about 
        shard (*plane*) hopping exploration and adventure across amazing, 
        improbable and varied landscapes inspired by myth and legend.</p>
        <p>The Outlands is a transitive plane created from a cosmic scale 
        shattering of worlds that happened countless ages ago. It enables 
        quick and secretive travel (within days instead of weeks) between 
        the worlds of the far flung galaxies of the Known Universe. Adventure 
        awaits those brave enough to face the shifting nature of the Outlands 
        and navigate its Ways.</p>
        <p>Magic is high technology - it is all present and permeates every 
        facet of daily life. Plots and intrigue abound as cosmically powered 
        entities like elementals, titans, draconic god-wyrms and Byzantine 
        multi-planar factions all compete for power or control. Even with the 
        factions, in general, the Outlands is a wild, untamable, unpredictable 
        and ever shifting wilderness where only the brave venture out from 
        established safe harbors. But for those who know and can learn the Ways, 
        life in the Outlands can be very rich. And the possibilities for heroism 
        are endless, whether it is rescuing a city from the ravages of a leviathan
         kaiju, helping clear a ruin from the Second Cosmic War, or aiding the 
         resistance in their fight against a despotic immortal.</p>
        <p>The Outlands is open to you. What adventures will you create?</p>
    <h3>Thanks</h3>
    <p>This game is only possible because of the hard work of others. It pulls 
    many of its concepts and mechanics from other sources. </p>
    <ul><strong>
        <li>Concept: <em>Planesecape</em></li>
        <li>Pointcrawl: <em>Downcrawl</em></li>
        <li>Generators of all kinds: <em>The Perilous Wilds</em> </li>
        </strong>
    </ul>
    <div class="m-1">
        <button type="button" class="btn btn-block btn-info" @click="show('setting')">Setting</button>
        <button type="button" class="btn btn-block btn-info" @click="show('generators')">Generators</button>
    </div>
</div>
`

const setting = `
<div class="m-1 p-1" align="left">
  <button class="btn btn-light btn-block" type="button" data-toggle="collapse" data-target="#overview">
    <h2 class="m-0" align="left">Overview</h2>
  </button>
  <div id="overview" class="p-1 collapse show">
    <p>The focus of the setting is a mythic point crawl where the heroes seek 
    to discover new shards, the people that inhabit them, and rise to the 
    challenges that they encounter. Running a game on the Outlands requires 
    getting into the right mindset. The following statements should create a basis 
    for all the fiction that you create for your games.</p>    
    <p><strong>The Outlands is vast.</strong></br>
    It is unmappable and infinite. The Outlands is like a mass of soap bubbles 
    floating atop a body of water. While each bubble holds a specific shard of 
    definite size (between 5 and 100 square miles in area), the number of shards 
    is unknown. Navigation is hard, even between familiar waypoints. Rather than 
    a fixed set of races and enemies, there are a boundless number of cultures, 
    powers, and threats.</p>
    <p><strong>The Outlands is challenging.</strong></br>
    Creatures, myths and dreams themselves, and hostile factions roam freely. 
    Regions and shards may morph over time. Distances between shards are 
    indefinite while compasses don’t work. Ways once clear and navigable might
     be lost or twist toward new, unstable destinations. There are few completely 
     safe spaces.</p>
     <p><strong>The Outlands is mythic and weird.</strong></br>
     Take places from myths all over the world (not just the Greek and Norse 
     that most are familiar with), and throw them in a pot. Add a dash of 
     Alice in Wonderland, Lovecraft’s Dream Cycle, Miéville, Spielberg, and 
     Lucas. What happens when myths collide? What does tech so advanced that 
     it may as well be magic look like? People are not just the plethora of 
     humanoid variants but also a myriad of xenospecies, sentient animals, 
     plants, constructs and even living elements. Scenes from stories come 
     alive: courts of fey dancing in the dusk; titanic beasts slumbering in 
     the husks of leveled cities; tombs of forgotten cosmic civilizations; 
     underwater cities/sky palaces/stalactite towers plunging into a luminescent 
     subterranean sea; feral, living forests; and the forgotten ruins of history 
     crumbling before your eyes.    
    <h3>The Map</h3>
    <p>Maps in the Outlands are ephemeral, unstable, and unbounded in terms of 
    direction and dimension. This is a pointcrawl where each point of interest 
    is called a shard, and there are no fixed distances between them. Just 
    because shards share the same region does not mean that they are physically 
    close, nor that there’s easy travel between them. Adjacency is instead 
    represented by the ways that connect them.</p>
    <h3>Realms and Regions</h3>
    <p>In the beginning it is said there was only one realm: the Outlands. All 
    the shards existed within it and travel to all was possible by navigating the 
    ways – some known, but most were secret. Now there are four realms: Outlands, 
    Celestia, Gehenna, and the Underdark, but most still refer to all of the 
    realms collectively as the Outlands. Perhaps the segregation happened through 
    the actions of the cosmics, but no one knows for sure. The reality is that 
    the realm structure complicates travel and it has further segmented the 
    cultures and people. </p>
    <p>Regions are a further delineation within the realms. The shards in a region 
    have similar terrains that creates a theme. Traveling between two locations 
    within a region is also faster than going to another shard within the realm.</p>
    <h3>Ways</h3>
    <p>Shards are not linked by cardinal directions but by shaky and changing routes, 
    nicknamed ways: perhaps temporary, definitely circuitous. Navigating the ways can 
    be perilous because it is very easy to get lost. Outside of the stability 
    provided by a shard’s anchor, directions and distances are meaningless due 
    to the constantly shifting fabric of the Outlands. The more traveled the way, 
    and the more information learned about the destination before setting out, the 
    easier it is to arrive. The locals of a shard often know of a couple ways, but 
    it is possible to be trained to find and navigate “new” ways that are just 
    waiting to be mapped. While old ways might vanish as the heroes adventure and 
    cosmic beings flex their might.</p>
    <p>Navigating between shards is only possible within a realm. For example, 
    one can travel between the City of Shells and Faunel because they are both 
    in the Outlands. But, there are no known ways between Faunel and the City of
    Brass (in Gehenna). And it is highly improbable that the heroes can find/map 
    a new way to link the two. In order to move between realms travelers must go 
    to the specific gateway shards that have established ways.</p> 
    <h3>Shards</h3>
    <p>Shards are the islands of stability within the flux of the Outland’s 
    shifting geography. Its terrain is influenced by the shard’s region, but 
    within it is dominated by a specific anchor, be it cultural, 
    geographical, or biological. An anchor may be a single city, a misty valley, 
    a million branching labyrinth-like chasm, the skeleton of a dead titan, or 
    the forgotten factory of a forgotten cosmic civilization. Outside this a 
    trackless, feral wilderness in a variety of terrains – estuaries, mountain 
    cliffs, swamps, rolling plains - awaits those that dare to leave a shard. </p>
    <p>The Outlands is a wild place - many shards remain undeveloped. Unless 
    a shard has a town or a site, the population will be limited to <1000 people. 
    For every new shard roll on the region’s encounter table - the result is 
    the faction that currently claims it. Even undeveloped shards may be 
    claimed. If the result is “Local”, no faction currently claims the shard. 
    A claim does not mean other factions can’t be found in the shard, but they 
    don’t have a strong enough base to make it theirs. </p>
    <h3>Encounters</h3>
    <p>When in need of an encounter, either on a shard or when using a way, each 
    region provides an encounter table. Simply roll 2d10 and consult the table. 
    Use the table even on undeveloped shards. Assume the result is there for 
    the same reason as the heroes - they are seeking/guarding what the heroes 
    are after. </p>  
    <h3>Resources</h3>
    <p>Shards may be well known or in dire need for various resources. Instead 
    of a detailed list of every mineral type and trinket that a shard 
    produces/needs, resources are lumped into broad categories. Also, resources 
    are not always physical - it could be an issue of manpower or even a 
    cultural state of mind. </p>
    <p>Possible resources include: Artisans, Barter Goods, Crops, Defenses, 
    Energy, Engineering, Fresh Water, Justice, Land, Leadership, Luxury, 
    Medicine, Morale, Prestige, Scholars, Rare Materials, Recruits, Safety, 
    Scouts, Spies, Trade, Transport, Warriors, and Wealth.</p>
    <h3>Trouble </h3>
    <p>Trouble is what drives adventure. A shard may have any number of 
    troubles that heroes can opt to challenge to win the hearts and minds of 
    the locals. Trouble will be a short description, a level and a number of 
    challenges. Once the heroes have had a number of encounters corresponding 
    to the challenges the trouble is defeated.  </p>
    <p>Challenges types include: Build, Convince, Discover, Endure, Fight, 
    Prowl, and Research. </p>
    <h3>Tech</h3>
    <p>The tech available is a mish-mash of relics, local manufacture, and 
    new cosmic tech (nicknamed c-tech) from the Outside. Local manufacturing 
    across the Outlands is capable of producing gear a little more advanced 
    than modern day. While c-tech is equivalent to what is seen in the Star Wars 
    franchise. Relics are unique pieces from before the Cosmic War that grant 
    supernatural powers. C-tech is rare and relics are very rare and both draw 
    attention to their owners. Shards with a large faction presence have more 
    cosmic level tech in use and available than the rest.</p>
  </div>
  <realm v-for="R in realms" :realm="R"></realm>
</div>
`

const realm = `
<div align="left">
  <button class="btn btn-light btn-block" type="button" data-toggle="collapse" :data-target="'#'+realm.id">
    <h2 class="m-0" align="left">{{realm.name}}</h2>
  </button>
  <div :id="realm.id" class="p-1 collapse border border-light">
    <div v-html="realm.info"></div>
    <region v-for="R in realm.children" :region="R"></region>
  </div>
</div>
`

const genTables = {}
for(let x in tables) {
    let T = tables[x]

    //create one row with sub columns
    let row = T.data.map(data => {
        //start column - loop through sub rows in column 
        let col = data.map(d=> {
            //start sub row 
            let subrow = d.map((sub,j) => {
                let span = j == 1 ? `<span align="right"` : `<span`
                let nowrap = j == 0 && sub.includes("-") ? ` style="white-space: nowrap;"` : ""
                span += nowrap+">"
                return span + sub+`</span>`
              }).join("")
            
            //end subrow 
            return `<div class="d-flex justify-content-between p-1">`+subrow+`</div>`
          }).join("")   
        
        //end row
        return `<div class="col table-gen">`+col+`</div>`
    }).join("")
    
    genTables[x] = `<div class="container mb-2"><div class="row">`+row+`</div></div>`
}



const generators = `
<div class="m-1 p-1" align="left">
    <h2>Generators</h2>
    <p>Generators help you detail and populate the Outlands. These generators focus on a shard’s anchor. Follow the guidelines of each region to generate the terrain and anchor type of the shard, and then use these generators to further define the anchor. </p>
    
    <div class="border p-1 m-1">
    <h3>Town</h3>
    <p>Towns are centers of Outlands population. They are compact and built vertically - there are very few sprawling suburban neighborhoods due to the area constraints of the shards. Shards with a town have little unclaimed space and anything without a building is a park or farm for the locals.</p>
    <p>Their inhabitants and styles are as varied as the Outlands itself. Even in small towns can have 1d4+1 different people groups, and cities are full of a myriad of people groups. Architecture is often a blend just like the people, but a town that has a large faction presence will feature their styles.</p>
    <p>Determine who claims the town by rolling on the realm’s Encounter table. If Local is rolled, the final result is always People. Next, determine the size of the city by rolling a d12 and consulting the list below. </p>
    <p>Size (d12): 1-2 Small Town (<10,000), 3-8 Mid-sized Town (<200,000), 9-11 City (<2 million), 12 Mega-city (2+ million)</p>
    <p>Now roll a d6, on an even result the city actually dates back to before the Second Cosmic War. These towns often have sites (or even ruins) from before the Shattering. </p>
    </div>
    
    <div class="border p-1 m-1">
    <h3>Terrain</h3>
    <p>When the terrain is the anchor, the shard features an impressive or unique terrain feature. Make it grand, mythic, or weird. It isn’t just a mountain - its a mountain split in two by a massive orbital strike. A forest is one where the trees drip starlight.</p>
    <p>Roll 2d12: the first d12 determines its category - go to that column, while the second describes the subcategory - go to that row. Take the shard’s terrain into account when creating the feature. </p>
    <div align="center"><h4>Terrain Generator<h4></div>
    `+genTables.terrain+`
    </div>

    <div class="border p-1 m-1">
    <h3>Site</h3>
    <p>Sites are focal points of Outlands civilization. They are not towns, but they see regular visitors, and they may even be inhabited all the time (the population limit is ~2000). </p>
    <p>Roll 2d12+1d6 to determine why the site is important. The first d12 determines its category - go to that column, while the second describes the subcategory - go to that row. If the d6 is even the site actually dates back to before the Second Cosmic War and the Shattering.</p>
    <div align="center"><h4>Site Generator<h4></div>
    `+genTables.site+`
    </div>

    <div class="border p-1 m-1">
    <h3>Lair</h3>
    <p>Lairs are places where danger lurks. This danger may not be currently hostile towards the heroes, or it could be slumbering. Alternatively it could be a place filled with beasts dripping venom and ready to tear any intruder apart.  </p>
    <p>This table can be used in two different ways: either roll 2d12 and consult the table below. Or roll on the realm’s encounter table - to determine who the lair belongs to - and then roll a d12 and consult the appropriate row. If a ruin result is rolled - the beings have taken up residence in a ruin - use the ruin generator below.</p>
    <div align="center"><h4>Lair Generator<h4></div>
    `+genTables.lair+`
    </div>

    <div class="border p-1 m-1">
    <h3>Ruin</h3>
    <p>Ruins are the remnants of the uncountable worlds before they were shattered. Almost all of the worlds were advanced cosmic societies - shape the ruins accordingly. Huge bridges, shattered skyscrapers, sprawling overgrown universities, abandoned quantum widget factories. Think big, once glittering and majestic, and tech so advanced that it seems like magic. </p>
    <p>Roll 2d12+1d4: the first d12 determines its category - go to that column, while the second describes the subcategory - go to that row. If the d4 is a 4 the ruin is a “dungeon” it has sunk/been covered and most of it is located underground. </p>
    <p>If the shard is the ruin of a town, it will be a huge and sprawling site - today a mid sized town can easily be over the 100 sq mi cap of a shard. Heroes could easily find 1d4+1 ruined structures/sites on the shard. The size of the town flavors the type of structures that may be found. Roll as above, but use 1d10+1d12+1d4 - the d10 determines the category/column.</p>
    <div align="center"><h4>Ruin Generator<h4></div>
    `+genTables.ruin+`
    </div>

    <div class="border p-1 m-1">
    <h3>People</h3>
    <p>People is a general word to describe any sentient, thinking being. The form people take is varied and, thanks to cosmic influence, does not have to follow natural biology.</p>
    <p>Roll 2d12 and consult the table below. The first d12 determines whether the people are elemental, robotic or biological. The second d12 determines the form they take. Elemental people are either living elements that take a particular form (biological/construct) or a biological being that has elemental traits. For all elemental people roll on the Element table to determine their element. Construct people are sentient beings constructed by another - these could be far future robots or mystic golems. They are definitely not biological and look artificial - even if they have a biological form. Biological people are beings comprised of living cells - a living being as we know it. Biologics can take many forms - from completely bland humans to sentient turkey-squirrels with telekinetic powers.</p>
    <div align="center"><h4>People Generator<h4></div>
    `+genTables.people+`
    <p>Now determine their size (d12): 1-3 Small, 4-9 Medium, 10-11 Large, 12 Huge. 
    </br>Humanoid examples: human, elf, dwarf, orc, ogre, goblin, klingon, vulcan, etc. 
    </p>
    </div>

    <div class="border p-1 m-1">
    <h3>Beasts</h3>
    <p>Roll 2d12 and consult the table below. The first d12 determines the natural habitat and the second determines the general form. Use this as a base and make it unique/weird/mythic.</p>
    `+genTables.beast+`
    <p>Now determine their size (d12): 1 Tiny, 2-3 Small, 4-9 Medium, 10-11 Large, 12 Huge. </p>
    <p>Modifications can be made:
    <ul>
        <li>Hybrid: Roll twice and combine results</li>
        <li>Chimera: Roll three times</li>
        <li>Elemental: Element + Beast </li>
        <li>Draconic: Snake/Lizard/Bat + Beast + Element + Large/Huge</li>
    </ul>
    </p>
    </div>

    <div class="border p-1 m-1">
    <h3>Details</h3>
    <p>Extra details that can be added to any of the above generators to make them unique. The other generators may also refer to the table below by their column heading. </p>
    `+genTables.element+`
    `+genTables.magic+`
    `+genTables.aspect+`
    <p></p>
    </div>

    <div class="border p-1 m-1">
      <h3>Jobs</h3>
      
      <h4 align="center">Client/Target</h4>
      <div class="container table-gen" align="center">
        <div class="row">
          <div class="col table-gen" v-for="type in jobs.clients">
            <div v-for="c in type">{{c}}</div>
          </div>
        </div>
      </div>

      <h4 class="mt-2" align="center">Work</h4>
      <div class="container table-gen" align="center">
        <div class="row">
          <div class="col table-gen" v-for="type in jobs.work">
            <div v-for="w in type">{{w}}</div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>
`




const region = `
<div class="m-1 p-1" align="left">
    <h3 class="region">{{region.name}}</h3>
    <div v-html="region.info"></div>
    <div v-if="tables.shard">
        <h5 align="center">{{region.name}} Generators</h5>
        <div v-html="tables.shard" ></div>
        <h5 align="center">Encounters (2d10)</h5>
        <div v-html="tables.enc"></div>
    </div>
    <shard v-for="S in region.children" :shard="S"></shard>
</div>
`

const shard = `
<div class="m-1 p-1" align="left">
    <h4 class="bg-light rounded">{{shard.name}}</h4>
    <div class="font-sm p-1 font-weight-bold">
        <div>{{terrain}}, {{climate}}, {{rain}}</div>
        <div>{{anchor}}</div>
    </div>
    <div v-html="shard.info"></div>
    <div v-html="shard.special" v-if="shard.special"></div>
</div>
`

const forces = `
<div class="m-1 p-1" align="left">
    <div class="container table-gen" align="center">
        <div class="row table-gen">
            <div class="col" align="left">Name</div>
            <div class="col">HD</div>
            <div class="col">AC</div>
            <div class="col">ATK</div>
            <div class="col">DMG</div>
            <div class="col">Morale</div>
            <div class="col">Move</div>
        </div>
        <div v-for="(f,i) in forces" class="row table-gen">
            <div class="col" align="left">{{f.name}}</div>
            <div class="col">{{f.HD}}</div>
            <div class="col">{{f.AC}}</div>
            <div class="col">{{f.atk}}</div>
            <div class="col">{{f.dmg}}</div>
            <div class="col">{{f.ml}}</div>
            <div class="col">{{f.mv}}</div>
        </div>
    </div>
</div>
`


/* 
UI 
*/
const UI = (app)=>{
  
  Vue.component("about",{
    template: about,
    methods : {
        show (what) {
            app.UI.main.show = what
        }
    }
  })

  Vue.component("generators",{
    template: generators,
    data: function() {
      return {
        jobs : JOBS
      }
    },
  })
  Vue.component("realm",{
    template: realm,
    props : ["realm"]
  })
  Vue.component("region",{
    template: region,
    props : ["region"],
    computed : {
        tables () {
            let rG = regionGen[this.region.id]
            return {
                shard : rG ? rG.shardTable : null,
                enc : rG ? rG.encTable : null
            }
        }
    }
  })
  Vue.component("shard",{
    template: shard,
    props : ["shard"],
    computed : {
        rct () { return this.shard.rct.split(".") }, 
        rain () { return shardData.CLIMATE.rain[this.rct[0]-1]  },
        climate () { return shardData.CLIMATE.climate[this.rct[1]-1]  },
        terrain () { return shardData.TERRAINS[this.rct[2]-1]  },
        anchor () { 
            let a = shardData.ANCHORS[this.shard.anchor-1].split(".")
            return a.length == 2 ? a.join(", ") : [a[0],a[1]].join(" - ") +", "+ a[2]
        },
    }
  })
  Vue.component("setting",{
    template: setting,
    data: function() {
      return {
        realms : [],
      }
    },
    mounted() {
      this.realms = settingData.slice()
    },
  })

  Vue.component("forces",{
    template: forces,
    data: function() {
      return {
        forces : [],
      }
    },
  })

}

export {UI}

