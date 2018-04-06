import * as APIUtil from "../util/restaurant_api_util";

export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";

const receiveRestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  payload: restaurant
});

export const fetchRestaurant = id => dispatch =>
  APIUtil.fetchRestaurant(id).then(restaurant =>
    dispatch(receiveRestaurant(restaurant))
  );
