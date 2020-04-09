//max lv, Core Points, Total Power Levels
const POWERCORE = [
  [1,2,2],
  [1,3,3],
  [2,7,5],
  [2,9,6],
  [3,14,9],
  [3,16,11],
  [4,19,13],
  [4,22,15],
  [5,29,19],
  [5,32,22],
  [6,37,25],
  [6,39,27],
  [7,42,29],
  [7,45,30],
  [8,47,32],
  [8,50,34],
  [9,54,37],
  [9,57,39],
  [9,62,42],
  [9,67,46]
]

const NABILITY = [0,0,0,1,1,2,2,3,3,3,3,4,4,5,5,6,6,6,7,7]

const COST = [1,3,9,27,65,140,230,340,480,640,850,1000,1200,1400,1650,1950,2250,2650,3050,3550]

const stats = (lv) => {
  let natks = lv >= 20 ? 4 : lv >= 11 ? 3 : lv >= 5 ? 2 : 1 
  let reroll = lv >= 17 ? 3 : lv >= 13 ? 2 : lv >= 9 ? 1 : 0
  let nability = lv > 20 ? 7 : NABILITY[lv-1]
  let nsurge = lv >= 17 ? 2 : lv >= 2 ? 1 : 0 
  let hp = 10 + (lv-1)*6
  let b = 2+Math.floor((lv-1)/4)
  let cost = COST[lv-1]

  return {lv,b,hp,nsurge,natks,reroll,nability,cost} 
}

export {stats,POWERCORE}