import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + (action.payload ? action.payload : 1) };
    case "DECREMENT":
      return { counter: state.counter - (action.payload ? action.payload : 1) };
    default:
      break;
  }
};
function CounterWithUseReducer() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <div>
      <button onClick={(e) => dispatch({ type: "INCREMENT", payload: 5 })}>
        +
      </button>
      <>{state.counter}</>
      <button onClick={(e) => dispatch({ type: "DECREMENT", payload: 2 })}>
        -
      </button>
    </div>
  );
}

export default CounterWithUseReducer;
