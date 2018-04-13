// will define routes here

import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import RestaurantShowContainer from "./restaurant/restaurant_show_container";
import RestaurantIndexContainer from "./restaurant/restaurant_index_container";
import HomePage from "./restaurant/home_page";
import MyAccountContainer from "./user/myaccount_container";

// <Route exact path="/" component={GreetingContainer} />
const App = () => (
  <div>
    <div className="nav-bar-container">
      <nav className="nav-bar-main">
        <GreetingContainer />
        <Switch>
          <Route
            exact
            path="/"
            component={HomePage}
            />
          <Route
            exact
            path="/restaurants/:restaurantId"
            component={RestaurantShowContainer}
          />
          <Route
            exact
            path="/restaurants"
            component={RestaurantIndexContainer}
          />
          <Route
            exact
            path="/myaccount"
            component={MyAccountContainer}
          />
        </Switch>
      </nav>
    </div>
  </div>
);

export default App;
