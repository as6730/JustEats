import React, { Component } from "react";
import RestaurantReview from "./restaurant_review";

class RestaurantReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {},
      body: "",
      rating: 0,
    }
  }

  onRatingChange(e) {
    this.setState({ rating: e.target.value })
  }

  onBodyChange(e) {
    this.setState({ body: e.target.value })
  }

  processAndCreateReview() {
    let review = {
      username: this.props.currentUser.username,
      body: this.state.body,
      rating: this.state.body,
    };

    this.props.createReview(this.props.restaurant.id, review);
  }

  render() {
    const reviews = this.props.reviews;

    return (
      <div>
        <div className="review-title">Enjoyed this restaurant?</div>
        <button onClick={() => this.processAndCreateReview()}
          className="btn-submit-review">
          Write a Review
        </button>
        <div className="restaurant-reviews">
          <ul>
            {reviews.map((review, idx) => (
              <li key={idx} className="review-body">
                <RestaurantReview review={review} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default RestaurantReviews;
