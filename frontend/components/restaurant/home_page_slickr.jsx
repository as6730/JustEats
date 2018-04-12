import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        <div>
          <div className="featured-cuisines-photo">
            <h1 className="featured-cuisines-area">Best American Restaurants Around You</h1>
            <img src="http://cdn.otstatic.com/start-page-rush-654/8AFC7ADC-DE3B-439D-91F2-CE568C1A653B.jpg" alt="American" />
          </div>
        </div>
        <div>
          <div className="featured-cuisines-photo">
            <h1 className="featured-cuisines-area">Best Italian Restaurants Around You</h1>
            <img src="http://cdn.otstatic.com/start-page-rush-654/48E9D049-40CF-4CB9-98D9-8C47D0D58986.jpg" alt="American" />
          </div>
        </div>
        <div>
          <div className="featured-cuisines-photo">
            <h1 className="featured-cuisines-area">Best Seafood Restaurants Around You</h1>
            <img src="http://cdn.otstatic.com/start-page-rush-654/0735C10C-6AB6-46F6-87AA-8FE54397744D.jpg" alt="American" />
          </div>
        </div>
        <div>
          <div className="featured-cuisines-photo">
            <h1 className="featured-cuisines-area">Best Steakhouse Restaurants Around You</h1>
            <img src="http://cdn.otstatic.com/start-page-rush-654/029CD931-4A83-4572-B87A-2B0CE7ABCB1E.jpg" alt="American" />
          </div>
        </div>
        <div>
          <div className="featured-cuisines-photo">
            <h1 className="featured-cuisines-area">Best Chinese Restaurants Around You</h1>
            <img src="http://cdn.otstatic.com/start-page-rush-654/6C913B35-FFD3-498C-93F0-A3E7086EBE25.jpg" alt="American" />
          </div>
        </div>
        <div>
          <div className="featured-cuisines-photo">
            <h1 className="featured-cuisines-area">Best Asian Restaurants Around You</h1>
            <img src="http://cdn.otstatic.com/start-page-rush-654/73289F47-FE6D-4B16-94EA-F24DC1FDFC26.jpg" alt="American" />
          </div>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
