import * as APIUtil from "../util/restaurant_api_util";

export const RECEIVE_ALL_RESTAURANTS = "RECEIVE_ALL_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const REMOVE_RESTAURANT = "REMOVE_RESTAURANT";

export const fetchRestaurants = () => dispatch =>
  PostApiUtil.fetchRestaurants().then(restaurants =>
    dispatch(receiveAllRestaurants(restaurants))
  );

export const fetchRestaurant = id => dispatch =>
  APIUtil.fetchRestaurant(id).then(restaurant =>
    dispatch(receiveRestaurant(restaurant))
  );

export const createRestaurant = restaurant => dispatch =>
  PostApiUtil.createRestaurant(restaurant).then(restaurant =>
    dispatch(receiveRestaurant(restaurant))
  );

export const updateRestaurant = restaurant => dispatch =>
  PostApiUtil.updateRestaurant(restaurant).then(restaurant =>
    dispatch(receiveRestaurant(restaurant))
  );

export const deleteRestaurant = restaurantId => dispatch =>
  PostApiUtil.deleteRestaurant(restaurantId).then(restaurant =>
    dispatch(removeRestaurant(restaurantId))
  );

const receiveAllRestaurants = restaurants => ({
  type: RECEIVE_ALL_RESTAURANTS,
  restaurants
});

const receiveRestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  payload: restaurant
});

const removeRestaurant = restaurantId => ({
  type: REMOVE_RESTAURANT,
  restaurantId
});