import "./App.css";
import CounterWithUseReducer from "./Components/CounterWithUseReducer";
import TodoListSearchList from "./Components/todos.list";
import UserSeachList from "./Components/user.list";

function App() {
  return (
    <div className="App">
      <UserSeachList />
      <TodoListSearchList />
      <CounterWithUseReducer />
    </div>
  );
}

export default App;
