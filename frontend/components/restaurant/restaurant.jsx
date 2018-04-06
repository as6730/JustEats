import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchRestaurant(1);
  }

  render() {
    return (
      <div>
        {this.props.restaurant.name}
        {this.props.restaurant.description}
      </div>
    );
  }
}

export default withRouter(Restaurant);
