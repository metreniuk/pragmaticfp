import React, { Fragment } from "react";
import State from "../state/State";
import PlayerMover from "../components/PlayerMover";
import { Player, Wrapper, World } from "../components/styled";

/*
Exercise 7
Theory: Composability
Practice: Ramda??
*/

/*
Notes for me:
- We solved some problems, but let's see what's left.
- Let's look for patterns inside "handlePlayerMove".
  * inside each "if" statement we are changning only one property
  * inside each "if" statement we are adding or subtracting the property
- Let's solve the issues:
  * (1) we can map the operation to an identifier or a key
  * (2) we can abstract the addition or the substraction of a property with a direction

Mention the pattern: "obj[key]()"

- What we gained:
  * (1) no conditionals DRY
  * (1) no free space where to write code == no space for human error (don't be too marginal)
  * (2) code reuse, who can tell what we can reuse in other part of the app (show the app)?
    we can reuse the same code for the player and for the wall (they both move left)

We can achieve even better result using specific functions that are beyond this workshop
*/

function handleActions(handlers) {
  return (state, action) => {
    const { type } = action;

    if (handlers.hasOwnProperty(type)) {
      const reducer = handlers[type];
      return reducer(state, action);
    }
    return state;
  };
}

function handlePlayerMove(state, action) {
  const { x, y } = state;
  const { key, step } = action;

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

function handleReset() {
  return { x: 0, y: 0 };
}

// 1

// const playerMoves = {
//   w: (state, action) => ({ x: state.x, y: state.y + action.step }),
//   s: (state, action) => ({ x: state.x, y: state.y - action.step }),
//   a: (state, action) => ({ x: state.x - action.step, y: state.y }),
//   d: (state, action) => ({ x: state.x + action.step, y: state.y })
// };

// const handlePlayerMove = (state, action) => {
//   const reducer = playerMoves[action.key];

//   return reducer(state, action);
// };

// 2

// const moveUp = (state, action) => ({ x: state.x, y: state.y + action.step });
// const moveDown = (state, action) => ({ x: state.x, y: state.y - action.step });
// const moveLeft = (state, action) => ({ x: state.x - action.step, y: state.y });
// const moveRight = (state, action) => ({ x: state.x + action.step, y: state.y });

// const playerMoves = {
//   w: moveUp,
//   s: moveDown,
//   a: moveLeft,
//   d: moveRight
// };

// const handlePlayerMove = (state, action) =>
//   playerMoves[action.key](state, action);

// const transforms = step => ({
//   w: { y: add(step) },
//   s: { y: minus(step) },
//   a: { x: minus(step) },
//   d: { x: add(step) }
// });

// The state indicates the coordinates of the player.
// It has the following shape: {x: 0, y: 0}
const reducer = handleActions({
  PLAYER_MOVED: handlePlayerMove,
  RESET: handleReset
});

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
