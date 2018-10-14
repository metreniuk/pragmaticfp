import React from "react";
import State from "../state/State";
/*
Exercise 4
Theory: Elm (redux) architecture
Practice: First reducer
*/

/*
Notes for me:
- The data flow diagram
- The reducer should be a pure function
- Why is it important? Because it is totally predictable. 
  You can see what is happening in the system. 
  Nothing is hidden (bugs included).
- Reducer always returns a state
*/

// 🦄: The reducer should return a NEW state based on the action it receives.
// The action has a "type" property that indicates what is happening in the app.
// -----------
// The actions that can be dispatched are:
// - {type: 'INCREMENT'} the new state should be greater by one
// - {type: 'DECREMENT'} the new state should be less by one
// The state is a number that is the value of the counter.
function reducer(state, action) {
  // Write you code here 👇

  // the reducer should always return the state
  // even if it's not modifying it
  return state;
}

// 🌈This is a fancy way to write html inside JavaScript
// think of it just as html on steroids.
// Don't touch it 👀(at least if you don't know what you are doing).
const Usage = props => (
  <State initialState={0} reducer={reducer}>
    {({ state, dispatch }) => (
      <div>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        Counter: {state}
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      </div>
    )}
  </State>
);

export default Usage;
