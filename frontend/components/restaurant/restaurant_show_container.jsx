import React from "react";
import RestaurantShow from "./restaurant_show";
import { connect } from "react-redux";
import { fetchRestaurant } from "../../actions/restaurant_actions";
import { createReservation } from "../../actions/reservation_actions";
import { createReview, updateReview, deleteReview } from "../../actions/review_actions";

//add own props
const mapStateToProps = (state, ownProps) => ({
  restaurant: state.restaurants[ownProps.match.params.restaurantId],
  currentUser: state.session.currentUser,
  errors: state.errors.session,
  reviews: state.entities.reviews
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurant: id => dispatch(fetchRestaurant(id)),
  createReservation: (restaurantId, reservation) => dispatch(createReservation(restaurantId, reservation)),
  createReview: (restaurantId, review) => dispatch(createReview(restaurantId, review)),
  updateReview: (restaurantId, review) => dispatch(updateReview(restaurantId, review)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  createFavorite: (userId, restaurantId) => dispatch(createFavorite(userId, restaurantId)),
  deleteFavorite: (userId, restaurantId) => dispatch(deleteFavorite(userId, restaurantId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);


//find id through match params and take that restaurant out of state
