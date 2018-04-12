import React, { Component } from "react";

class RestaurantIndex extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="index-container">
        <div className="home-banner-image-container">
          <img className="home-banner-image" src="//media.otstatic.com/img/start_hero_images/us-hero-1440-df9ac0cb6386da688dbb4b0a39d358d5.jpg" />
        </div>
        <div className="search-bar-container">
          <div className="search-bar-header">
            <h1 className="page-header-title">
              Make restaurant reservations the easy way
            </h1>
          </div>
          <div className="content-body">
            <button
              onClick={() => this.processAndCreateReservation()}
              className="home-btn-submit-reservation">
              Reserve a Table
            </button>
          </div>
        </div>
        <div className="top-cuisines">
          <h1 className="top-cuisines-header">
            Top Cuisines near San Francisco
          </h1>
        </div>
        {this.featuredPhotos()}
        <footer className="footer">
        </footer>
      </div>
    )
  }
}


export default RestaurantIndex;
