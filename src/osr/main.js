import * as GEAR from "./gear.js"

const COSMICHUES = [
  ["Red","Ruby","Charisma, Evocation, Fire, Light"],
  ["Orange","Citrine","Dexterity, Illusion,Summoning, Air, Storm"],
  ["Yellow","Topaz","Strength, Abjuration, Enchantment, Earth"],
  ["Green","Emerald","Constitution, Transmutation, Life, Plants"],
  ["Blue","Sapphire","Intelligence, Divination, Water, Ice"],
  ["Violet",'Amethyst',"Wisdom, Necromancy, Death, Shadow"]
]

const rules = `
<div class="m-1 p-1" align="left">

    <button class="btn btn-light btn-block" type="button" data-toggle="collapse" data-target="#cosmic">
      <h3 class="m-0" align="left">Cosmic & Money</h3>
    </button>
    <div id="cosmic" class="collapse p-1">
      <p><em>Essence of raw creation; quantum nanomaterial; money; solidified 
      potential; the glow; ultra-dense energy; diamond; harnessed probability; 
      power; cosmic is all of these things and more. </em></p>
      <p>Due to the nature of the Outlands, there is no uniform currency, but 
      <bi>cosmic</bi> is a widely accepted medium of exchange and a uniform store of value. 
      Any market and every port will expect the buyer to haggle and barter, but 
      underpinning the main trade some <bi>cosmic</bi> always changes hands. People 
      carry small, half a pen sized, glass/quartz spindles imprinted with <bi>cosmic</bi> and 
      thumb sized devices are used to transfer it between spindles. The basic measure of
      cosmic is the <bi>Quint (Q)</bi>.</p>

      <p>Cosmic became this medium exchange because of its usefulness. 
      If cosmic is refined, Heroes can use it three direct ways:
      <ul>
          <li><bi>Healing (1d4x200 Q):</bi> The hero regains 1d6+2 HP.</li>
          <li><bi>Fuel (1d6x10 Q):</bi> The hero does not need to eat for a Week.</li>
          <li><bi>Channel (1d6x100 Q):</bi> Roll the cosmic’s Usage Die and select one of the 
          following benefits:
              <ul>
              <li>Add 1d6 to a saving throw</li>
              <li>Add 1d6 to a skill test (if you use them)</li>
              <li>Add 1d6 to the hero’s Damage Roll </li> 
              <li>Reduce damage to the hero by 1d6</li>
              </ul>
          </li>
      </ul>
      </p>

      <p>Cosmic can also be refined into hues, it is less expensive than 
      pure, but this limits its usefulness to certain situations. It can 
      only be Channeled and then only if one of its Tags applies 
      to the Action, but the end effect is the same. The slang for cosmic 
      is based on gemstones - pure is known as diamond and the rest are 
      linked to their color. The table below outlines the hues, gemstone
      name, and tags of cosmic.</p>

      <div align="center"><h4>Cosmic Hues<h4></div>
      <div class="container table-gen" >
        <div class="row table-gen">
          <div class="col-1">Hue</div>
          <div class="col-1">Gem</div>
          <div class="col">Tags</div>
        </div>
        <div v-for="h in hues" class="row table-gen">
          <div class="col-1">{{h[0]}}</div>
          <div class="col-1">{{h[1]}}</div>
          <div class="col">{{h[2]}}</div>
        </div>
      </div>
    </div>

    <button class="btn btn-light btn-block" type="button" data-toggle="collapse" data-target="#gear">
      <h3 class="m-0" align="left">Gear</h3>
    </button>
    <div id="gear" class="collapse p-1">
      <h4 id="weapons">Weapons</h4>
      <p>Weapons are varied and dangerous. Pointy and sharp metal is standard across the Outlands, but 
      technology has enabled an amazing variety of instruments of destruction. Because of the variety it is easier
      to group weapons by size classes, instead of listing individual weapons. When you want to vary the weapons,
      give them a tag.        
      </p>

      <div align="center"><strong>Melee Weapons</strong></div>
      <div class="container table-gen mb-2" >
        <div class="row table-gen">
          <div class="col-1">Class</div>
          <div class="col-1">Damage</div>
          <div class="col">Examples</div>
        </div>
        <div v-for="w in melee" class="row table-gen">
          <div class="col-1">{{w[0]}}</div>
          <div class="col-1">{{w[1]}}</div>
          <div class="col">{{w[2].split(',').join(', ')}}</div>
        </div>
      </div>

      <div align="center"><strong>Ranged Weapons</strong></div>
      <div class="container table-gen mb-2" >
        <div class="row table-gen">
          <div class="col-1">Class</div>
          <div class="col-1">Damage</div>
          <div class="col">Examples</div>
        </div>
        <div v-for="w in ranged" class="row table-gen">
          <div class="col-1">{{w[0]}}</div>
          <div class="col-1">{{w[1]}}</div>
          <div class="col">{{w[2].split(',').join(', ')}}</div>
        </div>
      </div>

      <div align="center"><strong>Weapon Tags</strong></div>
      <div class="container table-gen mb-2" >
        <div class="row table-gen">
          <div class="col-2">Tag</div>
          <div class="col">About</div>
        </div>
        <div v-for="t in wTags" class="row table-gen">
          <div class="col-2">{{t[0]}}</div>
          <div class="col">{{t[1]}}</div>
        </div>
      </div>

      <h4 id="armor">Armor</h4>
      <p>Just like weapons, armor comes in many forms from thick metal plate to shimmering 
      screens of pure force.</p>

      <div align="center"><strong>Basic Armor</strong></div>
      <div class="container table-gen mb-2" >
        <div class="row table-gen">
          <div class="col-1">Class</div>
          <div class="col-1">AC</div>
          <div class="col">Tags</div>
        </div>
        <div v-for="a in armor" class="row table-gen">
          <div class="col-1">{{a[0]}}</div>
          <div class="col-1">{{a[1]}}</div>
          <div class="col">{{a[2]}}</div>
        </div>
      </div>

      <div align="center"><strong>Armor Tags</strong></div>
      <div class="container table-gen mb-2" >
        <div class="row table-gen">
          <div class="col-2">Tag</div>
          <div class="col">About</div>
        </div>
        <div v-for="t in aTags" class="row table-gen">
          <div class="col-2">{{t[0]}}</div>
          <div class="col">{{t[1]}}</div>
        </div>
      </div>

    </div>

    <button class="btn btn-light btn-block" type="button" data-toggle="collapse" data-target="#journeys">
      <h3 class="m-0" align="left">Journeys Between Shards</h3>
    </button>
    <div id="journeys" class="collapse p-1">
      <p>Travelling between two <bi>shards</bi> within the same <bi>region</bi> 
      takes 1d4+1 <bi>days</bi>. Travelling between <bi>shards</bi> in different 
      <bi>regions</bi> takes 2d4+2 <bi>days</bi>. Travel between <bi>shards</bi> 
      in two different <bi>realms</bi> is impossible, unless there is a known 
      <bi>way</bi>, then the journey takes 2d6+2 <bi>days</bi>. The travel time 
      is modified by the following conditions:
      <ul>
          <li>If a <bi>way</bi> connects the two <em>cut the time in half</em>.</li>
          <li>If destination is not connected to the origin, but a <bi>way</bi> connects 
          the destination to another <bi>shard</bi> <em>subtract one</em> <bi>day</bi>.</li>
          <li>If <em>half or more</em> of the heroes have visited the destination before 
          <em>cut the time in half</em>.</li>
          <li>If <em>any but less than half</em> have visited the destination 
          <em>subtract one <em><bi>day</bi>.</li>
      </ul>
      <p><em>Round fractions down, but the time cannot be less than one <bi>day</bi>. </em></p>
      <h3>Challenges and Progress</h3>
      <p>Every <bi>day</bi> of the <bi>journey</bi>, the heroes must face a 
      <bi>challenge</bi>. Roll 3d6 and consult the table. </p>

      <div class="container table-gen" >
        <div class="row table-gen">
          <div class="col table-gen">
            <div align="center">Ability</div>
            <div class="d-flex justify-content-between p-1"><span>1</span><span>Strength</span></div>
            <div class="d-flex justify-content-between p-1"><span>2</span><span>Dexterity</span></div>
            <div class="d-flex justify-content-between p-1"><span>3</span><span>Constitution</span></div>
            <div class="d-flex justify-content-between p-1"><span>4</span><span>Intelligence</span></div>
            <div class="d-flex justify-content-between p-1"><span>5</span><span>Wisdom</span></div>
            <div class="d-flex justify-content-between p-1"><span>6</span><span>Charisma</span></div>
          </div>
          <div class="col table-gen">
            <div align="center">Difficulty / Damage</div>
            <div class="d-flex justify-content-between p-1"><span>1-2</span><span>Easy / 1d6</span></div>
            <div class="d-flex justify-content-between p-1"><span>3-4</span><span>Normal / 2d6</span></div>
            <div class="d-flex justify-content-between p-1"><span>5-6</span><span>Hard / 4d6</span></div>
          </div>
          <div class="col table-gen">
            <div align="center">Challenge/Saving Throw</div>
            <div class="d-flex justify-content-between p-1"><span>1-4</span><span>Challenge</span></div>
            <div class="d-flex justify-content-between p-1"><span>5-6</span><span>Saving Throw</span></div>
          </div>
        </div>
      </div>
      
      <p>Once you have an ability, come up with a challenge / saving throw based around it. Now the heroes
      have to solve what you've given them. 
      <ul>
          <li>For a challenge:
              <ul>
                  <li>One hero rolls at a time until there is success.</li>
                  <li>Only one hero must succeed to progress.</li>
              </ul>
          </li>
          <li>For a saving throw:
              <ul>
                  <li>All heroes must roll.</li>
                  <li>All heroes must succeed to progress.</li>
              </ul>
          </li>
      </ul>
      If any hero fails a roll, they take damage based on the difficulty. If the heroes make 
      progress reduce the travel time by one <bi>day</bi>. After the number of <bi>days</bi> reach 0 the heroes reach 
      their destination.</p>

      <h3>Resting on a Way</h3>
      <p>Heroes may/should <bi>rest overnight</bi> after a <bi>challenge</bi>, 
      but resting on a <bi>way</bi> is never as effective as resting in the 
      relative safety of a town. When they <bi>rest overnight on a way</bi> 
      they only recover half the HP that they would normally recover. 
      </p>
    </div>

</div>
`
Vue.component("rules",{
    template: rules,
    data: function() {
      return {
        wTags : GEAR.WEAPONTAGS,
        aTags : GEAR.ARMORTAGS,
        melee : GEAR.MELEE,
        ranged : GEAR.RANGED,
        armor : GEAR.ARMOR,
        hues : COSMICHUES
      }
    },
  })

//creates the VUE js instance
new Vue({
  el: '#ui-main',
  data: {
    siteLinks: [],
  },
  mounted() {},
  computed: {},
  methods: {
  }
})
