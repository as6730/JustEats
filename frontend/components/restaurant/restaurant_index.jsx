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
      searchbarText: this.getQueryString()
    }
  }

  getQueryString(){
    return this.props.location.search.substring(this.props.location.search.indexOf('=') + 1)
  }

  onSearch(e) {
    e.preventDefault();
    this.setState({ searchbarText: e.target.value });
  }

  componentDidMount() {
    this.props.fetchRestaurants(this.getQueryString());
  }

  render() {
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
              <button
                className="home-btn-submit-reservation"
                onClick={() => {
                  this.props.history.push(`/restaurants?query=${this.state.searchbarText}`)
                  this.props.fetchRestaurants(this.state.searchbarText);
                }}>
                Find a Restaurant
              </button>
          </div>
        </div>
        <div className="index-wrapper">
          <div className="search-results-container">
            <ul>
              {this.props.restaurants.map(restaurant => {
                return (
                  <RestaurantIndexItem
                    key={restaurant.id}
                    restaurant={restaurant}
                    reviews={restaurant.reviews} />
                );
              })
              }
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
