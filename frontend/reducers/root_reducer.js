import { combineReducers } from "redux";

import session from "./session_reducer";
import errors from "./errors_reducer";
import restaurant from "./restaurant_reducer";
import reservations from "./reservations_reducer";
import review from "./review_reducer";
import ui from './ui_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  restaurant,
  reservations,
  review,
  ui,
});

export default RootReducer;
