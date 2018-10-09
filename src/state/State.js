import React, { Component } from "react"
import reducer from "./reducers"

class State extends Component {
  static defaultProps = {
    initialState: {
      player: { x: 0, y: 0 },
      walls: [],
      slider: { value: 0 },
    },
  }

  state = this.props.initialState

  actions = []
  stateHistory = [this.props.initialState]
  speedRatio = 1
  log = false
  isTraveling = false
  snapshotBeforeTravel = null
  travelStart = null
  animationId = null

  dispatch = action => {
    const newState = reducer(this.state, action)

    this.setState(newState, () => {
      action.meta = {
        timestamp: Date.now(),
      }

      if (!this.isTraveling) {
        this.actions.push(action)
        this.stateHistory.push(this.state)
      }

      if (this.log) {
        let border = "--------"
        let keys = Object.entries(action).reduce((acc, [key, value]) => {
          if (key === "meta") return acc
          return acc + `\n${key.toUpperCase()}: ${value}`
        }, "")
        console.log(border + keys + "\n" + border)

        console.log(this.actions)
      }
    })
  }

  travelIndex = 0

  travel = () => {
    if (this.travelIndex === this.stateHistory.length - 1) {
      this.isTraveling = false
      this.snapshotBeforeTravel = this.state
      return
    }

    const nextState = this.stateHistory[this.travelIndex + 1]

    const currentAction = this.actions[this.travelIndex]
    const nextAction = this.actions[this.travelIndex + 1]

    console.log({ currentAction, nextAction })
    console.log(this.travelIndex, this.stateHistory.length)
    console.log(this.actions)
    console.log(this.stateHistory)

    const timeBetweenNextActions = nextAction
      ? nextAction.meta.timestamp - currentAction.meta.timestamp
      : this.travelStart - currentAction.meta.timestamp

    this.setState(nextState)

    setTimeout(() => {
      this.animationId = window.requestAnimationFrame(this.travel)
      this.travelIndex++
    }, timeBetweenNextActions * this.speedRatio)
  }

  playHistory = () => {
    this.isTraveling = true
    const stateToStart = this.snapshotBeforeTravel || this.props.initialState

    this.travelStart = Date.now()

    this.setState(stateToStart, () => {
      setTimeout(() => {
        this.animationId = window.requestAnimationFrame(this.travel)
      }, this.speed)
    })
  }

  prevStateIndex = null

  // TODO Sync slider with the history
  slide = value => {
    const i = Math.floor((value * this.stateHistory.length) / 100)

    if (i !== this.prevStateIndex) {
      this.setState(this.stateHistory[i])
      this.prevStateIndex = i
    }
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationId)
  }

  render() {
    return this.props.children({
      state: this.state,
      dispatch: this.dispatch,
      playHistory: this.playHistory,
      slide: this.slide,
    })
  }
}

export default State
