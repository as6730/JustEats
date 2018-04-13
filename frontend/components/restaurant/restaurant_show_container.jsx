import React from "react";
import RestaurantShow from "./restaurant_show";
import { connect } from "react-redux";
import { fetchRestaurant } from "../../actions/restaurant_actions";
import { createReservation } from "../../actions/reservation_actions";
import { createReview, updateReview, deleteReview } from "../../actions/review_actions";
import { getUserFavorites, addFavorite, removeFavorite } from "../../actions/favorite_actions";

// add own props
const mapStateToProps = (state, ownProps) => ({
  restaurant: state.restaurants[ownProps.match.params.restaurantId],
  currentUser: state.session.currentUser,
  errors: state.errors.session,
  reviews: state.reviews,
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurant: id => dispatch(fetchRestaurant(id)),
  createReservation: (restaurantId, reservation) => dispatch(createReservation(restaurantId, reservation)),
  createReview: (restaurantId, review) => dispatch(createReview(restaurantId, review)),
  updateReview: (restaurantId, review) => dispatch(updateReview(restaurantId, review)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  getUserFavorites: () => dispatch(getUserFavorites()),
  addFavorite: (restaurantId) => dispatch(addFavorite(restaurantId)),
  removeFavorite: (restaurantId) => dispatch(removeFavorite(restaurantId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);


// find id through match params and take that restaurant out of state
