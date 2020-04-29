import {factions as FACTIONS} from "../factions/factions.js"
import {GEAR as fGear, GEARABV} from "../factions/gear-fitd.js"
import {FORCES} from "../factions/forces-fitd.js"

//handle faction specific information
let factions = FACTIONS.map(F => {
  let forces = FORCES[F.id] ? [[],[],[],[],[]] : null
  if(FORCES[F.id]) {
    FORCES[F.id].forEach(f => forces[f[0]-1].push(f))  
  }
  
  return {
    name : F.name,
    gear : fGear[F.id],
    forces 
  }
})


import {PCPLAYBOOKS,CREWPLAYBOOKS,GEAR,BONDS,CREWUPGRADES,PERSONNEL,PLANS,UNIVERSALADV} from "./playbooks.js"

const ABOUT = `
<div class="p-1 m-1" align="left">
  <p>This is a Forged in the Dark adaptation of Planescape style guild intrigue and planehopping adventure.
  Your characters are not ruffians or rogues but brave entrepreneurs (*adventurers*) who have just established 
  their own guild. You will perform jobs to grow the guild and its reputation.  
  </p>
  <p>It draws heavily on <em>Blades in the Dark</em>, but also <em>Wicked Ones</em>, and the <em>Typhoon Atolls</em></p>

  <h2>Basics</h2>
  <div class="m-1 p-1">
    <p>The majority of the core FitD rules remain the same - with the exception of adding luck. </p>
    <h4>Luck</h4>
    Add luck to your crew when you roll a 6 or critical on a risky action and you didn't spend luck on a bonus die. 
    You can spend luck in place of stress - one for one [<em>credit: Scum & Villainy</em>]. 
  </div>

  <h2>Characters</h2>
  <div class="m-1 p-1">
    <button class="btn btn-light btn-block mb-2" type="button" data-toggle="collapse" data-target="#standardGear">
      <h3 class="m-0" align="left">Gear</h3>
    </button>
    <div id="standardGear" class="px-2 collapse">
      <h4 align="left">Standard Gear</h4>
      <div v-for="g in gear">
        <bi>{{g[0]}}:</bi> {{g[1]}} [{{g[2]}} load]
      </div>  
      <h4 class="mt-2" align="left">Faction Gear</h4>
      <div class="container table-gen mb-2" align="center">
        <div class="row table-gen">
          <div class="col" align="left">Name</div>
          <div class="col">Tier</div>
          <div class="col">What</div>
          <div class="col">Load</div>
          <div class="col" align="left">Tags</div>
        </div>
        <div v-for="f in factions">
          <div class="row table-gen" v-if="f.gear">
            <div class="col" align="left">{{f.name}}</div>
          </div>
          <div class="row table-gen" v-for="g in f.gear">
            <div class="col" align="left">{{g[2]}}</div>
            <div class="col">{{g[0]}}</div>
            <div class="col">{{gearAbv[g[1]]}}</div>
            <div class="col">{{g[3]}}</div>
            <div class="col" align="left"><span v-if="g[4]">{{g[4].split(',').join(', ')}}</span></div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(p,i) in playbooks">
      <button class="btn btn-light btn-block" type="button" data-toggle="collapse" :data-target="'#pb-'+i">
        <h3 class="m-0" align="left">{{p.name}}</h3>
      </button>
      <div :id="'pb-'+i" class="collapse px-2">
        <h5>Abilities</h5>
        <div v-for="a in p.abilities" class="px-2"><bi>{{a.name}}:</bi> {{a.text}}</div>
        <h5>Gear</h5>
        <div v-for="g in p.gear" class="px-2">{{g.name}} [{{g.load}} Load]</div>
      </div>
    </div>
  </div>

  <h2>Guilds</h2>
  <div class="m-1 p-1">
    <p>Your guild is your crew. It isn't a secretive band (unless you choose the Shadows), but an intentionally public one. 
    Part business, part society, your goal is to make it thrive so that everyone in the Outlands 
    knows its name and seeks its services. Each guild has a selection of services, what does yours specialize in?  
    </p>
    <p>
      When creating your guild, select a shard where its headquarters is located. 
      It always starts as a small affair, but through hard work it will grow. 
      To do this you will make advancements – a collection of experience, special processes, 
      buildings, and networked connections. Establishing an advancement takes time and resources. 
      Time is the easiest factor – every advancement requires a long term project that has a clock with 8 segments. 
      The resource half is the complicated part, it takes more than coin, and may require specialized tools, 
      knowledge and/or personnel. The only way to obtain these key resources is by doing a job to obtain them. 
      Work with the GM on what is required.      
    </p>
    <p>
      Turf is an important advancement open to all guilds. At its most basic it represents that your guild has expanded to another shard – the job you perform will determine where. Once you have more turf it is up to you and the GM to determine where new advancements are located. That will help the GM to develop the story and potential jobs for the guild. However, turf also represents more than physical territory – clientele, areas of expertise, goods, etc – and each guild describes what its turf may represent.
    </p>

    <button class="btn btn-light btn-block mb-2" type="button" data-toggle="collapse" data-target="#personnel">
      <h3 class="m-0" align="left">Personnel</h3>
    </button>
    <div id="personnel" class="px-2 pb-2 collapse">
      <p>
        Your personnel is group or an expert who works for your crew. Groups are just that, a number of individuals that have a limited skill set – they have 1d in two actions (they have a quality of 1). You can depend upon them to get their job done, most of the time. The power of a groups is their scale – their scale is equal to your guild’s tier. Use their scale to your advantage when working for effect. An expert is a single individual who has a focused skill set, they have two actions, but their quality is equal to your guild’s tier+1. When your guild’s tier changes – either up or down – the scale of your groups and rank of your expert’s change accordingly.
      </p>
      <p>
        You obtain personnel just like any other advancement – through time (a long term project clock) and resources (i.e. a job). However, some guilds have other advancements that allow them to recruit certain personnel without either the time/job requirement.
      </p>
      <p>
        When creating personnel, select the two actions that they specialize in. These are the only two that they have (unless you choose the versatile edge), and they roll 0d for all other actions that they take. As an optional step, you may give them up to two edges and an equal number of flaws.
      </p>

      <div><bi>Edges</bi></div>
      <ul>
        <li><b>Loyal:</b> The personnel can't be bribed or turned against you.</li>
        <li><b>Independent:</b> The personnel can be trusted to make good decisions in the absence of orders and act on their own initiative.</li>
        <li><b>Proactive:</b> The personnel can perform one downtime activity.</li>
        <li><b>Tenacious:</b> The personnel won't be deterred from a task.</li>
        <li><b>Versatile:</b> Gain two more skilled actions of your choice.</li>
      </ul>
      <div><bi>Flaws</bi></div>
      <ul>
        <li><b>By The Book:</b> The personnel has an ethic or values that it won't betray.</li>
        <li><b>Overzealous:</b> The personnel is excessive in their responses.</li>
        <li><b>Unreliable:</b> The personnel isn't always available, due to other obligations, stupefaction from their oastimes, etc.</li>
        <li><b>Wild:</b> The personnel is drunken, debauched, or loud-mouthed.</li>
      </ul>

      <h5>Using Personnel</h5>
      <p>When you send personnel to achieve a goal, roll their quality to see how it goes.
      Or, a PC can oversee the maneuver by leading a group action. If you direct the
      personnel with orders, roll Command. If you participate in the action alongside
      them, roll the appropriate action. The quality of any opposition relative to
      the personnel’s quality affects the position and effect of the action.</p>

      <h5>Harm & Healing</h5>
      Personnel suffer harm similarly to PCs. Personnel can suffer four levels of harm:
      <div class="px-2">
        <b>1. Weakened.</b> The personnel has reduced effect.
        </br><b>2. Impaired.</b> The personnel operates with reduced quality (-1d).
        </br><b>3. Broken.</b> The personnel can’t do anything until they recover.
        </br><b>4. Dead.</b> The personnel is destroyed.
      </div>
      <p>All of your personnel heal during downtime. If circumstances are amenable for
      recovery, each personnel removes one level of harm (or two levels of harm instead,
      if a PC spends a downtime activity helping them recuperate).</p>
      <p>If personnel is destroyed, it may be replaced. Spend coin equal to your Tier +2
      to restore it, plus two downtime activities to recruit new group members, or hire
      a new expert.</p>
    </div>

    <div v-for="(p,i) in crews">
      <button class="btn btn-light btn-block" type="button" data-toggle="collapse" :data-target="'#crew-'+i">
        <h3 class="m-0" align="left">{{p.name}}</h3>
        <h5 class="mx-1" align="left">{{p.short}}</h5>
      </button>
      <div :id="'crew-'+i" class="collapse px-2">
        <p>{{p.about}}</p>
        <p><bi>Trades:</bi> {{p.xp}}</p>
        <p><bi>Turf:</bi> {{p.turf}}</p>
        <h5>Advancements</h5>
        <div v-for="a in p.advancements" class="px-2"><bi>{{a.name}}:</bi> {{a.text}}</div>
      </div>
    </div>

  </div>

  <h2>Jobs</h2>
  <div class="m-1 p-1">

    <button class="btn btn-light btn-block mb-2" type="button" data-toggle="collapse" data-target="#journeys">
      <h3 class="m-0" align="left">Journeys Between Shards</h3>
    </button>
    <div id="journeys" class="collapse px-2">
      <p>Travelling between two <bi>shards</bi> is never a simple undertaking, there is always danger involved. 
      When undertaking a Journey, create a clock based upon the origin and destination. 
      <ul>
          <li>Are both shards in the same Region? Create a clock with 4 segments.</li>
          <li>Are they both in the same Realm? Create a clock with 8 segments.</li>
          <li>Are they in different Realms, but connected by a Way? Create a clock with 12 segments.</li>
      </ul>
      Now modify the clock by asking the following questions:
      <ul>
          <li>If they are in the same Realm, does a <bi>way</bi> connect the two? Fill half the segments.</li>
          <li>Else if they are in the same Realm, does the destination have a <bi>way</bi> to another shard? Fill 1 segment.</li>
          <li>Have <em>half or more</em> of the heroes visited the destination before? Fill half the segments.</li>
          <li>Do you have up to date information on the destination? Fill 1 segment.</li>
      </ul>
      If you fill all the segments of the clock, you can travel to your destination shard without any danger. 

      <h4>Challenges and Progress</h4>
      <p>You make progress towards the destination by facing challenges. Think about it like a montage of action scenes 
      portraying the various challenges that the heroes face: making an ascent through a high pass, finding a route across
      a ravine, or facing a surprise threat - dangeous beasts, faction trouble, etc. Decide whether it is a challenge for one, 
      a couple, or all of the heroes. If all the heroes must face the challenge, it is the perfect opportunity for a 
      teamwork roll. The result of the roll determines how much progress is made.</p>

      <ul>
          <li>Critical: Gain 3 progress.</li>
          <li>Success: Gain 2 progress.</li>
          <li>Mixed: Gain 1 progress.</li>
          <li>Failure: You do not gain any progress.</li>
      </ul>

      You may spend progress in the following ways:
      <ul>
          <li>Tick the Journey Clock: fill it one for one.</li>
          <li>Rest: Everyone may erase 2 Stress.</li>
          <li>Recouperate: Everyone may reduce one Harm by one Level.</li>
      </ul>
      Once you fill all the segments of the journey clock, you arrive at your destination shard. 
    </div>

    <button class="btn btn-light btn-block mb-2" type="button" data-toggle="collapse" data-target="#plans">
      <h3 class="m-0" align="left">Planning & Engagement</h3>
    </button>
    <div id="plans" class="collapse px-2">
      Engagement remains the same. The plans that a crew can use are as follows:
      <ul>
          <li v-for="p in plans"><bi>{{p[0]}}.</bi> {{p[1]}}</li>
      </ul>
    </div>

  </div>

  <h2>Faction Forces</h2>
  <div class="m-1 p-1">
    <div v-for="(f,i) in factions" v-if="f.forces">
      <button class="btn btn-light btn-block" type="button" data-toggle="collapse" :data-target="'#ff-'+i">
        <h3 class="m-0" align="left">{{f.name}}</h3>
      </button>
      <div :id="'ff-'+i" class="container table-gen collapse my-2" v-cloak>
        <div class="row table-gen">
          <div class="col-2">Name</div>
          <div class="col">About</div>
        </div>
        <div v-for="(tier,j) in f.forces" v-if="tier.length>0">
          <div class="row border border-dark">
            <div class="col" align="center">
              <b>Tier {{j+1}}</b>
            </div>
          </div>
          <div v-for="t in tier" class="row table-gen">
            <div class="col-2">{{t[1]}}</div>
            <div class="col">{{t[2]}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
`
const alphaSort = (a,b) => {
  var textA = a.name.toUpperCase();
  var textB = b.name.toUpperCase();
  return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
}
let playbooks = Object.values(PCPLAYBOOKS).sort(alphaSort)
let crews = Object.values(CREWPLAYBOOKS).sort(alphaSort).map(c => {
  c.advancements = UNIVERSALADV.concat(c.advancements).sort(alphaSort)
  return c 
})

/* 
UI 
*/
const UI = (app)=>{
   

  Vue.component("about",{
    template: ABOUT,
    data: function() {
      return {
        playbooks,
        crews,
        gear : GEAR,
        bonds : BONDS,
        upgrades : CREWUPGRADES,
        personnel : PERSONNEL,
        plans : PLANS,
        factions,
        gearAbv : GEARABV
      }
    },
    methods : {
        show (what) {
            app.UI.main.show = what
        }
    }
  })
}

export {UI}