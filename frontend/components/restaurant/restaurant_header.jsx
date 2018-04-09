import React, { Component } from "react";
import IconStar from "react-icons/lib/fa/star";
import IconHalfStar from "react-icons/lib/fa/star-half";

class RestaurantHeader extends Component {
  constructor(props) {
    super(props);
  }

  calculateAverageRating() {
    let sum = 0;
    this.props.reviews.forEach((review) => {
      sum += review.rating;
    });
    let avg = sum / this.props.reviews.length;
    return avg;
  }

  renderStars() {
    let stars = [];
    let avg = this.calculateAverageRating();
    let halfStar = avg;

    for (let i = 0; i < Math.floor(avg); i++ ) {
      stars.push(<IconStar key={i} />)
      halfStar--;
    }

    if (halfStar >= 0.5) {
      stars.push(<IconHalfStar key={avg}/>)
    }

    return stars;
  }

  getCuisine() {
    if (this.props.cuisines[0] === undefined) {
      return "";
    }

    return this.props.cuisines[0].name;
  }

  render() {
    return (
      <div className="restaurant-header">
        <div className="star-container">
          {this.renderStars()}
          {this.calculateAverageRating()}
        </div>
        <div className="total-reviews">
          {this.props.reviews.length}
        </div>
        <div className="price-range">
          {this.props.priceRange}
        </div>
        <div className="cuisine">
          {this.getCuisine()}
        </div>
      </div>
    )
  }
}

export default RestaurantHeader;
