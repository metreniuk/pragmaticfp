import React, { Fragment } from "react";
import State from "../state/State";
import PlayerMover from "../components/PlayerMover";
import { Player, Wrapper, World } from "../components/styled";
import Slider from "../components/Slider";
/*
Exercise 6
Theory: Higher-order function
Practice: Player reducer (with handleAction)
*/

/*
Notes for me:
- Talk about what problem we solve
*/

// The state indicates the coordinates of the player.
// It has the following shape: {x: 0, y: 0}
function reducer(state, action) {
  // You can use these constants in your code
  const { x, y } = state;
  const { type, key, step } = action;

  if (type === "PLAYER_MOVED") {
    if (key === "w") {
      return { x: x, y: y + step };
    }

    if (key === "s") {
      return { x: x, y: y - step };
    }

    if (key === "a") {
      return { x: x - step, y: y };
    }

    if (key === "d") {
      return { x: x + step, y: y };
    }
  }

  // the reducer should always return the state
  // even if it's not modifying it
  return state;
}

// 🌈This is a fancy way to write html inside JavaScript
// think of it just as html on steroids.
// Don't touch it 👀(at least if you don't know what you are doing).
const Usage = props => {
  const initialState = {
    x: 0,
    y: 0
  };

  return (
    <Wrapper>
      <World>
        <State initialState={initialState} reducer={reducer}>
          {({ state, dispatch, playHistory, slide }) => (
            <Fragment>
              {/*<Slider onChange={slide} />*/}
              <PlayerMover dispatch={dispatch}>
                {() => <Player x={state.x} y={state.y} onClick={playHistory} />}
              </PlayerMover>
            </Fragment>
          )}
        </State>
      </World>
    </Wrapper>
  );
};

export default Usage;
