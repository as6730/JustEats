import React from "react";
import SessionForm from "./session_form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: "login",
  navLink: <Link to="/signup">Sign up instead.</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
