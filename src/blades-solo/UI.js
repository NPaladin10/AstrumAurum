import {UI as aboutUI} from "./about.js"

const resize = () => {
  //set svg to window 
    let iW = window.innerWidth
    let iH = window.innerHeight
}

//check for resize
  //window.addEventListener("resize", resize )

/* 
UI 
*/
const UI = (app)=>{
  aboutUI(app)

  //creates the VUE js instance
  app.UI.main = new Vue({
    el: '#ui-main',
    data: {
      show: "about",
      now: 0,
    },
    mounted() {
      this.now = Date.now() / 1000
      setInterval(()=>this.now = Date.now() / 1000, 500)
    },
    computed: {
    },
    methods: {
    }
  })

}

export {UI}
