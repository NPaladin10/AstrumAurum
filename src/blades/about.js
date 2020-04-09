import {PCPLAYBOOKS,CREWPLAYBOOKS} from "./playbooks.js"

const ABOUT = `
<div class="p-1 m-1" align="left">
  <p>This is a Forged in the Dark adaptation of Planescape style planehopping adventure. Honestly it is a light
  reskin of the core Blades in the Dark - many of the core mechanics and playbooks don't need to chage. Howver,
  names and concepts have been changed to fit the settings.</p>

  <h4>Gambits</h4>
  Add a gambit to your crew when you roll a 6 or critical on a risky action and you didn't spend a gambit on a bonus die.

  <h4>Playbooks</h4>
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
  </div>

  <h4>Crews</h4>
  <div class="m-1 p-1">
    <div v-for="(p,i) in crews">
      <button class="btn btn-light btn-block" type="button" data-toggle="collapse" :data-target="'#crew-'+i">
        <h3 class="m-0" align="left">{{p.name}}</h3>
      </button>
      <div :id="'crew-'+i" class="collapse px-2">
        <h5>Abilities</h5>
        <div v-for="a in p.abilities" class="px-2"><bi>{{a.name}}:</bi> {{a.text}}</div>
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
let crews = Object.values(CREWPLAYBOOKS).sort(alphaSort)

/* 
UI 
*/
const UI = (app)=>{
   

  Vue.component("about",{
    template: ABOUT,
    data: function() {
      return {
        playbooks,
        crews 
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