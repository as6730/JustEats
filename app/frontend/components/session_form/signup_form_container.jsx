import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: "signup",
  navLink: <Link to="/login">login instead</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
