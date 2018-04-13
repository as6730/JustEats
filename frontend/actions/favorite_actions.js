import * as FavoriteApiUtil from '../util/favorite_api_util';

export const RECEIVE_ALL_FAVORITES = "RECEIVE_ALL_FAVORITES";
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const getUserFavorites = () => dispatch => (
  FavoriteApiUtil.getUserFavorites().then((restaurants) => {
    dispatch(receiveAllFavorites(restaurants))
  })
);

export const addFavorite = (restaurantId) => dispatch => (
  FavoriteApiUtil.addFavorite(restaurantId).then((restaurant) => {
    dispatch(receiveFavorite(restaurant))
  })
);

export const removeFavorite = restaurantId => dispatch => (
  FavoriteApiUtil.removeFavorite(restaurantId).then((restaurantId) => {
    dispatch(removeFavoriteAction(restaurantId))
  })
);

const receiveAllFavorites = (favorites) => ({
  type: RECEIVE_ALL_FAVORITES,
  payload: favorites
});

const receiveFavorite = restaurant => ({
  type: RECEIVE_FAVORITE,
  payload: restaurant
});

const removeFavoriteAction = restaurantId => ({
  type: REMOVE_FAVORITE,
  restaurantId
});
