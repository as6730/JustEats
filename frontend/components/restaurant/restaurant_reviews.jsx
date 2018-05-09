import React, { Component } from "react";
import RestaurantReview from "./restaurant_review";
import ReviewModal from "./review_modal";
import IconEdit from "react-icons/lib/fa/pencil-square";

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

  hasReview() {
    const { currentUser } = this.props;
    return this.props.restaurant.reviews.filter(review => review.username === currentUser.username).length > 0;
  }

  getUserReview() {
    const { currentUser } = this.props;
    return this.props.restaurant.reviews.filter(review => review.username === currentUser.username)[0];
  }

  render() {
    const reviews = this.props.reviews;
    const { currentUser, showReviewForm } = this.props;

    return (
      <div> 
        {(currentUser != null) ?
          !this.hasReview() &&
            <div>
              <div className="review-form-question">Enjoyed this restaurant?
                <button onClick={() => {
                    this.setState({showReviewForm: true})
                  }}
                  className="btn-write-review">
                  <IconEdit size={22} /> Write a Review
                </button>
              </div>
            </div>
        :
          <div>If you would like to leave a review, please sign in.</div>
        }
        <div className="restaurant-reviews">
          <ul>
            {reviews.map((review, idx) => (
              <li key={idx} className="review-body">
                <RestaurantReview
                  editReview={() => {
                      this.setState({showReviewForm: true})
                    }}
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
            body={this.hasReview() ? this.getUserReview().body : ""}
            rating={this.hasReview() ? this.getUserReview().rating : 0}
            reviewId={this.hasReview() ? this.getUserReview().id : ""}
            buttonTitle={this.hasReview() ? "Update your review" : "Submit your review"}
            restaurant={this.props.restaurant}
            createReview={this.hasReview() ? this.props.updateReview : this.props.createReview }
            showReviewForm={this.showReviewForm}/>
        }
      </div>
    );
  }
}

export default RestaurantReviews;
