const bonus = (frame,ai) => {
  let pb = 2 + Math.floor((frame.lv-1)/4)
  let bonus = ai == -1 ? 0 : Math.floor((frame.abilities[ai]-10)/2)  
  return pb+bonus
}

const EXTRAS = {
  "nAtks" : {
    "type" : "act",
    "name" : "Multiple Attacks. Attack action",
    format (frame) {
      return "Make "+frame.nAtks+" attacks instead of one."
    }
  },
  "RflxAI" : {
    "type" : "sa",
    "name" : "Reflexive AI",
    "text" : `
      The AI acts before you do, giving you an edge when you react to danger. You gain the following benefits:
      <ul>
        <li>If your mecha is not rigged with armor, you gain the listed unarmored AC. You can use a shield and still gain this benefit.</li>
        <li>You have advantage on Agility saving throws against effects that you can see, such as traps and areas of effect. To gain this benefit, you can’t be blinded, deafened, or incapacitated.</li>
      </ul>
    `
  },
  "ImpvRflxAI" : {
    "type" : "sa",
    "name" : "Improved Reflexive AI",
    "text" : `
      The AI acts before you do, giving you an edge when you react to danger. You gain the following benefits:
      <ul>
        <li>If your mecha is not rigged with armor, you gain the listed unarmored AC. You can use a shield and still gain this benefit.</li>
        <li>You have advantage on Agility saving throws against effects that you can see, such as traps and areas of effect. To gain this benefit, you can’t be blinded, deafened, or incapacitated.</li>
        <li>You have advantage on initiative rolls.</li>
        <li>If you are surprised at the beginning of combat and aren’t incapacitated, you can act
          normally on your first turn, but only if you enter overdrive before doing anything else on that turn</li>
      </ul>
    `
  },
  "IncCritDmg" : {
    "type" : "sa",
    "name" : "Improved Critical Damage",
    format (frame) {
      let lv = frame.lv
      let n = lv >= 17 ? "three" : lv >= 13 ? "two" : "one"
      return "Roll "+n+" additional weapon damage die/dice when determining the extra damage for a critical hit with a melee attack."
    }
  },
  "UnarmoredMove" : {
    "type" : "sa",
    "name" : "Unarmored Movement",
    "text" : "Your mecha's speed increases by 10 feet while it isn't rigged with heavy armor."
  },
  "ODLock" : {
    "type" : "sa",
    "name" : "Overdrive Lock",
    "text" : `
      Your overdrive can keep your mecha fighting despite grievous damage. If it drops to 0 hit
      points while in overdrive, you can make a DC 10 Chasis saving throw. If you succeed, the mecha drops to 1 hit point instead.
      </br>Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.
    `
  },
  "ImpvODLock" : {
    "type" : "sa",
    "name" : "Improved Overdrive Lock",
    "text" : `
      Your mecha's overdrive ends early only if you fall unconscious or if you choose to end it.
      </br>Your overdrive can keep your mecha fighting despite grievous damage. If it drops to 0 hit
      points while in overdrive, you can make a DC 10 Chasis saving throw. If you succeed, the mecha drops to 1 hit point instead.
      </br>Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.
      </br>
    `
  },
  "OD" : {
    "type" : "act",
    "name" : "Overdrive. Bonus action",
    format (frame) {
      let lv = frame.lv
      let n = lv >= 20 ? "unlimited" : lv >= 17 ? 6 : lv >= 12 ? 5 : lv >= 6 ? 4 : lv >= 3 ? 3 : 2
      let dmg = lv >= 16 ? "+4" : lv >= 9 ? "+3" : "+2"
      let uses = "<bi>Uses:</bi> "+n+"/long rest."
      let text = `
        On your turn, you can push the Mecha into overdrive. While in overdrive, you gain the following benefits if you aren't rigged with heavy armor:
          <ul>
            <li>You have advantage on Chasis checks and Chasis saving throws.</li>
            <li>When you make a melee weapon attack using Chasis, you gain `+dmg+` bonus to the damage roll.</li>
            <li>You have resistance to bludgeoning, piercing, and slashing damage.</li>
          </ul>
        If you are able to cast spells, you can’t cast them or concentrate on them while in overdrive.
        </br>`+uses+`
        </br><bi>Duration:</bi> 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked / performed a feat of strenth / taken damage since your last turn. You can also end overdrive on your turn as a bonus action.
      `

      return text
    }
  },
  "ElemBlast" : {
    "type" : "act",
    "name" : "Elemental Blast, Attack action",
    "opts" : ["Acid", "Cold", "Fire", "Lightning", "Poison"],
    format (frame) {
      let lv = frame.lv
      let n = lv >= 16 ? 5 : lv >= 11 ? 4 : lv >= 6 ? 3 : 2
      let dc = 8 + bonus(frame,3) 
      let text = `
        Your core has been tuned to discharge a certain type of elemental energy. 
        When in overdrive, you can release a blast of of elemental power. You can only use the blast once per overdrive.
        The energy you release depends upon what you chose to rig. All the foes in the area of affect are entitled
        a saving throw for half damage.  
        </br><bi>DC:</bi> `+dc+`
        </br><bi>Damage:</bi> `+n+`d6
        </br><bi>Area:</bi> 30 ft. line OR 15 ft. cone
        </br><bi>Elements:</bi> Acid (AGI), Cold (CHS), Fire (AGI), Lightning (AGI).
      `

      return text
    }
  },
  "EnergyResist" : {
    "type" : "sa",
    "name" : "Energy Resistance",
    "opts" : ["Acid", "Cold", "Fire", "Lightning", "Poison"],
    format (e) {
      return text = `
        For the duration of your overdrive, you gain resistance to the damage that you rigged for your blast.
      `
    }
  },
  "CrushingAura" : {
    "type" : "act",
    "name" : "Cruhing Aura. Attack action",
    format (frame) {
      let dc = 8 + bonus(frame,3) 
      let text = `
        All creatures within 20 feet of you must make a Chasis saving throw. On a failed save, the creature takes
        full damage and is deafened until the beginning of your next turn. On a successful save,
        they take half as much damage and are not deafened.
        </br><bi>DC:</bi> `+dc+`
        </br><bi>Damage:</bi> 3d10
        </br>Once you’ve used this ability, you can’t use it again until you finish a short or a long rest.
      `

      return text
    }
  },
  "ODFlight" : {
    "type" : "sa",
    "name" : "Overdrive Flight",
    "text" : "While in Overdrive the elemental power surging through your mecha enables flight at 15 ft per round."
  },
  "TgtAI" : {
    "type" : "sa",
    "name" : "Targetng AI",
    "text" : "You gain a +2 bonus to attack rolls that you make with ranged weapons."
  },
  "ImpvTgtAI" : {
    "type" : "sa",
    "name" : "Improved Targetng AI",
    "text" : `You gain advantage on all ranged attack rolls made against targets you can see within 30 feet. 
    You gain a +2 bonus to attack rolls that you make with ranged weapons. 
    `
  },
  "SupTgtAI" : {
    "type" : "sa",
    "name" : "Superior Targetng AI",
    "text" : `You gain advantage on all ranged attack rolls made against targets you can see within 30 feet. 
    You gain a +2 bonus to attack rolls that you make with ranged weapons. 
    All your ranged attacks deal an additional die of weapon damage (by weapon type).
    `
  },
  "ImpvRatkCrit" : {
    "type" : "sa",
    "name" : "Improved Ranged Critical",
    "text" : "Your ranged attacks score a critical hit on a roll of 19 or 20."
  },
  "EnhcPlate" : {
    "type" : "sa",
    "name" : "Enhanced Plating",
    "text" : "While your mecha is rigged with armor, you gain a +1 bonus to AC."
  },
  "ImpvCrit" : {
    "type" : "sa",
    "name" : "Improved Critical",
    "text" : "Your weapon attacks score a critical hit on a roll of 19 or 20."
  },
  "SupCrit" : {
    "type" : "sa",
    "name" : "Superior Critical",
    "text" : "Your weapon attacks score a critical hit on a roll of 18-20."
  },
  "AthleteRig" : {
    "type" : "sa",
    "name" : "Athlete Rigging",
    "text" : `Your mecha is rigged to provide amazing strength and agility. 
      You can add half your mecha's proficiency bonus (round up) to any Chasis or Agility
      check you make that doesn’t already use your proficiency bonus.`
  },
  "QckShot" : {
    "type" : "act",
    "name" : "Quick Shot. Bonus action",
    "text" : "If you do not move during your turn, you can make an extra attack with your ranged weapon."
  },
  "AITrack" : {
    "type" : "act",
    "name" : "AI Track. Move action",
    "text" : "If you spend your Move action to track your target you gain advantage on your next ranged attack roll."
  },
  "RepairCharge" : {
    "type" : "act",
    "name" : "Repair Charge. Bonus action",
    format (frame) {
      let lv = frame.lv
      return `Your mecha regains 1d10+`+lv+` hit points. Once you use this
        feature, you must finish a short or long rest before you can use it again.`
    }
  },
  "Surge" : {
    "type" : "sa",
    "name" : "Surge",
    format (frame) {
      let lv = frame.lv
      let uses = Number(lv) >= 17 ? "twice" : "once"
      let text = `On your turn, you can push your mecha to take one additional action on top of your regular action and a possible bonus action.`
      text += `</br><bi>Uses:</bi> `+uses+` / short or long rest.`
      return text
    }
  },
  "Indomitable" : {
    "type" : "act",
    "name" : "Indomitable",
    format (frame) {
      let lv = frame.lv
      let uses = Number(lv) >= 17 ? "three times" : Number(lv) >= 13 ? "twice" : "once"
      let text = `You can reroll a saving throw that you fail - if you do so, you must use the new roll.`
      text += `</br><bi>Uses:</bi> `+uses+` / long rest.`
      return text
    }
  },
  "FoeDB" : {
    "type" : "sa",
    "name" : "Foe DB",
    format (frame) {
      let lv = frame.lv
      let n = lv >= 14 ? "three types" : lv >= 6 ? "two types" : "one type"
      let text = `You have databases chocked full of data about `+n+` of foe. 
        Choose your foes: hive, dragons, elementals, or giants. Alternatively, you can select two standard factions as your favored foe. 
        </br>• You have advantage on Systems (Survival) checks to track your favored foes, as well as on Systems checks to recall information about them.
        </br>• When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.
      `
      if(lv >= 20){
        text += `</br>• Once on each of your turns, you can add your Systems modifier to the attack roll or the damage roll of an attack you make against one of your favored foes. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.`
      }
      return text
    }
  },
  "TerrainRig" : {
    "type" : "sa",
    "name" : "Terain Rigging",
    format (frame) {
      let lv = frame.lv
      let n = lv >= 10 ? "three types of" : lv >= 6 ? "two types of" : "a particular"
      let text = `You have rigged your mecha to accommodate for the challenges of `+n+` terrain. 
        When you rig, choose one type of favored terrain: arctic, coast, desert, forest, grassland,mountain, swamp, city, or space. You gain the following benefits when operating in that terrain: 
        </br>• When you make an Agility or Systems check related to the terrain your proficiency bonus is doubled if you are using a skill that you’re proficient in.
        </br>• You can use stealth at a normal pace.
      `
      if(lv >= 8){
        text += `</br>• You suffer no movement penalties due to difficult terrain. `
      }
      return text
    }
  },
  "ActiveCammo" : {
    "type" : "sa",
    "name" : "ActiveCammo",
    format (frame) {
      let lv = frame.lv
      let text = `Given 1 minute your mecha can adapt is coloration to match the surrounding environment. 
      Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a building or cliff, that is at least as tall and wide as you are. You gain a +10 bonus to Agility (Stealth) checks as long as you remain there without moving or taking actions. 
      Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.
      `
      if(lv >= 14){
        text += `</br>You can use the Hide action as a bonus action on your turn. Also, you can’t be tracked by non-magical means, unless you choose to leave a trail. `
      }
      return text
    }
  },
  "EnhcSense" : {
    "type" : "sa",
    "name" : "Enhanced Sensors",
    "text" : `When you attack a foe you can’t see, your inability to see it doesn’t impose disadvantage on your attack rolls against it. You are also aware of the location of any invisible foe within 30 feet of you, provided that the foe isn’t hidden from you and you/your mecha isn’t blinded or deafened.`
  },
  "HunterAI" : {
    "type" : "sa",
    "name" : "Hunter AI",
    format (frame) {
      let lv = frame.lv
      let text = `You have a sophisticated AI that grants the following combat benefits: 
      </br>• When you hit a target with a weapon attack, 
      the creature takes an extra 1d8 damage if it’s below its hit point maximum. 
      You can deal this extra damage only once per turn.
      `
      if(lv >= 7){
        text += `</br>• When an opponent hits you with an attack, you gain a +4 bonus to AC
          against all subsequent attacks made by that opponent for the rest of the turn.`
      }
      if(lv >= 15){
        text += `</br>•When an attacker that you can see hits you with an attack, you can use your
        reaction to halve the attack’s damage against you. `
      }
      return text
    }
  },
  "Volley" : {
    "type" : "act",
    "name" : "Volley. Attack action",
    "text" : `You can make a ranged attack against any number of creatures within
          10 feet of a point you can see within your weapon’s range. You must have ammunition for each
          target, as normal, and you make a separate attack roll for each target.`
  },
  "SneakAI" : {
    "type" : "sa",
    "name" : "Sneak AI",
    format (frame) {
      let lv = frame.lv, dmg = Math.floor((Number(lv)-1)/2);
      let text = `
        You can strike subtly and exploit any distraction. 
        Once per turn, you can deal an extra damage to one opponent that you hit with
         an attack but you must meet the following requirements:
         </br>• The attack must use a finesse or a ranged weapon.
         </br>• You have advantage on the attack roll. OR another enemy is within 5 feet of the target and you don’t have disadvantage on the attack roll.
         </br><bi>Damage:</bi> `+dmg+`d6`
       
       return text
    }
  },
  "AgileRig" : {
    "type" : "act",
    "name" : "Agile Rigging. Boost action",
    format (frame) {
      let lv = frame.lv
      let text = `You can use a bonus action to take the Dash, Disengage, or Hide action.`
      if(lv >= 5){
        text += `</br>• When an attacker that you can see hits you with an attack, you can use your bonus action to halve the attack’s damage against you.`
      }
      if(lv >= 7){
        text += `</br>• you can nimbly dodge out of the way of certain area effects, such as a breath weapon or a grenade’s explosion. When you are subjected to an effect that allows you to
        make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.
        `
      }

      return text
    }
  },
  "Blindsense" : {
    "type" : "sa",
    "name" : "Blindsense",
    "text" : `If you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.`
  },
  "Elusive" : {
    "type" : "sa",
    "name" : "Elusive",
    "text" : `You are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren’t incapacitated.`
  },
  "MoveMaster" : {
    "type" : "sa",
    "name" : "Movement Mastery",
    "text" : `If your attack misses a target within range, you can turn the miss into a hit. 
      Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.
      </br><bi>Uses:</bi> once / long rest 
      `
  },
  "ShadowWpn" : {
    "type" : "act",
    "name" : "Shadow Weapon. Bonus action",
    format (frame) {
      let b = bonus(frame,-1)
      let lv = frame.lv
      let text = `You can create a weapon from pure shadow. It counts as a finesse weapon and 
      it does 1d6+`+b+` damage on a successful hit. `
      return text
    }
  },
  "ShadowStep" : {
    "type" : "act",
    "name" : "Shadow Step. Bonus action",
    "text" : `
    You may teleport up to 30 feet from one area of dim light or
    darkness to an unoccupied space that is also in an area of dim light or darkness. You may attempt a
    Hide action at the end of the teleport as part of the bonus action.
    `
  },
  "ShdwWeak" : {
    "type" : "sa",
    "name" : "Shadow Weakness",
    format (frame) {
      let dc = 8+bonus(frame,3)
      let lv = frame.lv
      let text = `
      When you hit a creature with a successful attack, you may spend a spell slot to force the
      target to make a Power save against DC `+dc+`. On a successful save, the target
      suffers disadvantage on Chasis ability checks and saving throws for 1 round per level of spell slot
      you expend. On a failed save, the target also deals half damage on weapon attacks and natural
      attacks for the same duration.
      `
    }
  },
}

export {EXTRAS}