import "./App.css";
import CounterWithUseReducer from "./Components/CounterWithUseReducer";
import TodoListSearchList from "./Components/todos.list";
import { TreeView } from "./Components/treeView";
import UserSeachList from "./Components/user.list";
import { explorerData as data } from "../src/data/data";
import Products from "./Components/Products";
import { useEffect, useState } from "react";
import TodoWithRedux from "./Components/TodoWithRedux";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      {/* <UserSeachList /> */}
      {/* <TodoListSearchList /> */}
      {/* <CounterWithUseReducer /> */}
      {/* <br /> */}
      {/* <TreeView data={data} /> */}
      <Products />
      {/* <Provider store={store}>
        <TodoWithRedux />
      </Provider> */}
    </div>
  );
}

export default App;
