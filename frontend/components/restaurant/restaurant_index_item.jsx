import React, { Component } from "react";

class RestaurantIndexItem extends Component {
  constructor(props) {
    super(props);
  }
  // getRestaurantStars(rating) {
  //   let stars = [];
  //   let ratingNum = Math.round(rating * 10) / 10;
  //   let halfStar = ratingNum;
  //
  //   for (let i = 0; i < Math.floor(ratingNum); i++ ) {
  //     stars.push(<IconStar key={i} color="#da3743" />)
  //     halfStar--;
  //   }
  //
  //   if (halfStar >= 0.5) {
  //     stars.push(<IconHalfStar key={avg} color="#da3743" />)
  //   }
  //
  //   while (stars.length < 5) {
  //     stars.push(<IconStarEmpty key={stars.length} color="#da3743" />)
  //   }
  //
  //   return stars;
  // }
  //
  // renderStars() {
  //
  //   restaurant.reviews.map((review) => {
  //     this.renderStars(review.rating);
  //   })
  // }
  //
  // getRecommendationPercentage() {
  //   let sum = 0;
  //   restaurant.reviews.map((review) => {
  //     sum += review.rating;
  //   })
  //
  //   avgRating =  Math.floor(sum / restaurant.reviews.length) % 100;
  // }

  getPriceRange(priceRange) {
    switch (priceRange) {
      case "$31 to $50":
        return "$$$";
      case "$30 and under":
        return "$$";
      case "$50 and over":
        return "$$$$";
    }
  }

  render() {
    
    const { restaurant, reviews } = this.props;
    console.log(this.props)
    return (
      <div>
        <li>
          {restaurant.name}
          {reviews.length} reviews
          {this.getPriceRange(restaurant.priceRange)}
        </li>
      </div>
    );
  }
};

//  {this.renderStars(restaurant.reviews.rating)}
//  {this.getRecommendationPercentage()}

export default RestaurantIndexItem;
