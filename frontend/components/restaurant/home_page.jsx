import React, { Component } from "react";
import FeaturedPhotos from "./featured_photos";
import HomePageSlickr from "./home_page_slickr";
import { Link } from "react-router-dom";
import IconGithub from 'react-icons/lib/fa/github';
import IconLinkedIn from 'react-icons/lib/fa/linkedin';
import IconAngellist from 'react-icons/lib/fa/angellist';

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchbarText: ""
    }
  }

  onSearch(e) {
    this.setState({ searchbarText: e.target.value })
  }

  render() {
    return (
      <div className="home-container">
        <div className="home-banner-image-container">
          <img className="home-banner-image" src="//media.otstatic.com/img/start_hero_images/us-hero-1440-df9ac0cb6386da688dbb4b0a39d358d5.jpg" />
        </div>
        <div className="search-bar-container">
          <div className="search-bar-header">
            <h1 className="page-header-title">
              Make restaurant reservations the easy way
            </h1>
            <input
              placeholder="Search for a restaurant by name"
              className="search-bar"
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
        <div className="top-cuisines">
          <h1 className="top-cuisines-header">
            Top Cuisines near San Francisco
          </h1>
          <HomePageSlickr />
        </div>
        <FeaturedPhotos />
        <footer className="footer">
          <div className="footer-info">
            Alexandra Savramis
            <a href="https://angel.co/alexandra-savramis">{<IconAngellist className="angellist-icon" size={15}/>}</a>
            <a href="https://www.linkedin.com/in/alexandrasavramis/">{<IconLinkedIn className="linkedin-icon" size={20}/>}</a>
            <a href="https://github.com/as6730">{<IconGithub className="github-icon" size={20}/>}</a>
          </div>
        </footer>
      </div>
    )
  }
}

// {this.partySizeOptions()}
// {this.dateOptions()}
// {this.timeOptions()}

export default HomePage;
