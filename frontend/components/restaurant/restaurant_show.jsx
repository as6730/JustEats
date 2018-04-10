import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import RestaurantHeader from "./restaurant_header";
import RestaurantTags from "./restaurant_tags";
import RestaurantSpecifics from "./restaurant_specifics";
import PhotoGallery from "./photo_gallery";
import RestaurantReviews from "./restaurant_reviews";

class RestaurantShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.restaurant.id != nextProps.match.params.restaurantId) {
      this.props.fetchRestaurant(nextProps.match.params.restaurantId);
    }
  }

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
            <RestaurantSpecifics
              restaurant={restaurant}
              location={restaurant.location}
              paymentOptions={restaurant.paymentOptions}
              cuisines={restaurant.cuisines}
              />
            <PhotoGallery photos={restaurant.photos} />
            <RestaurantReviews reviews={restaurant.reviews} />
          </div>
          <div className="restaurant-reservation">
            <h3 className="restaurant-reservation-header">
              Make a reservation
            </h3>
          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(RestaurantShow);
