import React, { Component } from "react";
import IconStar from "react-icons/lib/fa/star";
import IconStarEmpty from "react-icons/lib/fa/star-o";
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
    avg = Math.round(avg * 10) / 10;
    return avg;
  }

  renderStars() {
    let stars = [];
    let avg = this.calculateAverageRating();
    let halfStar = avg;

    for (let i = 0; i < Math.floor(avg); i++ ) {
      stars.push(<IconStar key={i} color="#da3743" />)
      halfStar--;
    }

    if (halfStar >= 0.5) {
      stars.push(<IconHalfStar key={avg} color="#da3743" />)
    }

    while (stars.length < 5) {
      stars.push(<IconStarEmpty key={stars.length} color="#da3743" />)
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
        <div className="header-specifics">
          <div className="restaurant-header-icon">
            {this.renderStars()}
          </div>
          {this.calculateAverageRating()}
        </div>
        <div className="header-specifics">
          {this.props.reviews.length}
        </div>
        <div className="header-specifics">
          {this.props.priceRange}
        </div>
        <div className="header-specifics">
          {this.getCuisine()}
        </div>
      </div>
    )
  }
}

export default RestaurantHeader;
