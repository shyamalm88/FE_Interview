import React from "react";
import HOC from "./common/HOC";

const TodoList = ({ data }) => {
  const renderUser = data.map((item) => {
    return <div key={item.id}>{item.title}</div>;
  });

  return <>{renderUser}</>;
};

const TodoListSearchList = HOC(TodoList, "todos");
export default TodoListSearchList;
