import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class RestaurantShow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // this.props.fetchRestaurant(1);
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
  }

  componentWillReceiveProps(nextProps) {
    this.props.fetchRestaurant(nextProps.match.params.restaurantId);
  }

  render() {
    const restaurant = this.props.restaurant;
    return (
      <div>
        <h1>{restaurant.name}</h1>
        <p>{restaurant.description}</p>
        <ul>
          // <li>{restaurant.phone_number}</li>
          // <li>{restaurant.website_link}</li>
          // <li>{restaurant.hours}</li>
          // <li>{restaurant.dining_style}</li>
          // <li>{restaurant.dress_code}</li>
          // <li>{restaurant.executive_chef}</li>
          // <li>{restaurant.price_range}</li>
          // <li>{restaurant.private_party_facilities}</li>
          // <li>{restaurant.private_party_contact}</li>
        </ul>
      </div>
    );
  }
}

export default withRouter(RestaurantShow);
