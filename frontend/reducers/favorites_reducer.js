import {
  RECEIVE_ALL_FAVORITES,
  RECEIVE_FAVORITE,
  REMOVE_FAVORITE
} from '../actions/favorite_actions';
import merge from "lodash/merge";

const FavoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_FAVORITES:
      return action.payload;
    case RECEIVE_FAVORITE:
      newState[action.payload.id] = action.payload;
      return newState;
    case REMOVE_FAVORITE:
      delete newState[action.restaurantId];
      return newState;
    default:
      return state;
  }
};

export default FavoritesReducer;
