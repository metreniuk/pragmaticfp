import React from "react";

const endOfWorldX = [0, 500];
const endOfWorldY = [0, 170];

const go = false;

const prop = k => o => o[k];

class PlayerMover extends React.Component {
  state = { x: 0, y: 0, step: 10 };

  componentDidMount() {
    document.addEventListener("keydown", this.handleMove);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleMove);
  }

  handleMove = e => {
    switch (e.key) {
      case "ArrowLeft":
        this.setState(
          ({ x, step }) => (x > endOfWorldX[0] ? { x: x - step } : null),
          () => this.props.onMove({ x: this.state.x, y: this.state.y })
        );
        break;
      case "ArrowRight":
        this.setState(
          ({ x, step }) => (x < endOfWorldX[1] ? { x: x + step } : null),
          () => this.props.onMove({ x: this.state.x, y: this.state.y })
        );
        break;
      case "ArrowUp":
        this.setState(
          ({ y, step }) => (y < endOfWorldY[1] ? { y: y + step } : null),
          () => this.props.onMove({ x: this.state.x, y: this.state.y })
        );
        break;
      case "ArrowDown":
        this.setState(
          ({ y, step }) => (y > endOfWorldY[0] ? { y: y - step } : null),
          () => this.props.onMove({ x: this.state.x, y: this.state.y })
        );
        break;
    }
  };

  render() {
    return this.props.children({ x: this.state.x, y: this.state.y });
  }
}

class WallMover extends React.Component {
  state = {
    x: this.props.x || 500,
    delay: this.props.delay || 0,
    step: this.props.step || 20,
    tick: this.props.tick || 500
  };
  animationId = null;
  _isMounted = false;
  start = null;

  move = () => {
    this.setState(
      state => ({ x: state.x - state.step }),
      () => this.props.onMove({ x: this.state.x })
    );
  };

  animate = timestamp => {
    if (!this._isMounted) return;

    this.move();

    if (this.state.x > 0) {
      setTimeout(() => {
        this.animationId = window.requestAnimationFrame(this.animate);
      }, this.state.tick);
    }
  };

  componentDidMount() {
    this._isMounted = true;
    this.move();
    if (this.animationId) return;
    setTimeout(() => {
      if (!go) return;
      this.animationId = window.requestAnimationFrame(this.animate);
    }, this.props.delay);
  }

  componentWillUnmount() {
    this._isMounted = false;
    window.cancelAnimationFrame(this.animationId);
  }

  render() {
    return this.props.children({ x: this.state.x });
  }
}

const wallWidth = 10;
const playerWidth = 30;
const playerHeight = 30;

class Tracker extends React.Component {
  state = { walls: {}, player: { x: 0, y: 0, width: 30, height: 30 } };
  componentDidUpdate(prevProps, prevState) {
    if (this.checkIfWorldCollapsed(this.state)) {
      console.log("The world just collapsed!!!");
      alert("You lost! I'm so sorry... ");
      window.location.reload();
    }
  }

  checkIfWorldCollapsed = ({ player, walls }) => {
    const playerRight = player.x + player.width;
    const playerTop = player.y + player.height;
    // console.log(Object.values(walls).map(x => x.holes))
    return Object.values(walls).some(
      wall =>
        wall.x - playerRight < 0 &&
        wall.x + wall.width - player.x > 0 &&
        // at least one hole should pass
        wall.holes.every(
          hole => player.y - hole.y < 0 || hole.y + hole.size - playerTop < 0
        )
    );
  };

  updatePlayer = ({ x, y }) => {
    this.setState(state => ({ player: { ...state.player, x, y } }));
  };

  updateWall = ({ key, holes }) => ({ x }) => {
    this.setState(state => ({
      walls: {
        ...state.walls,
        [key]: { width: 10, x, holes }
      }
    }));
  };

  render() {
    return this.props.children({
      updatePlayer: this.updatePlayer,
      updateWall: this.updateWall
    });
  }
}

export { PlayerMover, WallMover, Tracker };
