import React from "react";
import RestaurantShow from "./restaurant_show";
import { connect } from "react-redux";
import { fetchRestaurant } from "../../actions/restaurant_actions";
import { createReservation } from "../../actions/reservation_actions";
import { createReview, updateReview, deleteReview } from "../../actions/review_actions";

const mapStateToProps = state => ({
  restaurant: state.restaurant,
  currentUser: state.session.currentUser,
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurant: id => dispatch(fetchRestaurant(id)),
  createReservation: (restaurantId, reservation) => dispatch(createReservation(restaurantId, reservation)),
  createReview: (restaurantId, review) => dispatch(createReview(restaurantId, review)),
  updateReview: (restaurantId, review) => dispatch(updateReview(restaurantId, review)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);
