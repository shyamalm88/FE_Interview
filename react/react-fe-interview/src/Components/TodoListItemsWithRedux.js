import React from "react";
import { useSelector } from "react-redux";

function TodoListItemsWithRedux() {
  const { todos } = useSelector((state) => state.Todo);
  return (
    <ul>
      {todos &&
        todos.map((x) => {
          return <li>{x.value}</li>;
        })}
    </ul>
  );
}

export default TodoListItemsWithRedux;
