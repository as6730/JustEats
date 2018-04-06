import React from "react";
import Restaurant from "./restaurant";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRestaurant } from "../../actions/restaurant_actions";

const mapStateToProps = state => ({
  restaurant: state.restaurant
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurant: id => dispatch(fetchRestaurant(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
