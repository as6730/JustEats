import React, { Component } from "react";
import IconStar from "react-icons/lib/fa/star";
import IconStarEmpty from "react-icons/lib/fa/star-o";
import IconHalfStar from "react-icons/lib/fa/star-half";
import IconMoney from "react-icons/lib/fa/money";
import IconComment from "react-icons/lib/fa/comments-o";
import IconCuisine from "react-icons/lib/fa/cutlery";

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
      stars.push(<IconStar size={20} key={i} color="#da3743" />)
      halfStar--;
    }

    if (halfStar >= 0.5) {
      stars.push(<IconHalfStar size={20} key={avg} color="#da3743" />)
    }

    while (stars.length < 5) {
      stars.push(<IconStarEmpty size={20} key={stars.length} color="#da3743" />)
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
          {this.renderStars()}
        </div>
        <div className="header-specifics">
          {this.calculateAverageRating()}
        </div>
        <div className="header-specifics">
          <IconComment size={20} />
        </div>
        <div className="header-specifics">
          {this.props.reviews.length}
        </div>
        <div className="header-specifics">
          <IconMoney size={20} />
        </div>
        <div className="header-specifics">
          {this.props.priceRange}
        </div>
        <div className="header-specifics">
          <IconCuisine size={14} />
        </div>
        <div className="header-specifics">
          {this.getCuisine()}
        </div>
      </div>
    )
  }
}

export default RestaurantHeader;
