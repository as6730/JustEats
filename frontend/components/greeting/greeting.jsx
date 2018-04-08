import React, { Component } from "react";
import { Link } from "react-router-dom";
import IconDotCircle from "react-icons/lib/fa/dot-circle-o";
import IconCircle from "react-icons/lib/fa/circle";

class Greeting extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;

    return (
      <div className="main-nav">
        <Link to="/" className="header-link">
          <div className="logo right-nav">
            <IconCircle size={10} color="#bb232e" />
            <IconDotCircle size={40} color="#bb232e" />
            <div className="logo-text">JustEat</div>
          </div>
        </Link>
        <div className="left-nav">
          <Link to="/signup">
            <button className="btn-signup">Sign up</button>
          </Link>
          <Link to="/signin">
            <button className="btn-signin">Sign in</button>
          </Link>
        </div>
      </div>
    );

    // if (currentUser) {

    //   return (
    //     <div>
    //       <div className="nav-greeting">Hi,{currentUser.firstname}</div>
    //       <button className="nav-logout" onClick={logout}>
    //         Sign out
    //       </button>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div className="left-nav">
    //       <Link to="/signup">
    //         <button className="left-nav-signup">Sign up</button>
    //       </Link>
    //       &nbsp;
    //       <Link to="/login">
    //         <button>Sign in</button>
    //       </Link>
    //     </div>
    //   );
    // }
  }
}

export default Greeting;
