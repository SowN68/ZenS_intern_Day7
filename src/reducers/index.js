
import { combineReducers } from "redux";
import reducerTodo from "./todo";

const rootReducers = combineReducers({
  todo: reducerTodo
})
export default rootReducers