import { combineReducers } from "redux";

import SessionReducer from "./session_reducer";
import ErrorsReducer from "./errors_reducer";

const RootReducer = combineReducers({
  sessionReducer,
  errorsReducer
});

export default RootReducer;
