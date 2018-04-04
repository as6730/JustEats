import React, { Component } from "react";
import { Link } from "react-router-dom";

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout;
  }

  render() {
    const currentUser = this.currentUser;
    const logout = this.props.logout;

    if (currentUser) {
      return (
        <div>
          <nav className="nav-greeting">Hi,{currentUser.firstname}</nav>
          <button className="nav-logout" onClick={logout}>
            Sign out
          </button>
        </div>
      );
    } else {
      return (
        <nav className="session-links">
          <Link to="/signup">Sign up</Link>
          <Link to="/signin">Sign in</Link>
        </nav>
      );
    }
  }
}

export default Greeting;
