import { combineReducers } from "redux";

import session from "./session_reducer";
import errors from "./errors_reducer";
import restaurant from "./restaurant_reducer";
import ui from './ui_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  restaurant,
  ui,
});

export default RootReducer;
