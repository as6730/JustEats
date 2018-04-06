import { combineReducers } from "redux";

import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import restaurantReducer from "./restaurant_reducer";

const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  restaurant: restaurantReducer
});

export default RootReducer;
