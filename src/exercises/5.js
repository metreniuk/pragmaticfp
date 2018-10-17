import React, { Fragment } from "react";
import State from "../state/State";
import PlayerMover from "../components/PlayerMover";
import { Player, Wrapper, World } from "../components/styled";
import Slider from "../components/Slider";
/*
Exercise 5
Theory: 
Practice: Player reducer
*/

/*
Notes for me:
- Introduce the "PLAYER_MOVED" action
- It is good to receive all properties from the action (ex: step)
  The reducer is responsible for the how the state changes not how much
- Introduce a new "RESET" action
*/

// 🦄: The reducer should return a NEW state based on the action it receives.
// The action has a "type" property that indicates what is happening in the app.
// ------
// In this example only one type of action can be dispatched:
// - {type: 'PLAYER_MOVED'}
// But the action can have other useful properties except of "type".
// Our action have following additional properties:
// - key: the keyboard button that the user pressed
// The only possibles keys in this app are: "w", "a", "s" and "d" (🎮🔫)
// - step: the distance that the player is moving
// Ex: {type: 'PLAYER_MOVED', key:'w', step: 30}
// Tip: you can use "console.log(action)" to see that is inside an action.
// Just press one of the keys: "w", "a", "s", "d".
// ------
// The state indicates the coordinates of the player.
// It has the following shape: {x: 0, y: 0}
function reducer(state, action) {
  // You can use these constants in your code
  const { x, y } = state;
  const { type, key, step } = action;
  // Write you code here 👇

  // console.log(action);

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
