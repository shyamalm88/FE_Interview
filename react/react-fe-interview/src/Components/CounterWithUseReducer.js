import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + (action.payload ? action.payload : 1) };
    case "decrement":
      return { counter: state.counter - (action.payload ? action.payload : 1) };
    default:
      return state;
  }
};
function CounterWithUseReducer() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const handleDecrement = () => {
    dispatch({ type: "decrement", payload: 1 });
  };
  const handleIncrement = () => {
    dispatch({ type: "increment", payload: 5 });
  };
  return (
    <div>
      <h2>Use Reducer Counter</h2>
      <button onClick={handleDecrement}>-</button>
      <>{state.counter}</>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default CounterWithUseReducer;
