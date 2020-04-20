const SKILLS = [[`Athletics`, `Your squad’s general level of physical fitness, whether through training, natural gifts, or genre-specific means (like magic or genetic alteration).`], [`Burglary`, `Your squad’s aptitude for stealing things and getting into places that are off-limits.`], [`Craft`, `This covers artistic ability, working with basic machinery and physical tools.`], [`Deceive`, `Deceive is the skill about lying to and misdirecting people.`], [`Empathy`, `Empathy involves knowing and being able to spot changes in a person’s mood or bearing.`], [`Fight`, `This skill covers all forms of close-quarters combat (in other words, within the same zone), both unarmed and using weapons.`], [`Influence`, `Your squad's ability to get others to agree with their point of view.`], [`Investigate`, `This skill revolves around concentrated effort and in-depth scrutiny. Your squad uses this to find things out.`], [`Lore`, `This covers knowledge of history, people, places and things.`], [`Notice`, `This represents a squad’s overall perception, ability to pick out details at a glance, and other powers of observation.`], [`Physique`, `This represents the squad’s natural physical aptitudes, such as raw strength and endurance.`], [`Pilot`, `This covers operating vehicles, mecha, spaceships, etc.`], [`Rapport`, `This represents how well your squad gets along with others.`], [`Science`, `This covers knowledge of scientific study like chemistry, physics, medicine, biology, etc.`], [`Shoot`, `The skill of using ranged weaponry, either in a conflict or on targets that don’t actively resist your attempts to shoot them.`], [`Stealth`, `This skill allows your squad to avoid detection, both when hiding in place and trying to move about unseen.`], [`Survival`, `The knowledge and ability to stay alive in all manner of hostile environments.`], [`Tactics`, `The ability to plan and execute a strategy - for games and battle.`], [`Tech`, `Your squad’s knowledge of and ability to craft and manipulate technology. This covers coding as well as complex/high-tech systems.`], [`Will`, `Your squad’s general level of mental fortitude, the same way that Physique represents your physical fortitude.`], ]

const CHALLENGES = [`1-3,4-6,7-8,9-10,11,12`, `Craft,Investigate,Physique,Tech,Athletics,Influence`, `Influence,Rapport,Empathy,Will,Deceive,Notice`, `Investigate,Athletics,Lore,Survival,Craft,Notice`, `Fight,Shoot,Athletics,Notice,Tactics,Physique`, `Stealth,Burglary,Athletics,Notice,Deceive,Tech`, `Investigate,Tech,Science,Lore,Rapport,Influence`, ]

const about = `
<div class="m-1 p-1" align="left">
    <p>This is a co-op/solitaire game about adventure and saving the Outlands from impending Doom. You (and your friends) will control a number of squads and race against the Doom Clock to overcome Troubles while searching for Strongholds to bring peace to the Outlands.
    This is a print and play game. It is not as heavy as a traditional tabletop RPG because you don’t need a “gamemaster” to call the shots, but the rules are detailed so these pages are not short. </p>

    <h2>Quickstart</h2>
    <ul>
        <li>Create two squads (if you have three or more players, only create one squad each).
            <ul>
                <li>Assign their 4 skills (two at rank 2 and two at rank 1)</li>
                <li>Give them one rank 1 hero and two pieces of rank 1 gear.</li>
                <li>Select the shard that they will start on.</li>
            </ul>
        </li>
        <li>For every squad in the game generate three trouble: 
            <ul>
                <li>Randomly select a region and generate a shard.</li>
                <li>Each trouble starts at rank 1, has a clock with 6 ticks, and 1 nature</li>
            </ul>
        </li>
    </ul>

    <h2>Basics</h2>
    <div class="px-2">
        <h3>Roll</h3>
        <p>Any time we refer to a roll, you will gather a number of six sided dice (d6) and roll  them. Generally you will be looking for and counting successes: rolling a 4, 5 or 6. A skill roll is one where the rank of the skill determines the number of dice that you roll.  </p>
        <h4>Success (Dice)</h4>
        <p>With a standard roll you gain one success for every 4, 5, or 6 on a die. If you have a benefit that grants +1d success, if you roll at least one success with the initial roll, you get to roll an extra die to see if you increase your success. If a benefit grants +1 success, if you roll at least one success with the initial roll, you add +1 success to it.</p>  
        <h4>Opposed Roll</h4>
        <p>An opposed roll is one where you make a roll versus a difficulty. Make your roll, but also roll a number of dice equal to the difficulty. The rules will tell you what the successes on either side mean.    </p>
        <h4>Defense (Dice)</h4>
        <p>If you have a benefit that grants +1d defense you gain an extra die on an opposed roll, but its success can only cancel out a success from the opposed result. A +1 defense benefit automatically cancels out one opposed success.</p>   

        <h3>Clues</h3>
        <div class="px-2">
            <p>Clues are an integral currency of the game. You earn them when your squads overcome trouble. 
            They enable you to find strongholds, reduce the Doom Clock and change the map. 
            A clue can be spent to gain one of the following benefits:  </p>
            <ul>
                <li>Add 1d to a Stronghold Search Roll</li>
                <li>Clear the Warning Clock</li>
                <li>Remove one progress mark from the Doom Clock</li>
                <li>Roll a d6 and gain that much Cosmic</li>
                <li>Establish a new Way</li>
            </ul>
        </div>
    </div>

    <h2>Squads</h2>
    <div class="px-2">
        <p>Every player will control one (or more) squads and they are the core actors in the game. A squad is comprised of a number of individuals (between 6 and 16) that is united on working towards the same goal. They challenge and overcome trouble, search for strongholds and work to bring peace to the Outlands. A squad has a level that provides a bonus and a number of skills. Squads may also gain extras: heroes and and gear - which you create through actions during play. </p>
        <h3>Skills</h3>
        <p>Skills are the actions that a squad is good at - there are 20, and they have a rank between 1 and 6. Generally when a squad uses a skill they roll their rank in d6 and look for successes. 
            The squad has max skill rank based upon their level and they always have two skills per rank. 
            When a squad increases in level they may swap two skills between ranks. 
            When their level increases their max rank you may choose two new skills to be rank 1.</p> 
        
        <div align="center"><bi>Max Skill Rank by Level<bi></div>
          <div class="container table-gen" align="center">
            <div class="row table-gen">
              <div class="col">Level</div>
              <div class="col">1-2</div>
              <div class="col">3-4</div>
              <div class="col">5-6</div>
              <div class="col">7-8</div>
              <div class="col">9-10</div>
            </div>
            <div class="row table-gen">
              <div class="col">Max Rank</div>
              <div class="col">2</div>
              <div class="col">3</div>
              <div class="col">4</div>
              <div class="col">5</div>
              <div class="col">6</div>
            </div>
          </div>

          <div align="center" class="mt-2"><bi>Skill Descriptions<bi></div>
          <div class="container table-gen mb-2" align="center">
            <div class="row table-gen">
              <div class="col-2">Name</div>
              <div class="col">Info</div>
            </div>
            <div class="row table-gen" v-for="s in skills">
              <div class="col-2">{{s[0]}}</div>
              <div class="col" align="left">{{s[1]}}</div>
            </div>
          </div>

      <h3>Improving a Squad</h3>
        <p>When you overcome a trouble with a squad, that squad will gain xp based upon the rank of the trouble.  </p>
      <h3>Harm</h3>
        <p>A squad starts with 4 harm. For every two ranks that they have in Physique and Will they gain +1 harm. 
        </br><em>A level 3 squad with, rank 3 Will and rank 2 Physique would gain +2 harm. </em></p>

      <h3>Extras</h3>
      <p>Extras are the heroes and gear that supports a squad. You get to define the extras that your squad will have. 
      You must use an action and spend cosmic to establish an extra, and a squad cannot use an extra until it is fully developed.</p>

        <h4>Heroes</h4>
            <p>Heroes have a rank between 1 and 5, and they provide a number of benefits equal to their rank. 
            A squad can only have a number of heroes equal to half its level - rounded up. 
            Having a hero represents replacing a normal squad member with someone who has focused training. 
            Heroes may be swapped out based upon availability. A hero may provide the following benefits (one per rank):</p>
            <ul>
                <li>+1d bonus to a skill: this could give the squad access to a skill they don’t normally have or increase the rank of one of their core skills. </li>
                <li>+1d bonus vs a tag: the hero has broad knowledge on a topic that provides a benefit.</li>
                <li>+2d bonus to a skill vs a tag: the hero provides a focused boost to a single skill based upon their field of interest.  </li>
            </ul>
        
        <h4>Gear</h4>
            <p>Gear covers all the gadgets and gizmos that a squad uses like weapons, magic rings, spells, wands, 
            armor, computers, rocket packs, etc. Gear may have a rank from 1 to 5, 
            and for every rank it provides one of the following benefits:</p>
            <ul>
                <li>-1d difficulty with a skill</li>
                <li>-1d difficulty vs a tag</li>
                <li>-2d difficulty with a skill vs a tag</li>
                <li>+2d success vs a nature</li>
                <li>+1 defense vs a nature</li>
            </ul>

            <p>Gear generally reduces the difficulty of skill roll - a challenge will roll less dice when it opposes a squad. Reduction can never reduce the difficulty to less than 1.</p> 

         <h4>Tags</h4>
         <ul>
            <li>Factions: by faction name</li>
            <li>Natures: create, convince, delve, fight, prowl, research</li>
            <li>Elements: air, earth, fire, water, life, death</li>
            <li>Magic: divination, abjuration, evocation, illusion, necromancy, transmutation</li>
         </ul>
   
        <h4>Damaging Extras</h4>
        <p>Extras may be disabled to reduce damage done to a squad. 
        Heroes and gear may reduce damage equivalent to their rank. 
        For every point of damage reduced, you must disable one of their benefits. 
        A squad must heal their extra to regain the use of its benefit. </p>
    </div>

    <h2>Doom and the Warning Clock</h2>
    <div class="px-2">
        <div class="pie" style="width:75px;height:75px;"></div>
        <p>The players race against the Doom Clock to win the game. The Doom Clock tracks the overall danger of the Realm. 
        It isn't one clock but three clocks with four segments each. 
        If all of the Doom Clocks are ever filled you lose the game. 
        The Doom Step is equal to the number of completely filled clocks. 
        Add the doom step to the rank of every trouble in the following situations: </p>
        <ul>
            <li>Rolling during the AI phase</li>
            <li>Rolling for trouble defense  </li>
        </ul>

        <p>The Warning Clock accompanies the Doom Clock and it also has four segments. 
        When you suffer consequences one option available is to tick this clock. When all four segments are full do all of the following:</p>
        <ul>
            <li>Clear the Warning Clock</li>
            <li>Mark 1 progress on the Doom Clock</li>
            <li>Make an Event Roll</li>
        </ul>        
    </div>

    <h2>Trouble</h2>
    <div class="px-2">
        <p>Trouble takes many forms: diplomatic struggles, warmongering, rebellion, natural destruction, 
        pandemic, gang warfare, marauders, lurking evil, and so on. 
        Whatever its true form, this game models them all in the same fashion: </p>
        <ul>
            <li><bi>Rank:</bi> the base difficulty of the trouble </li>
            <li><bi>Clock:</bi> a clock with a number of ticks to represent the size of the trouble      </li>
            <li><bi>Nature:</bi> what a hero must accomplish to solve the trouble; the trouble may have multiple and there are six - Create, Convince, Delve, Fight, Prowl, and Research    </li>
            <li><bi>Extras:</bi> not every trouble will have them, but if present they change how the trouble functions</li>
        </ul>

        <h3>Strongholds</h3>
        <p>All the trouble is created - intentionally or not - by Strongholds. 
        They may be boiling hives of aliens, an imprisoned darkness, cosmic instability, a conquering empire - 
        anything bent on creating a new order. A game has three Strongholds and you must discover and defeat 
        all of them to win the game. Strongholds remain hidden until you must spend a clue and a 
        hero action to search for them. When visible, a stronghold functions exactly like a trouble, 
        so they also act during the AI phase. </p>

        <h3>Opportunities</h3>
        <p>An opportunity is an action that may grant you a boon if successfully completed. 
        Opportunities are like troubles, they have a rank and a nature, but no matter the outcome - 
        success or fail - they are removed from the game. </p>
    </div>

    <h2>Playing the Game</h2>
    <div class="px-2">
        <p>The game is open ended and can take any number of turns. Each turn is divided into the following phases:</p>
        <ul>
            <li>Event Roll</li>
            <li>Trouble Phase</li>
            <li>Action Phase</li>
        </ul>

        <h3>Event Roll</h3>
        <div class="px-2">
            <p>Every turn you will check for events. What may happen depends upon the Doom Clock. 
            Roll a number of d6 equal to the current doom step+1 to determine the result. </p>
            <ul>
                <li>0 success: create 1 opportunity</li>
                <li>1 success: create 1 trouble and 1 opportunity</li>
                <li>2 success: create 2 trouble  </li>
                <li>3 success: create 2 trouble and mark 2 progress on the warning clock</li>
            </ul>
        </div>

        <h3>Trouble Phase</h3>
        <div class="px-2">
            <p>During the AI phase, each trouble rolls a number of d6 equal to its Rank, plus the current Doom Clock step. 
            The dice determine the results.  </p>
            <ul>
                <li>1 success: select 1 complication</li>
                <li>2 success: select 1 complication AND:
                    <ul>
                        <li>If the lowest die is even: increase the Trouble’s clock size by 1 tick (max 12)</li>
                        <li>If the lowest die is odd: increase the Trouble’s rank by 1 (max 3)</li>
                        <li>If neither of the above can be done select 1 more complication</li>
                    </ul>
                </li>
                <li>3+ success: mark 1 progress on the warning clock AND:
                    <ul>
                        <li>If the trouble is rank 2+: split this trouble</li>
                        <li>If the above cannot be done: increase the Trouble’s rank by 1 (max 3).  </li>
                        <li>If the above cannot be done: Increase the Trouble’s clock size by 1 tick (max 12).</li>
                    </ul>
                </li>
            </ul>

            <bi>Complications</bi>
            <ul>
                <li>Suffer 1d penalty for the next roll vs this trouble.</li>
                <li>Suffer +1 harm for the next roll vs this trouble.</li>
                <li>Remove one progress mark from this clock.</li>
                <li>Mark 1 progress on the Warning Clock.</li>
            </ul>

            <p>When the trouble increases in rank it gains a new nature (determine it randomly). 
            When the result is split, the trouble becomes two: split the clock size between the two and each 
            has a Rank that is one less than the original. 
            </br><em>A rank 3 trouble with 8 ticks that splits becomes two rank 2 troubles with 4 ticks each.  </em></p>
        </div>

        <h3>Action Phase</h3>
        <div class="px-2">
            <p>Every squad may take two of the following actions:</p>
            <ul>
                <li>Move</li>
                <li>Challenge a Trouble</li>
                <li>Search for a Stronghold</li>
                <li>Gather Resources</li>
                <li>Heal</li>
                <li>Establish an Extra</li>
            </ul>

            <h4>Movement</h4>
            <p>Movement is abstract in the Outlands. As a move a squad may:</p>
            <ul>
                <li>Move to another shard within the same region</li>
                <li>Use a way to move to a connected shard in a different region</li>
            </ul>
            <p>A way is a route between shards from different regions. 
            Alternatively, a squad may spend two moves to move between shards in different regions.  </p>

            <h4>Challenge a Trouble</h4>
            <p>During the action phase a player may challenge a trouble. 
            They first must move to the shard the trouble is on. 
            If the trouble has multiple natures, roll a d6 to pick which nature will 
            determine the action that the hero must use that turn. 
            Once you determine the nature, roll a d12 and consult the Challenge Skill Table below. </p>

            <div class="container table-gen mb-2" align="center">
                <div class="row table-gen">
                  <div class="col">Roll</div>
                  <div class="col">Create</div>
                  <div class="col">Convince</div>
                  <div class="col">Delve</div>
                  <div class="col">Fight</div>
                  <div class="col">Prowl</div>
                  <div class="col">Research</div>
                </div>
                <div class="row table-gen">
                  <div class="col" v-for="col in challenges">
                    <div v-for="c in col">{{c}}</div>
                  </div>
                </div>
            </div>

            <p>You must then make the appropriate opposed skill roll for the squad - 
            roll the squad’s skill rank in d6 (adding benefits due to extras). 
            While the trouble rolls a number of d6 equal to its difficulty: its rank plus the current doom step. 
            Count the number of successes (a 4, 5, or 6) on each side. 
            For every trouble success that remains you must select a compilation. For every success the squad has you may:
            </p>
            <ul> 
                <li>Mark 1 progress on the trouble’s clock</li>
                <li>Cancel 1 trouble success</li>
            </ul>

            Complications
            <ul>
                <li>Suffer 1 harm </li>
                <li>Mark 1 progress on the Warning Clock </li>
                <li>Erase 1 progress mark from the trouble’s clock</li>
                <li>Increase this clock size by 1 tick (max of 12)</li>
                <li>Add +1d to the trouble on the next challenge roll</li>
            </ul>

            <p><bi>Overcome a Trouble</bi>
            </br>Once the trouble’s clock has been filled, it has been overcome. 
            The squad involved gains experience and you gain a clue. </p>

            <h4>Search for a Stronghold</h4>
            <p>If you have not started a Stronghold Search Clock, create one with 6 ticks. 
            The Stronghold Search Roll starts with 0d and for every Clue used, you can add +1d to the roll. 
            The maximum number of dice that can be rolled is limited to squad’s Investigate or Rapport rank - 
            whichever is greater. </p>

            <p>Based upon the results of the Search Roll: </p>
            <ul>
                <li>0 success: create a new Trouble</li>
                <li>1 success: mark 1 progress on  the Search Clock, but Mark 1 progress on the Warning Clock</li>
                <li>2+ success: mark a number of progress on the Search Clock equal to the number of successes</li>
            </ul>

            <p>When the Search Clock is full, clear it and randomly generate and place a stronghold. 
            The starting rank and clock of the stronghold is determined by the order it appears:</p>
            <ul>
                <li>First: Rank 1, Clock 8 ticks</li>
                <li>Second: Rank 2, Clock 10 ticks</li>
                <li>Third: Rank 3, Clock 12 ticks</li>
            </ul>

            <p>You cannot discover another stronghold while one remains active. 
            For every stronghold that you defeat, subtract one from the rank of every trouble (to a minimum of 1).</p>
            
            <h4>Gather Resources</h4>
            <p>The Outlands depends upon cosmic - it fuels the magic-as-technology society. 
            At any time a squad may use an action and try to earn cosmic. 
            This may involve a lucrative trade, creating a miraculous device, fighting in the ring, 
            running an odd job, etc. Choose a skill, roll and count successes - a 6 counts as two. 
            For every success gain 1 cosmic. You can only roll as many d6 as the rank of the shard where the squad is located. </p>
            
            <h4>Healing</h4>
            <p>A squad may use an action to heal. If you choose to heal your squad you may pay 1 cosmic 
            to add +1d to your healing roll. You may only gain a number of d6 equal to the rank of the shard the squad on. 
            Roll and reduce the harm to the squad based upon the number of successes rolled. 
            A squad may also repair a disabled extra in the same way. A point of healing repairs 1 disabled rank. 
            Regardless of the roll you always heal 1 harm. </p>
            
            <h4>Establish Extras</h4>
            <p>You must use an action and spend cosmic to establish an extra. 
            This creates a development clock based upon the rank of the extra: 2 ticks + 2 per rank of the extra. 
            The rank of the extra is limited to the rank of the shard the hero is on. </p>

            <p>A squad cannot use an extra until the development clock is full. 
            The clock is tied to the shard where the work is started and the squad must be on the shard to work on the clock. 
            To work a clock you must spend cosmic: add +1d to your development roll for every cosmic spent.
            Roll, and for every 3, 4, or 5 mark one progress on the clock, and for every 6 mark two progress.  </p>        
        </div>

    </div>

</div>
`

/* 
UI 
*/
const UI = (app)=>{

  let challenges = CHALLENGES.map(c=>c.split(","))

  Vue.component("about", {
    template: about,
    data: function() {
      return {
        skills: SKILLS,
        challenges
      }
    },
    methods: {
      show(what) {
        app.UI.main.show = what
      }
    }
  })
}

export {UI}
