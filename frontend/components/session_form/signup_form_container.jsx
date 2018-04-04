import React from "react";
import SessionForm from "./session_form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions";

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: "Create Account",
  navLink: <Link to="/login">Sign In.</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
