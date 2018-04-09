import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import RestaurantHeader from "./restaurant_header";
import RestaurantTags from "./restaurant_tags";

class RestaurantShow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
  }

  // add if else to see if the url is the same
  componentWillReceiveProps(nextProps) {}

  getBackgroundImage() {
    if (this.props.restaurant.background_image != null) {
      return this.props.restaurant.background_image
    }

    if (this.props.restaurant.photos.length === 0) {
      return ""
    }

    return this.props.restaurant.photos[0].url
  }

  render() {
    const restaurant = this.props.restaurant;
    return (
      <div className="restaurant-container">
        <div className="banner-image-container">
          <img className="banner-image" src={this.getBackgroundImage()} />
        </div>
        <div className="restaurant-info-container">
          <div className="restaurant-details">
            <div className="restaurant-details-header">
              <ul>
                <li>Overview</li>
                <li>Photos</li>
                <li>Menu</li>
                <li>Reviews</li>
              </ul>
            </div>
            <div className="restaurant-name">{restaurant.name}</div>
            <RestaurantHeader
              reviews={restaurant.reviews}
              priceRange={restaurant.priceRange}
              cuisines={restaurant.cuisines}
              />
            <RestaurantTags tags={restaurant.tags}/>
            <div className="restaurant-description">
              {restaurant.description}
            </div>
          </div>
          <div className="restaurant-reservation">
            <h3 className="restaurant-reservation-header">
              Make a reservation
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
// <h1>{restaurant.name}</h1>
// <p>{restaurant.description}</p>
// <ul>
//   <li>{restaurant.phone_number}</li>
//   <li>{restaurant.website_link}</li>
//   <li>{restaurant.hours}</li>
//   <li>{restaurant.dining_style}</li>
//   <li>{restaurant.dress_code}</li>
//   <li>{restaurant.executive_chef}</li>
//   <li>{restaurant.price_range}</li>
//   <li>{restaurant.private_party_facilities}</li>
//   <li>{restaurant.private_party_contact}</li>
// </ul>

export default withRouter(RestaurantShow);
