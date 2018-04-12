import * as FavoriteApiUtil from '../util/favorite_api_util';

// export const RECEIVE_ALL_FAVORITES = "RECEIVE_ALL_FAVORITES";
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

// export const fetchFavorites = () => dispatch => (
//   FavoriteApiUtil.fetchFavorites().then(favorites => dispatch(receiveAllFavorites(favorites)))
// );

// export const fetchFavorite = (userId, id) => dispatch => (
//   FavoriteApiUtil.fetchFavorite(userId, id).then(favorite => dispatch(receiveFavorite(favorite)))
// );

export const createFavorite = (userId, restaurantId) => dispatch => (
  FavoriteApiUtil.createFavorite(restaurantId).then(restaurantId => dispatch(receiveFavorite(restaurantId)))
);

// export const updateFavorite = (userId, restaurantId) => dispatch => (
//   FavoriteApiUtil.updateFavorite(restaurantId, favorite).then(favorite => dispatch(receiveFavorite(favorite)))
// );

export const deleteFavorite = favoriteId => dispatch => (
  FavoriteApiUtil.deleteFavorite(favoriteId).then(restaurantId => dispatch(removeFavorite(favoriteId)))
);

// const receiveAllFavorites = favorites => ({
//   type: RECEIVE_ALL_FAVORITES,
//   favorites
// });

const receiveFavorite = favorite => ({
  type: RECEIVE_FAVORITE,
  favorite
});

const removeFavorite = favoriteId => ({
  type: REMOVE_FAVORITE,
  favoriteId
});
