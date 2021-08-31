import React, { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
/*****
 * takes in 2 args the current state and an action that will be passed into dispatch
 */
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
const UseReducerPageComplex = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    // dispatch({ type: "increment" });
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    // dispatch({ type: "decrement" });
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default UseReducerPageComplex;
