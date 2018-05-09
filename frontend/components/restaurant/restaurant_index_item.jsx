import React, { Component } from "react";
import { Link } from "react-router-dom";
import IconChart from "react-icons/lib/io/arrow-graph-up-right";

class RestaurantIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  getRecommendationPercentage() {
    let sum = 0;
    restaurant.reviews.map((review) => {
      sum += review.rating;
    })

    avgRating =  Math.floor(sum / restaurant.reviews.length) % 100;
  }

  getPriceRange(priceRange) {
    switch (priceRange) {
      case "$31 to $50":
        return "$$$";
      case "$30 and under":
        return "$$";
      case "$50 and over":
        return "$$$$";
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

  numBookings() {
    let bookings = Math.floor(Math.random() * 50) + 5;
    return `Booked ${bookings} times today`
  }

  render() {
    const { restaurant, reviews } = this.props;

    return (
      <div>
        <li>
          <div className="restaurant-index-item">
            <Link to={`/restaurants/${restaurant.id}`}><img className="restaurant-index-image" src={this.getBackgroundImage()} /></Link>
            <div className="restaurant-index-item-information">
              <Link to={`/restaurants/${restaurant.id}`}><div className="restaurant-index-item-name">{restaurant.name}</div></Link>
              <div className="price-range-icons">{this.getPriceRange(restaurant.priceRange)}</div>
              {reviews.length} reviews
              <div className="booking-amount">
                <IconChart size={20} color="#DA3743"/> {this.numBookings()}
              </div>
            </div>
            <div className="view-restaurant">
              <Link to={`/restaurants/${restaurant.id}`}>
                <button
                  className="btn-view-restaurant">
                  Find a Table
                </button>
              </Link>
            </div>
          </div>
        </li>
      </div>
    );
  }
};

export default RestaurantIndexItem;
