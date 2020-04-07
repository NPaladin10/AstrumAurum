const AI = (app,mecha)=>{

  let ai = mecha._frame.AI.split(".")
  let path = mecha._path
  
  //determine ranges and attacks
  let aiRange = ai[1]
  let atkType = aiRange == "melee" ? "matk" : "ratk"
  //check if limited attacks 
  let lu = mecha[atkType].find(a => a.limited[0] && a.limited[1])
  let atk = lu || mecha[atkType][0]

  //seek function
  const seek = ()=>{
    mecha._moveTo = app.map.seekQueue(...mecha._p).split(".").map(Number)
    //pathfind to position
    path = mecha.pathfind([])
  }

  //target function 
  const needsTarget = ()=>{
    if (ai.length < 2)
      return false
    return ["melee", "ranged"].includes(ai[1])
  }

  const target = ()=>{
    let hasTarget = mecha._target ? true : false
    if (hasTarget) return true
    //check if needs a target 
    if (!needsTarget) return false

    //get FOV to get visible targets 
    mecha.FOV()
    let vis = mecha._visible
    if (vis.length > 0) {
      //check for in range 
      let inRange = mecha._visible.filter(v=>v[1] <= mecha.maxAtkR)
      if (inRange.length > 0) {
        //set target 
        mecha._target = chance.pickone(inRange)[0]
        return true 
      } else {
        //check if has target 
        let mAtP = app.mechaManager.byPos(mecha._moveTo)
        if(mAtP && mAtP._faction != mecha._faction) return false
        //pick closest and move to 
        let T = vis.reduce((cT,_t)=>{
          return _t[1] < cT[1] ? _t : cT
        }
        , [null, Infinity])
        //move to target position
        mecha._moveTo = T[0]._p
        //pathfind
        path = mecha.pathfind([])
        return false 
      }
    }
  }

  //attack
  const attack = ()=>{
    mecha._nAct++
    //check for limited attack - use it 
    if(atk.limited[0]) atk.limited[1] = false 
    //now attack 
    mecha.attack(atk,mecha._target)
  }

  //move 
  const aiMove = ()=>{
    mecha._nAct++
    mecha._move += mecha.maxMove
    while (mecha._move > 0) {
      //move and remove first 
      mecha.move(path[0])
      path.shift()
      //update map 
      app.map.draw()
      //check path 
      if (path.length == 0)
        seek()
      //acquire target
      if (target())
        break
    }
  }

  //take two actions 
  while (mecha._nAct < 2) {
    //first seek path 
    if (ai[0] == "seek" && path.length == 0) {
      seek()
    }
    //act on target or move 
    if (target()) {
      attack()
    } else if (path.length > 0) {
      aiMove()
    }
  }

}

export {AI}
