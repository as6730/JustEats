import React from 'react';

const RestaurantIndexItem = ({ restaurant, reviews }) => {
  getRestaurantStars(rating) {
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

  renderStars() {
    
    restaurant.reviews.map((review) => {
      this.renderStars(review.rating);
    })
  }

  getRecommendationPercentage() {
    let sum = 0;
    restaurant.reviews.map((review) => {
      sum += review.rating;
    })

    avgRating =  Math.floor(sum / restaurant.reviews.length) % 100;
  }
  render (
    return (
      <li>
        {restaurant.name}
        {this.renderStars(restaurant.reviews.rating)}
        {restaurant.reviews.length} reviews
        {this.getRecommendationPercentage()}
      </li>
    );
  )
};

export default RestaurantIndexItem;
