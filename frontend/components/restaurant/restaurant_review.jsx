import React, { Component } from "react";
import IconStar from "react-icons/lib/fa/star";
import IconStarEmpty from "react-icons/lib/fa/star-o";
import IconHalfStar from "react-icons/lib/fa/star-half";
import IconFlag from "react-icons/lib/fa/flag-o";
import IconHelpful from "react-icons/lib/fa/caret-square-o-up";
import IconUser from "react-icons/lib/fa/dot-circle-o";
import IconDelete from "react-icons/lib/fa/xing-square";
import IconEdit from "react-icons/lib/fa/pencil-square";

class RestaurantReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }

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

  showReadMoreBtn() {
    if (this.props.review.body === undefined ||
       this.props.review.body.length < 200) {
      return false;
    }

    return true;
  }

  render() {
    const review = this.props.review;
    const { expanded } = this.state;
    const toggledClass = expanded ? 'expanded' : 'collapsed';

    return (
      <div>
        <div className="review-details">
          <div className="review-detail">
            <IconUser size={30} color="#D3D3D3" className="user-icon" />
          </div>
          <div className="review-detail">
            {this.renderStars(review.rating)}
          </div>
          <div className="review-detail">
            {this.roundRating(review.rating)}
          </div>
          <div className="review-detail">
            {review.username}
          </div>
          <div className="review-detail">
            {review.date_created}
          </div>
        </div>
        <div className={`review-response ${toggledClass}`}>
          {review.body}
        </div>
        <div className="review-footer">
          { this.showReadMoreBtn() &&
              <button className="read-more" onClick={() => this.setState({ expanded: !expanded })}>
              {expanded ? '- Read Less' : '+ Read More'}
              </button>
          }
          <div className="footer-icon">
            <IconFlag size={20} /> Report
          </div>
          <div className="footer-icon">
            <IconHelpful size={20} /> Helpful
          </div>
            {
              this.props.currentUser.username === this.props.review.username &&
              <div className="footer-icon" onClick={() => this.props.deleteReview(review.id)}>
                <IconDelete size={20} /> Delete
              </div>
            }
            {
              (this.props.currentUser.username === this.props.review.username) &&
              <div className="footer-icon" onClick={this.props.editReview}>
                <IconEdit size={20} /> Edit
              </div>
            }
        </div>


      </div>
    );
  }
}

export default RestaurantReview;
