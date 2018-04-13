import React, { Component } from "react";

class MyAccount extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserFavorites();
    this.props.fetchReservations();
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}
export default MyAccount;
