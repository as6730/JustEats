import React, { Component } from "react";

export const featuredPhotos = () => {
  return (
    <div className="featured-areas">
      <h1 className="featured-areas-header">
        Featured Areas
      </h1>
      <div className="featured-area-photo-container">
        <div className="featured-area-photo">
          <h1 className="featured-area-city">New York Area</h1>
          <img src="//components.otstatic.com/components/oc-featured-metros/1.0.16/assets/img/metros/us-new-york-city.jpg" alt="New York Area" />
        </div>
        <div className="featured-area-photo">
          <h1 className="featured-area-city">Chicago</h1>
          <img src="//components.otstatic.com/components/oc-featured-metros/1.0.16/assets/img/metros/us-chicago.jpg" alt="Chicago" />
        </div>
        <div className="featured-area-photo">
          <h1 className="featured-area-city">Los Angeles</h1>
          <img src="//components.otstatic.com/components/oc-featured-metros/1.0.16/assets/img/metros/us-los-angeles.jpg" alt="Los Angeles" />
        </div>

        <div className="featured-area-photo">
          <h1 className="featured-area-city">San Francisco</h1>
          <img src="//components.otstatic.com/components/oc-featured-metros/1.0.16/assets/img/metros/us-san-francisco.jpg" alt="San Francisco" />
        </div>
          <div className="featured-area-photo">
            <h1 className="featured-area-city">Miami</h1>
          <img src="//components.otstatic.com/components/oc-featured-metros/1.0.16/assets/img/metros/us-miami.jpg" alt="Miami" />
        </div>
        <div className="featured-area-photo">
          <h1 className="featured-area-city">Las Vegas</h1>
          <img src="//components.otstatic.com/components/oc-featured-metros/1.0.16/assets/img/metros/us-las-vegas.jpg" alt="Las Vegas" />
        </div>
        <div className="featured-locations-container">
          <div className="featured-locations">
            <ul>
              <li>Atlanta</li>
              <li>Chicago</li>
              <li>Dallas</li>
              <li>Denver</li>
              <li>Detroit</li>
              <li>Houston</li>
              <li>Indiana</li>
              <li>Las Vegas</li>
              <li>Los Angeles</li>
              <li>Miami</li>
              <li>Milwaukee</li>
              <li>New England</li>
              <li>New York Area</li>
              <li>Orlando</li>
              <li>Philadelphia</li>
              <li>Portland</li>
              <li>Richmond</li>
              <li>San Francisco</li>
              <li>Seattle</li>
              <li>Washington DC</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default featuredPhotos;
