// will define routes here

import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";

// <Route exact path="/" component={GreetingContainer} />
const App = () => (
  <div>
    <div className="nav-bar-container">
      <nav className="nav-bar-main">
        <Link to="/" className="header-link">
          <i className="fas fa-dot-circle" />
          <h1>JustEat</h1>
        </Link>
        <GreetingContainer />
        <Switch>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
      </nav>
    </div>
  </div>
);

export default App;
