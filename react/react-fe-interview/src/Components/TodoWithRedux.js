import React, { useState } from "react";
import TodoListItemsWithRedux from "./TodoListItemsWithRedux";
import { useDispatch } from "react-redux";
import { AddTodo } from "../actions/todoActions";

function TodoWithRedux() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSet = () => {
    dispatch(AddTodo({ id: Date.now(), value }));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSet}>Set</button>
      <TodoListItemsWithRedux />
    </div>
  );
}

export default TodoWithRedux;
