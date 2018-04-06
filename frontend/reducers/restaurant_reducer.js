import { RECEIVE_RESTAURANT } from "../actions/restaurant_actions";

const RestaurantReducer = (state = [], action) => {
  // alert(JSON.stringify(action));
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANT:
      return action.payload.restaurant;
    default:
      return state;
  }
};

export default RestaurantReducer;
