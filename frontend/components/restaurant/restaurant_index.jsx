import React, { Component } from "react";
import RestaurantIndexItem from './restaurant_index_item';
import { Link } from "react-router-dom";

class RestaurantIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchbarText: ""
    }
  }

  onSearch(e) {
    this.setState({ searchbarText: e.target.value })
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
        <img className="search-image" src="//media.otstatic.com/search-result-node/images/background-blur.0a50ba84.png" />
        <div className="search-bar-container">
          <div className="index-search-bar-header">
            <h1 className="index-page-header-title">
              All San Francisco Bay Area restaurants
            </h1>
            <input
              placeholder="Search for a restaurant by name"
              className="index-search-bar"
              type="text"
              value={this.state.searchbarText}
              onChange={this.onSearch.bind(this)}
            />
          </div>
          <div className="content-body">
            <Link to={`/restaurants?query=${this.state.searchbarText}`}>
              <button
                className="home-btn-submit-reservation">
                Find a Restaurant
              </button>
            </Link>
          </div>
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
