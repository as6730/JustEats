import React, { Component } from "react";
import { Link } from "react-router-dom";

class Greeting extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;

    if (currentUser) {
      return (
        <div>
          <div className="nav-greeting">Hi,{currentUser.firstname}</div>
          <button className="nav-logout" onClick={logout}>
            Sign out
          </button>
        </div>
      );
    } else {
      return (
        <div className="session-links">
          <Link to="/signup">Sign up</Link>
          &nbsp;
          <Link to="/login">Sign in</Link>
        </div>
      );
    }
  }
}

export default Greeting;
