import React, { PureComponent } from "react";

class ReviewModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      body: props.body,
      rating: props.rating,
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
      body: this.state.body,
      rating: this.state.rating,
      id: this.props.reviewId
    };
    console.log(review);
    this.props.createReview(this.props.restaurant.id, review);
    this.props.onDismiss();
  }

  render() {
    return (
      <div className="modal-background" onClick={this.props.onDismiss}>
        <div className="review-form-box" onClick={(event) => event.stopPropagation()}>
          <div className="title">{this.props.currentUser.firstname}, how was your visit to {this.props.restaurant.name}?</div>
          <input
            placeholder="Rating"
            type="text"
            value={this.state.rating}
            onChange={(e) => {this.setState({'rating': e.target.value})}}
            className="review-input"
            />
          <input
            placeholder="Body"
            type="text"
            value={this.state.body}
            onChange={(e) => {this.setState({'body': e.target.value})}}
            className="review-input"
            />
          <button onClick={() => this.processAndCreateReview()}
            className="btn-create-review">
            {this.props.buttonTitle}
          </button>
        </div>
      </div>
    );
  }
}

// <div className="error">{this.props.errors[0]}</div>

export default ReviewModal;
