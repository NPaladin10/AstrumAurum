import {PCPLAYBOOKS,CREWPLAYBOOKS,GEAR,BONDS,CREWUPGRADES,PERSONNEL,PLANS} from "./playbooks.js"
import {FACTIONS,HTML as FACTIONHTML} from "./factions.js"

const ABOUT = `
<div class="p-1 m-1" align="left">
  <p>This is a Forged in the Dark adaptation of Planescape style planehopping adventure.</p>

  <h2>Basics</h2>
  <div class="m-1 p-1">
    <h4>Gambits</h4>
    Add a gambit to your crew when you roll a 6 or critical on a risky action and you didn't spend a gambit on a bonus die.
  </div>

  <h2>Playbooks</h2>
  <div class="m-1 p-1">
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
    <button class="btn btn-light btn-block mt-2" type="button" data-toggle="collapse" data-target="#standardGear">
      <h3 class="m-0" align="left">Standard Gear</h3>
    </button>
    <div id="standardGear" class="px-2 collapse">
      <div v-for="g in gear">
        <bi>{{g[0]}}:</bi> {{g[1]}} [{{g[2]}} load]
      </div>  
    </div>
  </div>

  <h2>Crews</h2>
  <div class="m-1 p-1">
    <button class="btn btn-light btn-block" type="button" data-toggle="collapse" data-target="#standardUpgrades">
      <h3 class="m-0" align="left">Common Upgrades</h3>
    </button>
    <div id="standardUpgrades" class="px-2 pb-2 collapse">
      <div v-for="u in upgrades">
        <bi>{{u[0]}}:</bi> {{u[1]}}
        <div class="px-2" v-if="u[2]"><em>{{u[2]}}</em></div>
      </div>  
    </div>

    <button class="btn btn-light btn-block mb-2" type="button" data-toggle="collapse" data-target="#personnel">
      <h3 class="m-0" align="left">Personnel</h3>
    </button>
    <div id="personnel" class="px-2 pb-2 collapse">
      <p>Your personnel is group or an expert who works for your crew. To recruit new personnel, spend two upgrades and create them using the process below.</p>
      <h5>Groups</h5>
      Choose a type from the list below:
      <div v-for="p in personnel">
        <bi>{{p[0]}}:</bi> {{p[1]}}
      </div>
      <p>A group has scale and quality equal to your current crew Tier. It increases in scale and quality when your crew moves up in Tier.
      Some crew upgrades will add the “Elite” feature to a group, which gives them +1d when they roll for a given Type. 
      <em>So, if you’re Tier I and have a group of Elite Soldiers (+1d), they would roll 2d when they try to defend a target.</em></p>
      
      <h5>Experts</h5>
      <p>Record the expert’s type (their specific area of expertise). They might be a Doctor, Alchemist, 
      Bounty Hunter, Spy, Diplomat, etc. An expert has quality equal to your current crew Tier +1. Their scale is always
      zero (1 person). Your experts increase in quality when your crew moves up in Tier.</p>

      <h5>Edges & Flaws</h5>
      When you create personnel, give them one or two edges and an equal number of flaws. 
      <div><bi>Edges</bi></div>
      <ul>
        <li><b>Loyal:</b> The personnel can't be bribed or turned against you.</li>
        <li><b>Tenacious:</b> The personnel won't be deterred from a task.</li>
        <li><b>Stern:</b> The personnel is known for their tough attitude and reputation.</li>
        <li><b>Independent:</b> The personnel can be trusted to make good decisions in the absence of orders and act on their own initiative.</li>
      </ul>
      <div><bi>Flaws</bi></div>
      <ul>
        <li><b>By The Book:</b> The personnel has an ethic or values that it won't betray.</li>
        <li><b>Overzealous:</b> The personnel is excessive in their responses.</li>
        <li><b>Unreliable:</b> The personnel isn't always available, due to other obligations, stupefaction from their oastimes, etc.</li>
        <li><b>Wild:</b> The personnel is drunken, debauched, or loud-mouthed.</li>
      </ul>

      <h5>Modifying Personnel</h5>
      <p>You can add an additional type to a group or expert by spending two crew
      upgrades. When personnel performs actions for which its types apply, it uses its
      full quality rating. Otherwise, its quality is zero. Any personnel can have up to
      two types.</p>

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
      </button>
      <div :id="'crew-'+i" class="collapse px-2">
        <h5>Abilities</h5>
        <div v-for="a in p.abilities" class="px-2"><bi>{{a.name}}:</bi> {{a.text}}</div>
        <h5>Upgrades</h5>
        <div v-for="u in p.upgrades" class="px-2"><bi>{{u[0]}}</bi><span v-if="u[1]">: {{u[1]}}</span></div>
      </div>
    </div>
    <button class="btn btn-light btn-block mt-2" type="button" data-toggle="collapse" data-target="#standardBonds">
      <h3 class="m-0" align="left">Crew Bonds</h3>
    </button>
    <div id="standardBonds" class="px-2 collapse">
      Instead of claims, crews in the Outlands form bonds with communities - lasting connections
      to the people that they help. It is a freeform list - your crew can seek out any bond at any time.
      Creating a bond almost always requires a special mission/job. 
      <div v-for="b in bonds">
        <bi>{{b[0]}}:</bi> {{b[1]}}.
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
      <ul>
          <li v-for="p in plans"><bi>{{p[0]}}.</bi> {{p[1]}}</li>
      </ul>
    </div>

  </div>
  `+FACTIONHTML+`

</div>
`
const alphaSort = (a,b) => {
  var textA = a.name.toUpperCase();
  var textB = b.name.toUpperCase();
  return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
}
let playbooks = Object.values(PCPLAYBOOKS).sort(alphaSort)
let crews = Object.values(CREWPLAYBOOKS).sort(alphaSort).map(c => {
  c.upgrades = c.upgrades.map(u => u.split(":"))
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
        factions : FACTIONS
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