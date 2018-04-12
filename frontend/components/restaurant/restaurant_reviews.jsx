import React, { Component } from "react";
import RestaurantReview from "./restaurant_review";
import ReviewModal from "./review_modal";

class RestaurantReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showReviewForm: false
    }

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({showReviewForm: false})
  }

  render() {
    const reviews = this.props.reviews;
    const { currentUser, showReviewForm } = this.props;

    return (
      <div>
        {(currentUser != null) ?
          this.props.restaurant.reviews.filter(review => review.username === currentUser.username).length === 0 &&
            <div>
              <div className="review-title">Enjoyed this restaurant?</div>
                <button onClick={() => {
                    this.setState({showReviewForm: true})
                  }}
                  className="btn-review">
                  Write a Review
                </button>
            </div>
        :
          <div>If you would like to leave a review, please sign in.</div>
        }
        <div className="restaurant-reviews">
          <ul>
            {reviews.map((review, idx) => (
              <li key={idx} className="review-body">
                <RestaurantReview
                  deleteReview={this.props.deleteReview}
                  currentUser={currentUser}
                  review={review} />
              </li>
            ))}
          </ul>
        </div>

        {
          ( this.state.showReviewForm && currentUser != null) &&
          <ReviewModal
            errors={this.props.errors}
            onDismiss={this.onDismiss}
            currentUser={currentUser}
            restaurant={this.props.restaurant}
            createReview={this.props.createReview}
            showReviewForm={this.showReviewForm}/>
        }
      </div>
    );
  }
}

export default RestaurantReviews;
