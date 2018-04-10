import React, { Component } from "react";
import IconStar from "react-icons/lib/fa/star";
import IconStarEmpty from "react-icons/lib/fa/star-o";
import IconHalfStar from "react-icons/lib/fa/star-half";
import IconFlag from "react-icons/lib/fa/flag-o";
import IconHelpful from "react-icons/lib/fa/caret-square-o-up";
import IconUser from "react-icons/lib/fa/user";

class RestaurantReviews extends Component {
  constructor(props) {
    super(props);
    this.renderStars = this.renderStars.bind(this);
    this.roundRating = this.roundRating.bind(this);
  }

  renderStars(rating) {
    let stars = [];
    let ratingNum = Math.round(rating * 10) / 10;
    let halfStar = ratingNum;

    for (let i = 0; i < Math.floor(ratingNum); i++ ) {
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

  roundRating(rating) {
    return rating.toFixed(1);
  }

  render() {
    const reviews = this.props.reviews;

    return (
      <div className="restaurant-reviews">
        <ul>
          {reviews.map((review, idx) => (
            <li key={idx} className="review-body">
              <div className="review-details">
                <IconUser className="user-icon"/>
                {this.renderStars(review.rating)}
                {this.roundRating(review.rating)}
                {review.username}
                {review.date_created}
              </div>
              <div className="review-response">
                {review.body}
              </div>
              <div className="review-footer">
                <IconFlag size={20} /> Report
                <IconHelpful size={20} /> Helpful
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RestaurantReviews;
