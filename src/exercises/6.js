import React, { Fragment } from "react";
import State from "../state/State";
import PlayerMover from "../components/PlayerMover";
import { Player, Wrapper, World } from "../components/styled";
/*
Exercise 6
Theory: Higher-order function
Practice: Player reducer (with handleAction)
*/

/*
Notes for me:
- Talk about the problems we have:
  * We should always remember to return the state
  * One function seems to be responsible for a lot of things (what if more actions will appear?)
- Introduce "handleAction" 
- Make an anology between click handler and handleAction
- It solves the first problem, but now we can't handle only one action
- Introduce "handleActions"
- Both problems are solved:
  * We are focusing only on one action (one function per action).
    Less load for the mind.
  * The state is always returned by default (we just can not think about it anymore)
- Let the computer make the hard work for you
*/

function handleAction(actionType, reducer) {
  return (state, action) => {
    // Write you code here 👇
  };
}

// The state indicates the coordinates of the player.
// It has the following shape: {x: 0, y: 0}
const reducer = (state, action) => {
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

    return state;
  }

  if (type === "RESET") {
    return { x: 0, y: 0 };
  }

  // the reducer should always return the state
  // even if it's not modifying it
  return state;
};

// 2
// function handleAction(actionType, reducer) {
//   return (state, action) => {
//     if (action.type === actionType) {
//       return reducer(state, action);
//     }

//     return state;
//   };
// }

// const reducer2 = handleAction("PLAYER_MOVED", function(state, action) {
//   const { x, y } = state;
//   const { key, step } = action;

//   if (key === "w") {
//     return { x: x, y: y + step };
//   }

//   if (key === "s") {
//     return { x: x, y: y - step };
//   }

//   if (key === "a") {
//     return { x: x - step, y: y };
//   }

//   if (key === "d") {
//     return { x: x + step, y: y };
//   }

//   return state;
// });

// // 3
// function handleActions(handlers) {
//   return (state, action) => {
//     const { type } = action;

//     if (handlers.hasOwnProperty(type)) {
//       const reducer = handlers[type];
//       return reducer(state, action);
//     }
//     return state;
//   };
// }

// function handlePlayerMove(state, action) {
//   const { x, y } = state;
//   const { key, step } = action;

//   if (key === "w") {
//     return { x: x, y: y + step };
//   }

//   if (key === "s") {
//     return { x: x, y: y - step };
//   }

//   if (key === "a") {
//     return { x: x - step, y: y };
//   }

//   if (key === "d") {
//     return { x: x + step, y: y };
//   }

//   return state;
// }

// function handleReset() {
//   return { x: 0, y: 0 };
// }

// const reducer3 = handleActions({
//   PLAYER_MOVED: handlePlayerMove,
//   RESET: handleReset
// });

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
      <State initialState={initialState} reducer={reducer}>
        {({ state, dispatch, playHistory, slide }) => (
          <Fragment>
            <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
            <World>
              <PlayerMover dispatch={dispatch}>
                {() => <Player x={state.x} y={state.y} onClick={playHistory} />}
              </PlayerMover>
            </World>
          </Fragment>
        )}
      </State>
    </Wrapper>
  );
};

export default Usage;
