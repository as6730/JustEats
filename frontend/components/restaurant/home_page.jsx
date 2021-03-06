import React, { Component } from "react";
import FeaturedPhotos from "./featured_photos";
import { Footer } from "./footer";
import HomePageSlickr from "./home_page_slickr";
import { Link } from "react-router-dom";


class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchbarText: ""
    }
  }

  onSearch(e) {
    e.preventDefault();
    this.setState({ searchbarText: e.target.value })
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.history.push(`/restaurants?query=${this.state.searchbarText}`);
    }
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
              onKeyPress={this.handleKeyPress.bind(this)}
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
        <Footer />
      </div>
    )
  }
}

export default HomePage;
