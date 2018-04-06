import {
  RECEIVE_ALL_RESTAURANTS,
  RECEIVE_RESTAURANT,
  REMOVE_RESTAURANT
} from "../actions/restaurant_actions";
import merge from "lodash/merge";

const RestaurantReducer = (state = {}, action) => {
  // alert(JSON.stringify(action));
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_RESTAURANTS:
      return action.payload.restaurants;
    case RECEIVE_RESTAURANT:
      return action.payload.restaurant;
    // return merge({}, oldState, { [action.post.id]: action.post });
    case REMOVE_RESTAURANT:
      let newState = merge({}, state);
      delete newState[action.payload.restaurantId];
      return newState;
    default:
      return state;
  }
};

export default RestaurantReducer;
