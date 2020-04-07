//  https://codepen.io/retractedhack/pen/gPLpWe  
const STATBLOCK = `
<div>
<div v-for="(frame,i) in allFrames" class="stat-block wide">
  <hr class="orange-border"/>
  <div class="section-left">
    <div class="creature-heading">
      <h1>{{frame.name}}</h1>
      <h2>{{frame.size}} {{frame.type}}</h2>
    </div>
    <!-- creature heading -->
    <svg height="5" width="100%" class="tapered-rule">
      <polyline points="0,0 400,2.5 0,5"></polyline>
    </svg>
    <div class="top-stats">
      <div class="property-line first">
        <h4>Armor Class</h4>
        <p>{{frame.AC.join(', ')}}</p>
      </div>
      <!-- property line -->
      <div class="property-line">
        <h4>Hit Points</h4>
        <p>{{frame.hp}}</p>
      </div>
      <!-- property line -->
      <div class="property-line last">
        <h4>Speed</h4>
        <p>
            <span class="mx-1" v-for="s in frame.speed">{{s}}</span>
        </p>
      </div>
      <!-- property line -->
      <svg height="5" width="100%" class="tapered-rule">
        <polyline points="0,0 400,2.5 0,5"></polyline>
      </svg>
      <div class="abilities abilities-frame">
        <div v-for="a in frame.abilities" :class="a.class">
            <h4>{{a.stat}}</h4>
            <p>{{a.val}} ({{a.b}})</p>
        </div>
      </div>
      <!-- abilities -->
      <svg height="5" width="100%" class="tapered-rule">
        <polyline points="0,0 400,2.5 0,5"></polyline>
      </svg>
      <div class="property-line" v-if="frame.saves">
        <h4>Proficiency Bonus</h4>
        <p>{{frame.PB}}</p>
      </div>
      <div class="property-line" v-if="frame.saves">
        <h4>Saving Throws</h4>
        <p>{{frame.saves.join(', ')}}</p>
      </div>
      <!-- property line -->
      <div class="property-line" v-if="frame.proficiencies">
        <h4>Skills</h4>
        <p>{{frame.skills.join(', ')}}</p>
      </div>
      <!-- property line -->
      <div class="property-line" v-if="frame.proficiencies">
        <h4>Proficiencies</h4>
        <p>{{frame.proficiencies.join(', ')}}</p>
      </div>
      <!-- property line -->
      <div class="property-line first" v-if="frame.damage_resistances">
        <h4>Damage Resistamces</h4>
        <p>{{frame.damage_resistances.join(', ')}}</p>
      </div>
      <!-- property line -->
      <div class="property-line first" v-if="frame.damage_immunities">
        <h4>Damage Immunities</h4>
        <p>{{frame.damage_immunities.join(', ')}}</p>
      </div>
      <!-- property line -->
      <div class="property-line" v-if="frame.condition_immunities">
        <h4>Condition Immunities</h4>
        <p>{{frame.condition_immunities.join(', ')}}</p>
      </div>
      <!-- property line -->
      <div class="property-line" v-if="frame.senses.slice(1).length > 0">
        <h4>Senses</h4>
        <p>
          <span class="mx-1" v-for="s in frame.senses.slice(1)">{{s.join(' ')}}</span>
        </p>
      </div>
      <!-- property line -->
      <div class="property-line">
        <h4>Perception</h4>
        <p>{{frame.senses[0]}}</p>
      </div>
      <!-- property line -->
      <div class="property-line last" v-if="frame.CR">
        <h4>Challenge</h4>
        <p>{{frame.CR}}</p>
      </div>
      <!-- property line -->
    </div>
    <!-- top stats -->
    <svg height="5" width="100%" class="tapered-rule">
      <polyline points="0,0 400,2.5 0,5"></polyline>
    </svg>
    <div class="property-block">
      <div v-for="sa in frame.special_abilities">
        <h4>{{sa.name}}.</h4>
        <p v-html="sa.text"></p>
      </div>
    </div>
    <!-- property block -->
    <div class="property-block">
      <div v-if="frame.spellcasting">
        <h4>Spellcasting.</h4>
        <p>{{frame.spellcasting.desc}}
        <ul v-if="frame.spellcasting.levels">
            <li>Cantrips (at will): {{frame.spellcasting.levels[0].split(',').join(', ')}}</li>
            <li v-for="(l,i) in frame.spellcasting.levels" v-if="i>0">Level {{i}} ({{l[0]}} slots): {{l[1].split(',').join(', ')}}</li>
        </ul>
        <ul v-if="frame.spellcasting.innate">
            <li v-for="(l,i) in frame.spellcasting.innate">{{l[0]}}: {{l[1].split(',').join(', ')}}</li>
        </ul>
        <span v-if="frame.spellcasting.notes">{{frame.spellcasting.notes}}</span>
        </p>
      </div>
    </div>
    <!-- property block -->
  </div>
  <!-- section left -->
  <div class="section-right">
    <div class="actions">
      <h3>Actions</h3>
      <div class="property-block" v-for="act in frame.actions">
        <h4>{{act.name}}.</h4>
        <p v-html="act.text"></p>
      </div>
      <!-- property block -->
    </div>
    <!-- actions -->
    <div class="actions" v-if="frame.reactions">
      <h3>Reactions</h3>
      <div class="property-block" v-for="act in frame.reactions">
        <h4>{{act.name}}.</h4>
        <p v-html="act.desc"></p>
      </div>
      <!-- property block -->
    </div>
    <!-- actions -->
    <div class="actions" v-if="frame.legendary_actions">
      <h3>Legendary Actions</h3>
      <div class="property-block" v-for="act in frame.legendary_actions">
        <h4>{{act.name}}.</h4>
        <p>{{act.desc}}</p>
      </div>
      <!-- property block -->
    </div>
    <!-- actions -->
  </div>
  <!-- section right -->
  <hr class="orange-border bottom"/>
</div>
</div>
`

export {STATBLOCK}