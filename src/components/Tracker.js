import React, { Component } from "react"

const wallWidth = 10
const playerWidth = 30
const playerHeight = 30

class Tracker extends Component {
  state = { walls: {}, player: { x: 0, y: 0, width: 30, height: 30 } }
  componentDidUpdate(prevProps, prevState) {
    if (this.checkIfWorldCollapsed(this.state)) {
      console.log("The world just collapsed!!!")
      alert("You lost! I'm so sorry... ")
      window.location.reload()
    }
  }

  checkIfWorldCollapsed = ({ player, walls }) => {
    const playerRight = player.x + player.width
    const playerTop = player.y + player.height
    // console.log(Object.values(walls).map(x => x.holes))
    return Object.values(walls).some(
      wall =>
        wall.x - playerRight < 0 &&
        wall.x + wall.width - player.x > 0 &&
        // at least one hole should pass
        wall.holes.every(
          hole => player.y - hole.y < 0 || hole.y + hole.size - playerTop < 0
        )
    )
  }

  updatePlayer = ({ x, y }) => {
    this.setState(state => ({ player: { ...state.player, x, y } }))
  }

  updateWall = ({ key, holes }) => ({ x }) => {
    this.setState(state => ({
      walls: {
        ...state.walls,
        [key]: { width: 10, x, holes },
      },
    }))
  }

  render() {
    return this.props.children({
      updatePlayer: this.updatePlayer,
      updateWall: this.updateWall,
    })
  }
}

export default Tracker
