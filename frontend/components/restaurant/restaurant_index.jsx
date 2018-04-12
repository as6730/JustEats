import React, { Component } from "react";
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    const restaurants = this.props.restaurants.map(restaurant => {
      return (
        <RestaurantIndexItem
          key={restaurant.id}
          restaurant={restaurant}
          reviews={restaurant.reviews} />
      );
    });

    return (
      <div>
        <ul>
          {restaurants}
        </ul>
      </div>
    );
  }
}


export default RestaurantIndex;
