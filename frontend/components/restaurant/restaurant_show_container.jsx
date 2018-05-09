import React from "react";
import RestaurantShow from "./restaurant_show";
import { connect } from "react-redux";
import { fetchRestaurant } from "../../actions/restaurant_actions";
import { fetchReservations, createReservation, deleteReservation } from "../../actions/reservation_actions";
import { createReview, updateReview, deleteReview } from "../../actions/review_actions";
import { getUserFavorites, addFavorite, removeFavorite } from "../../actions/favorite_actions";

const mapStateToProps = (state, ownProps) => ({
  restaurant: state.restaurants[ownProps.match.params.restaurantId],
  currentUser: state.session.currentUser,
  errors: state.errors.session,
  reviews: state.reviews,
  reservations: state.reservations,
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurant: id => dispatch(fetchRestaurant(id)),
  fetchReservations: () => dispatch(fetchReservations()),
  createReservation: (restaurantId, reservation) => dispatch(createReservation(restaurantId, reservation)),
  deleteReservation: (restaurantId) => dispatch(deleteReservation(restaurantId)),
  createReview: (restaurantId, review) => dispatch(createReview(restaurantId, review)),
  updateReview: (restaurantId, review) => dispatch(updateReview(restaurantId, review)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  getUserFavorites: () => dispatch(getUserFavorites()),
  addFavorite: (restaurantId) => dispatch(addFavorite(restaurantId)),
  removeFavorite: (restaurantId) => dispatch(removeFavorite(restaurantId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);


// find id through match params and take that restaurant out of state
