import React, { Component } from "react";
import RestaurantReview from "./restaurant_review";

class RestaurantReviews extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const reviews = this.props.reviews;

    return (
      <div className="restaurant-reviews">
        <ul>
          {reviews.map((review, idx) => (
            <li key={idx} className="review-body">
              <RestaurantReview review={review} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RestaurantReviews;
