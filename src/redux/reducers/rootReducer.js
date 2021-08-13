import { combineReducers } from "redux";

import authReducer from "./authReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  todoData: todoReducer,
  auth: authReducer
});

export default rootReducer;
