import {FRONTS, TYPES, plots} from "../fronts-data.js"

import {factions as FACTIONS} from "./factions.js"

import {FORCES as forcesOSR} from "./forces-osr.js"
import {FORCES as forcesFitD} from "./forces-fitd.js"

import {MONSTERS} from "../ogl-monster-data.js"
import {SHORTBLOCK, getBlockData} from "../monster-statblock-osr.js"

let factions = FACTIONS.map(F=>{
  let id = F.id
  //forces
  F.forcesOSR = forcesOSR[id] ? Object.values(forcesOSR[id]).map(getBlockData) : []
  F.forcesFitD = [[],[],[],[],[]] 
  if(forcesFitD[id]) {
    forcesFitD[id].forEach(f => F.forcesFitD[f[0]-1].push(f))  
  }
  F.fShow = ''
  //fronts
  F.fronts = F.fronts ? F.fronts.map(fid=>FRONTS[fid - 1]) : null

  return F
}
)

Vue.component("monster-short", {
  template: SHORTBLOCK,
  props : ["M"],
  data: function() {},
  methods: {  }
})


//creates the VUE js instance
new Vue({
  el: '#ui-main',
  data: {
    siteLinks: [],
    factions,
    frontPlots: plots,
    frontTypes: TYPES
  },
  mounted() {},
  computed: {},
  methods: {
    fShow(i,what) {
      Vue.set(this.factions[i],'fShow',what)
    }
  }
})
