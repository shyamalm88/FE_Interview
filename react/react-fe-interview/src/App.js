import "./App.css";
import CounterWithUseReducer from "./Components/CounterWithUseReducer";
import TodoListSearchList from "./Components/todos.list";
import { TreeView } from "./Components/treeView";
import UserSeachList from "./Components/user.list";
import { explorerData as data } from "../src/data/data";

function App() {
  return (
    <div className="App">
      <UserSeachList />
      <TodoListSearchList />
      <CounterWithUseReducer />
      <br />
      <TreeView data={data} />
    </div>
  );
}

export default App;
