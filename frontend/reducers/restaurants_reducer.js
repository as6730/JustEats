import {
  RECEIVE_ALL_RESTAURANTS,
  RECEIVE_RESTAURANT,
  REMOVE_RESTAURANT
} from "../actions/restaurant_actions";
import {
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
} from '../actions/review_actions';
import merge from "lodash/merge";


const RestaurantsReducer = (state = {}, action) => {
  console.log(action.payload)
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_RESTAURANTS:
      return action.payload;
    case RECEIVE_RESTAURANT:
      newState[action.payload.restaurant.id] = action.payload.restaurant;
      return newState;
    case REMOVE_RESTAURANT:
      delete newState[action.payload.restaurantId];
      return newState;
    default:
      return state;
  }
};

export default RestaurantsReducer;
