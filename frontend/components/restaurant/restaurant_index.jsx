import React, { Component } from "react";
import RestaurantIndexItem from './restaurant_index_item';
import { Link } from "react-router-dom";

// footer contact icons
import IconGithub from 'react-icons/lib/fa/github';
import IconLinkedIn from 'react-icons/lib/fa/linkedin';
import IconAngellist from 'react-icons/lib/fa/angellist';

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

// <footer className="footer">
//   <div className="footer-info">
//     Alexandra Savramis
//     <a href="https://angel.co/alexandra-savramis">{<IconAngellist className="angellist-icon" size={15}/>}</a>
//     <a href="https://www.linkedin.com/in/alexandrasavramis/">{<IconLinkedIn className="linkedin-icon" size={20}/>}</a>
//     <a href="https://github.com/as6730">{<IconGithub className="github-icon" size={20}/>}</a>
//   </div>
// </footer>


export default RestaurantIndex;
