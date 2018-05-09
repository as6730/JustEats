import React, { Component } from "react";
import { Link } from "react-router-dom";

export const featuredPhotos = () => {
  return (
    <div className="featured-areas">
      <h1 className="featured-areas-header">
        Featured Areas
      </h1>
      <div className="featured-area-photo-container">
        <div className="featured-area-photo">
          <h1 className="featured-area-city">New York Area</h1>
          <Link to={`/restaurants`}><img src="//components.otstatic.com/components/oc-featured-metros/1.0.16/assets/img/metros/us-new-york-city.jpg" alt="New York Area" /></Link>
        </div>
        <div className="featured-area-photo">
          <h1 className="featured-area-city">Chicago</h1>
          <Link to={`/restaurants`}><img src="//components.otstatic.com/components/oc-featured-metros/1.0.16/assets/img/metros/us-chicago.jpg" alt="Chicago" /></Link>
        </div>
        <div className="featured-area-photo">
          <h1 className="featured-area-city">Los Angeles</h1>
          <Link to={`/restaurants`}><img src="//components.otstatic.com/components/oc-featured-metros/1.0.16/assets/img/metros/us-los-angeles.jpg" alt="Los Angeles" /></Link>
        </div>

        <div className="featured-area-photo">
          <h1 className="featured-area-city">San Francisco</h1>
          <Link to={`/restaurants`}><img src="//components.otstatic.com/components/oc-featured-metros/1.0.16/assets/img/metros/us-san-francisco.jpg" alt="San Francisco" /></Link>
        </div>
          <div className="featured-area-photo">
            <h1 className="featured-area-city">Miami</h1>
            <Link to={`/restaurants`}><img src="//components.otstatic.com/components/oc-featured-metros/1.0.16/assets/img/metros/us-miami.jpg" alt="Miami" /></Link>
        </div>
        <div className="featured-area-photo">
          <h1 className="featured-area-city">Las Vegas</h1>
          <Link to={`/restaurants`}><img src="//components.otstatic.com/components/oc-featured-metros/1.0.16/assets/img/metros/us-las-vegas.jpg" alt="Las Vegas" /></Link>
        </div>
        <div className="featured-locations-container">
          <div className="featured-locations">
            <ul>
              <Link to={`/restaurants`}><li>Atlanta</li></Link>
              <Link to={`/restaurants`}><li>Chicago</li></Link>
              <Link to={`/restaurants`}><li>Dallas</li></Link>
              <Link to={`/restaurants`}><li>Denver</li></Link>
              <Link to={`/restaurants`}><li>Detroit</li></Link>
              <Link to={`/restaurants`}><li>Houston</li></Link>
              <Link to={`/restaurants`}><li>Indiana</li></Link>
              <Link to={`/restaurants`}><li>Las Vegas</li></Link>
              <Link to={`/restaurants`}><li>Los Angeles</li></Link>
              <Link to={`/restaurants`}><li>Miami</li></Link>
              <Link to={`/restaurants`}><li>Milwaukee</li></Link>
              <Link to={`/restaurants`}><li>New England</li></Link>
              <Link to={`/restaurants`}><li>New York Area</li></Link>
              <Link to={`/restaurants`}><li>Orlando</li></Link>
              <Link to={`/restaurants`}><li>Philadelphia</li></Link>
              <Link to={`/restaurants`}><li>Portland</li></Link>
              <Link to={`/restaurants`}><li>Richmond</li></Link>
              <Link to={`/restaurants`}><li>San Francisco</li></Link>
              <Link to={`/restaurants`}><li>Seattle</li></Link>
              <Link to={`/restaurants`}><li>Washington DC</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default featuredPhotos;
