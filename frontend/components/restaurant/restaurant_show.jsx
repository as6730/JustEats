import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import RestaurantHeader from "./restaurant_header";
import RestaurantTags from "./restaurant_tags";
import RestaurantSpecifics from "./restaurant_specifics";
import PhotoGallery from "./photo_gallery";
import RestaurantReviews from "./restaurant_reviews";
import MakeReservation from "./make_reservation";

class RestaurantShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
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
    const img = this.props.restaurant.background_image;
    const photos = this.props.restaurant.photos;

    if (img != null) {
      return img;
    } else if (photos.length === 0) {
      return "";
    }

    return photos[0].url;
  }

  showReadMoreBtn() {
    if (this.props.restaurant.description === undefined ||
       this.props.restaurant.description.length < 200) {
      return false;
    }

    return true;
  }

  render() {
    const restaurant = this.props.restaurant;
    const { expanded } = this.state;
    const toggledClass = expanded ? 'expanded' : 'collapsed';

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
            <div className={`restaurant-description ${toggledClass}`}>
              {restaurant.description}
            </div>
            {
              this.showReadMoreBtn() &&
              <button className="read-more" onClick={() => this.setState({ expanded: !expanded })}>
                {expanded ? '- Read Less' : '+ Read More'}
              </button>
            }
            <RestaurantSpecifics
              restaurant={restaurant}
              location={restaurant.location}
              paymentOptions={restaurant.paymentOptions}
              cuisines={restaurant.cuisines}
              />
            <PhotoGallery photos={restaurant.photos} />
            <RestaurantReviews reviews={restaurant.reviews} />
          </div>
          <MakeReservation
            restaurant={restaurant}
            createReservation={this.props.createReservation}
          />
        </div>
      </div>
    )
  }
}


export default withRouter(RestaurantShow);
