import React from "react";
import RestaurantShow from "./restaurant_show";
import { connect } from "react-redux";
import { fetchRestaurant } from "../../actions/restaurant_actions";

const mapStateToProps = state => ({
  restaurant: state.restaurant
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurant: id => dispatch(fetchRestaurant(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow);
