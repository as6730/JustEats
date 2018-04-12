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

const RestaurantReducer = (state = {}, action) => {
  // alert(JSON.stringify(action));
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_RESTAURANTS:
      return action.payload.restaurants;
    case RECEIVE_RESTAURANT:
      return action.payload.restaurant;
    // return merge({}, oldState, { [action.post.id]: action.post });
    case RECEIVE_REVIEW:
      newState.reviews = newState.reviews.filter(review => review.id !== action.review.id);
      newState.reviews.unshift(action.review);
      return newState;
    case REMOVE_REVIEW:
      newState.reviews = newState.reviews.filter(review => review.id !== action.reviewId);
      return newState;
    case REMOVE_RESTAURANT:
      delete newState[action.payload.restaurantId];
      return newState;
    default:
      return state;
  }
};

export default RestaurantReducer;
