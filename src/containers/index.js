import React, { Fragment } from "react"
import { Wrapper, World, Wall, Hole, Player } from "../components/styled"
import { PlayerMover, WallMover, Tracker, Slider } from "../components"
import State from "../state/State"

// TODO timestamp for actions
const SmartPlayer = () => (
  <State>
    {({ state, dispatch, playHistory, slide }) => (
      <Fragment>
        <Slider onChange={slide} />
        <PlayerMover x={state.player.x} y={state.player.y} dispatch={dispatch}>
          {({ x, y }) => (
            <Player
              x={state.player.x}
              y={state.player.y}
              onClick={playHistory}
            />
          )}
        </PlayerMover>
      </Fragment>
    )}
  </State>
)

const PlayerWorld = () => (
  <Wrapper>
    <World>
      <SmartPlayer />
    </World>
  </Wrapper>
)

const SmartWall = () => (
  <WallMover x={400} isFrozen={true}>
    {({ x, toggleFrozen }) => (
      <Wall x={x} onClick={toggleFrozen}>
        <Hole y={30} size={40} />
        <Hole y={100} size={20} />
      </Wall>
    )}
  </WallMover>
)

const WallWorld = () => (
  <Wrapper>
    <World>
      <SmartWall />
    </World>
  </Wrapper>
)

export { SmartPlayer, PlayerWorld, WallWorld }
