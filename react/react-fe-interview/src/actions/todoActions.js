export const AddTodo = (todo) => (dispatch, getState) => {
  console.log(getState());
  const {
    Todo: { todos },
  } = getState();

  const hasTodo = todos.find((item) => item.value === todo.value);
  if (!hasTodo) {
    dispatch({ type: "ADD_TODO", payload: [todo, ...todos] });
  }
};
