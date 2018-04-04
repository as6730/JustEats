import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Greeting from "./greeting";

export const mapStateToProps = props => ({
  currentUser: session.currentUser
});

export const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
