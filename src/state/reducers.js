// { x: 0, y: 0 }
function player(state, action) {
  const endOfWorldX = [0, 500]
  const endOfWorldY = [0, 170]

  if (!action.type === "PLAYER_MOVED") {
    return state
  }

  const { x, y } = state
  const { key, step } = action

  if (key === "w") {
    if (y > endOfWorldY[1]) return state

    return { x: x, y: y + step }
  }

  if (key === "s") {
    if (y < endOfWorldY[0]) return state

    return { x: x, y: y - step }
  }

  if (key === "a") {
    if (x < endOfWorldX[0]) return state

    return { x: x - step, y: y }
  }

  if (key === "d") {
    if (x > endOfWorldX[1]) return state

    return { x: x + step, y: y }
  }
}

// []
function walls(state, action) {
  return state
}

function reducer(state, action) {
  return {
    player: player(state.player, action),
    walls: walls(state.walls, action),
  }
}

export default reducer
