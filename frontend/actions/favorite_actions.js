import * as FavoriteApiUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const createFavorite = (userId, restaurantId) => dispatch => (
  FavoriteApiUtil.createFavorite(restaurantId).then(restaurantId => dispatch(receiveFavorite(restaurantId)))
);

export const deleteFavorite = favoriteId => dispatch => (
  FavoriteApiUtil.deleteFavorite(favoriteId).then(restaurantId => dispatch(removeFavorite(favoriteId)))
);

const receiveFavorite = favorite => ({
  type: RECEIVE_FAVORITE,
  favorite
});

const removeFavorite = favoriteId => ({
  type: REMOVE_FAVORITE,
  favoriteId
});
