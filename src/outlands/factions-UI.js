const faction = `
<div class="border m-1 p-1" align="left">
    <h2>{{faction.name}}</h2>
    <div v-html="faction.info"></div>
    <h4 align="center">{{faction.name}} Fronts</h4>
    <div class="container table-gen my-2">
        <div class="row table-gen">
            <div class="col">Roll (d20)</div>
            <div class="col">Front</div>
        </div>
        <div v-for="(f,i) in fronts" class="row table-gen">
            <div class="col-2">{{faction.frontsP[i]}}</div>
            <div class="col">{{f.name}} <em>(impulse: {{f.impulse}})</em></div>
        </div>
    </div>
    <h4 align="center">Forces</h4>
    <div class="container table-gen" align="center">
      <div v-for="f in forces">
        <monster-short v-if="f.lv" :M="f"></monster-short>
      </div>
    </div>
</div>
`

const factions = `
<div class="m-1 p-1" align="left">
    <faction v-for="F in factions" :faction="F"></faction>
</div>
`

//
import * as coreFactions from "./factions-core.js"
import * as frontsData from "../fronts-data.js"


/* 
UI 
*/
const UI = (app)=>{

  Vue.component("monster-short",{
    template: coreFactions.forceHTML,
    props : ["M"]
  })

  Vue.component("factions",{
    template: factions,
    data: function() {
      return {
        factions : [],
      }
    },
    mounted() {
      this.factions = coreFactions.data.slice()
    },
  })

  Vue.component("faction",{
    template: faction,
    props : ["faction"],
    data: function() {
      return {
        showForces : [],
      }
    },
    computed : {
        fronts () { 
            let f = this.faction.fronts || []
            return f.map(fid => {
                return {
                    name: frontsData.FRONTS[fid-1].front,
                    impulse: frontsData.FRONTS[fid-1].impulse
                }
            })
        }, 
        forces() {
            return this.faction.forces.sort((a,b)=> a.lv - b.lv)
        }
    }
  })



}

export {UI}
