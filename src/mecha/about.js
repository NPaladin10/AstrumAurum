import * as frameStats from "./frame-stats.js"

const STATS = [
  ['Chassis','raw strength and physical durability.'],
  ['Agility','mobility and dexterity.'],  
  ['Systems','electronic system’s capability.'], 
  ['Power','the power output of the mecha’s power systems.'] 
]

const ABOUT = `
<div class="p-1 m-1" align="left">

  <p>Astrum Mecha is a “quick” reskin of D&D 5e that imagines mecha as fighters enhanced with spellcasting ability. 
  The goal is to emulate the giant fighting robots genre, not the battletech style of play. </p>

  <h2>Building a Mecha</h2>
  <h3>Stats</h3>
  <p>A mech has only four stats: 
  <ul>
    <li v-for="s in stats"><bi>{{s[0]}}</bi> - {{s[1]}}</li>
  </ul>
  </p>

  <h3>Step By Step Build</h3>
  <ol>
    <li>Buy stats: You get to spend 18 points as per standard point buy rules.</li>
    <li>Select level:  All mecha have the class abilities of a fighter. 
    The table below is provided for simplicity and helping in your builds. </li>
    <li>Select a fighting style: As per the fighter class - you get to select a fighting
    style to specialize in.</li>
  </ol>
  
  <div align="center"><h4>Frame Capability<h4></div>
  <div class="container table-gen" align="center">
    <div class="row table-gen">
      <div class="col">Level</div>
      <div class="col">Cost</div>
      <div class="col">Bonus</div>
      <div class="col">HP</div>
      <div class="col">Ability</br>Boosts</div>
      <div class="col"># Attacks</div>
      <div class="col">Save</br>Reroll</div>
      <div class="col">Surge</div>
    </div>
    <div v-for="l in levels" class="row table-gen">
      <div class="col">{{l.lv}}</div>
      <div class="col">{{l.cost}}</div>
      <div class="col">{{l.b}}</div>
      <div class="col">{{l.hp}}</div>
      <div class="col">{{l.nability}}</div>
      <div class="col">{{l.natks}}</div>
      <div class="col">{{l.reroll}}</div>
      <div class="col">{{l.nsurge}}</div>
    </div>
  </div>

  <div class="container">
    <b>Bonus:</b> The proficiency bonus that you get to add to your rolls.
    </br><b>HP:</b> The base HP that your mecha has. Add your level times you Chassis modifer to determine your HP total.
    </br><b>Ability Boosts:</b> for each boost you can increase
      one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As
      normal, you can’t increase an ability score above 20 using this feature.
    </br><b># Attacks:</b> If you take an attack action, this is the # of attacks you can make.
    </br><b>Save Reroll:</b> You can reroll a number of saving throws that you fail. If you do so, you must use the new
      roll. When you finish a long rest this number resets.
    </br><b>Surge:</b> You can push yourself beyond your normal limits for a moment. On your turn,
      you can take one additional action on top of your regular action and a possible bonus action.
      You can use this a listed number of times before you must finish a short or long rest. 
  </div>

  <div class="px-1 mt-3">
    <h4>Fighting Styles</h4>
    <ul>
      <li><bi>Marksman -</bi> You gain a +2 bonus to attack rolls you make with ranged weapons.</li>
      <li><bi>Defense -</bi> While you are wearing armor, you gain a +1 bonus to AC.</li>
      <li><bi>Dueling -</bi> When you are wielding a melee weapon in one hand and no other weapons, 
        you gain a +2 bonus to damage rolls with that weapon.</li>
      <li><bi>Great Weapon Fighting -</bi> When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are
        wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or
        a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.</li>
      <li><bi>Protection -</bi> When a creature you can see attacks a target other than you that is within 5 feet of you, you can use
        your reaction to impose disadvantage on the attack roll. You must be wielding a shield.  
      <li><bi>Two-Weapon Fighting -</bi> When you engage in two-weapon fighting, you can add your ability modifier to the damage of the
        second attack.</li>
    </ul>
  </div>

  <div class="px-1">
    <h4>Abilities</h4>
    <p>All mecha have the following abilities.</p>
    <bi>Second Wind</bi>
    <p>You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn,
    you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this
    feature, you must finish a short or long rest before you can use it again.
    </p>
  </div>

  <h3>Quantum Rigging</h3>
  <p>While frames are built on the fighter class, a mecha’s quantum rigging is what sets them apart. 
    This rigging has a separate level and cost from that of the basic frame. Quantum rigging 
    gives the mecha spellcasting capabality - effectively making each mecha a multiclass fighter/wizard
    to some degree. A mecha does not gain any further abilities from the wizard class beyond spellcasting.
  </p>
  <p>As long as a mecha has one level of rigging, their system can store (*memorize*) and use spells. The total number of
    levels of spells that a mecha can store is its Total Levels. While the maximum spell level that it 
    can use is determined by its Max Level.   
  </p>
   
  <div align="center"><h4>Quantum Stats<h4></div>
  <div class="container table-gen" align="center">
    <div class="row table-gen">
      <div class="col">Level</div>
      <div class="col">Power Points</div>
      <div class="col">Total Levels</div>
      <div class="col">Max Level</div>
    </div>
    <div v-for="(l,i) in qStats" class="row table-gen">
      <div class="col">{{i+1}}</div>
      <div class="col">{{l[1]}}</div>
      <div class="col">{{l[2]}}</div>
      <div class="col">{{l[0]}}</div>
    </div>
  </div>

  <div class="container">
    </br>Power points - Fuel casting spells and limits how many spells a mecha can use before taking a long rest. 
      Each spell level costs a certain amount based upon the table. 
    </br>Power levels - When selecting spells for a mecha add up all the levels (counting cantrips as level 1/2). 
      The total cannot excede this number.  
    </br>Max level - The maximum spell level that the mecha can store and use.  
  </div>

  <div class="container mt-3" align="left">

    <p>The spells available to your mecha depends upon your ranks in the various guilds.</p>

    <div align="center"><h4>Spells by Guild<h4></div>  
    <div v-for="g in guilds" align="center">
      <div class="row table-gen">
        <div class="col"><h5>{{g.name}}</h5></div>
      </div>
      <div class="row table-gen">
        <div class="col font-weight-bold">Rank 1</div>
        <div class="col font-weight-bold">Rank 2</div>
        <div class="col font-weight-bold">Rank 3</div>
        <div class="col font-weight-bold">Rank 4</div>
        <div class="col font-weight-bold">Rank 5</div>
      </div>
      <div class="row table-gen">
        <div class="col" v-for="r in g.spellsByRank">
          <div v-for="s in r">{{s[1]}} [{{s[0]}}]</div>
        </div>
      </div>
    </div>

  </div>
  
</div>
`
/* 
UI 
*/
const UI = (app)=>{

  let levels = d3.range(20).map(i=> frameStats.stats(i+1))
  let guilds = app.guilds
  guilds.forEach(g => {
    let s = g.spellsByRank.flat()
    console.log(g.name,s.length)
  })

  Vue.component("about",{
    template: ABOUT,
    data: function() {
      return {
        levels,
        stats : STATS,
        qStats : frameStats.POWERCORE,
        guilds 
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