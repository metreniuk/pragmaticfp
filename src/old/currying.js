import { add, evolve, subtract, flip } from "ramda";
// as a test ui it could be the app that lacks only the reducer

const minus = flip(subtract);

// encapsulates the return of state by default
const handleActions = handlers => (state, action) => {
  const { type } = action;
  return handlers.hasOwnProperty(type) ? handlers[type](state, action) : state;
};

// const move = curry((step, di))

const moveLeft = step => ({ x: minus(step) });
const moveRight = step => ({ x: add(step) });
const moveTop = step => ({ y: add(step) });
const moveBottom = step => ({ y: minus(step) });

const transforms = step => ({
  w: { y: add(step) },
  s: { y: minus(step) },
  a: { x: minus(step) },
  d: { x: add(step) }
});

const transforms2 = step => ({
  w: moveTop(step),
  s: moveBottom(step),
  a: moveLeft(step),
  d: moveRight(step)
});

const playerReducer = handleActions({
  PLAYER_MOVED: (state, { key, step }) => evolve(transforms2(step)[key], state)
});

const wallsReducer = handleActions({
  WALL_MOVED: (state, { step, index }) =>
    evolve({ [index]: evolve(moveLeft(step)) }, state)
});

// const playerReducer = (state, action) => {
//   const { type } = action;

//   if (type === "PLAYER_MOVED") {
//     const { key, step } = action;
//     const transforms = makeTransforms(step);
//     return evolve(transforms[key], state);
//   }

//   return state;
// };

// { x: 0, y: 0 }
// function playerReducer(state, action) {
//   if (!action.type === "PLAYER_MOVED") {
//     return state;
//   }

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

// []
// a good challenge to write an immutable walls reducer
// function wallsReducer(state, action) {
//   const { type } = action;

//   if (type === "WALL_MOVED") {
//     const { index, step } = action;
//     const newState = [];
//     for (let i = 0; i < state.length; i++) {
//       const { x } = state[i];
//       const newX = i === index ? x - step : x;
//       newState.push({ x: newX });
//     }

//     return newState;
//   }

//   return state;
// }

function combineReducers(reducers) {
  return function(state, action) {
    const finalState = {};
    for (let key in reducers) {
      const reducer = reducers[key];
      const subState = state[key];
      finalState[key] = reducer(subState, action);
    }
    return finalState;
    // return Object.entries(reducers).reduce(
    //   (acc, [key, reducer]) => ({ ...acc, [key]: reducer(state[key], action) }),
    //   {}
    // );
  };
}

const rootReducer = combineReducers({
  player: playerReducer,
  walls: wallsReducer
});
const initialState = {
  player: { x: 0, y: 0 },
  walls: [{ x: 190 }, { x: 200 }]
};
// const {player} = rootReducer(initialState, {
//   type: "PLAYER_MOVED",
//   key: "s",
//   step: 30
// });
const { walls } = rootReducer(initialState, {
  type: "WALL_MOVED",
  index: 1,
  step: 30
});
console.log(walls);
console.log(initialState);
export default () => {};
