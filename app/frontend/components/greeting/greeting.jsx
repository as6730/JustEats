import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({currentUser, logout}) => (
  if (currentUser) {
    <nav className="nav-greeting">Hi,{currentUser.firstname}</nav>
    <button className="nav-logout" onClick={logout}>Sign out</button>
  } else {
    <nav className="session-links">
      <Link to="/signup">Sign up</Link>
      <Link to="/signin">Sign in</Link>
    </nav>
  }
);

export default Greeting;
