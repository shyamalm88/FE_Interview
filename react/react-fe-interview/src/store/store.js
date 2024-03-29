import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import TodoReducer from "../reducers/todoReducer";

const middleWare = [thunk];
const reducer = combineReducers({
  Todo: TodoReducer,
});
const initialState = {};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleWare)
);

export default store;
