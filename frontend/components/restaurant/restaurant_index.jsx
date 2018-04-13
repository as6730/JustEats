import React, { Component } from "react";
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let query = this.props.location.search;
    query = query.substring(query.indexOf('=') + 1);

    this.props.fetchRestaurants(query);
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
        <div className="index-search">
          searchbar
        </div>
        <div className="index-wrapper">
          <div className="index-side-column">
            <img className="visual-map-image" src="http://media.otstatic.com/search-result-node/images/mapImage@2x.e764d473.png"/>
          </div>
          <div className="search-results-container">
            <ul>
              {restaurants}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// <img className="visual-map-text" src="http://media.otstatic.com/search-result-node/images/compressed/pinIcon.dbf100dd.svg" />

export default RestaurantIndex;
