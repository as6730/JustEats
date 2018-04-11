import React from "react";
import RestaurantShow from "./restaurant_show";
import { connect } from "react-redux";
import { fetchRestaurant } from "../../actions/restaurant_actions";
import { createReservation } from "../../actions/reservation_actions";

const mapStateToProps = state => ({
  restaurant: state.restaurant
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurant: id => dispatch(fetchRestaurant(id)),
  createReservation: (restaurantId, reservation) => dispatch(createReservation(restaurantId, reservation))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);
