import React, { Component } from "react"

class WallMover extends Component {
  static defaultProps = {
    x: 500,
    delay: 0,
    step: 20,
    tick: 1000,
    isFrozen: true,
    onMove: () => {},
  }

  state = {
    x: this.props.x,
    delay: this.props.delay,
    step: this.props.step,
    tick: this.props.tick,
    isFrozen: this.props.isFrozen,
  }

  animationId = null
  _isMounted = false
  start = null

  componentDidMount() {
    this._isMounted = true
    this.move()
    this.animateWithDelay()
  }

  componentWillUnmount() {
    this._isMounted = false
    this.cancelAnimation()
  }

  animateWithDelay = () => {
    this.cancelAnimation()

    setTimeout(() => {
      this.animationId = window.requestAnimationFrame(this.animate)
    }, this.props.delay)
  }

  cancelAnimation = () => {
    window.cancelAnimationFrame(this.animationId)
  }

  move = () => {
    this.setState(
      state => ({ x: state.x - state.step }),
      () => this.props.onMove({ x: this.state.x })
    )
  }

  animate = timestamp => {
    if (!this._isMounted) return

    if (this.state.isFrozen) return

    this.move()

    if (this.state.x > 0) {
      setTimeout(() => {
        this.animationId = window.requestAnimationFrame(this.animate)
      }, this.state.tick)
    }
  }

  toggleFrozen = () => {
    this.setState(
      state => ({ isFrozen: !state.isFrozen }),
      () => this.animate()
    )
  }

  render() {
    return this.props.children({
      x: this.state.x,
      toggleFrozen: this.toggleFrozen,
    })
  }
}

export default WallMover
