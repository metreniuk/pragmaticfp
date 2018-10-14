const makeStore = (initialState = {}, reducer) => {
  let state = initialState;
  let listeners = [];

  return {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach(l => l(state));
    },
    subscribe(listener) {
      listeners.push(listener);

      return () => {
        listeners = listeners.filter(l => l !== listener);
      };
    }
  };
};

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }

  if (action.type === "DECREMENT") {
    return state - 1;
  }

  return state;
};

const store = makeStore(0, reducer);

const unsubscribe = store.subscribe(state => console.log(state));

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
unsubscribe();
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "DECREMENT" });

export default makeStore;
