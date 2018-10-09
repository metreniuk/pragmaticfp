import React, { Component } from "react"

const endOfWorldX = [0, 500]
const endOfWorldY = [0, 170]

class PlayerMover extends React.Component {
  static defaultProps = {
    onMove: () => {},
    dispatch: () => {},
  }

  state = { x: 0, y: 0, step: 30 }

  componentDidMount() {
    document.addEventListener("keydown", this.handleMove)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleMove)
  }

  handleMove = e => {
    if (!["w", "a", "s", "d"].includes(e.key)) return

    this.props.dispatch({
      type: "PLAYER_MOVED",
      key: e.key,
      step: this.state.step,
    })

    // switch (e.key) {
    //   case "a":
    //     this.setState(
    //       ({ x, step }) => (x > endOfWorldX[0] ? { x: x - step } : null),
    //       () => this.props.onMove({ x: this.state.x, y: this.state.y })
    //     )
    //     break
    //   case "d":
    //     this.setState(
    //       ({ x, step }) => (x < endOfWorldX[1] ? { x: x + step } : null),
    //       () => this.props.onMove({ x: this.state.x, y: this.state.y })
    //     )
    //     break
    //   case "w":
    //     this.setState(
    //       ({ y, step }) => (y < endOfWorldY[1] ? { y: y + step } : null),
    //       () => this.props.onMove({ x: this.state.x, y: this.state.y })
    //     )
    //     break
    //   case "s":
    //     this.setState(
    //       ({ y, step }) => (y > endOfWorldY[0] ? { y: y - step } : null),
    //       () => this.props.onMove({ x: this.state.x, y: this.state.y })
    //     )
    //     break
    // }
  }

  render() {
    return this.props.children({ x: this.state.x, y: this.state.y })
  }
}

export default PlayerMover
