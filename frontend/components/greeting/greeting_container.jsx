import Greeting from "./greeting";
import { connect } from "react-redux";
import { openModal } from '../../actions/modal_actions';
import { login, signup, logout, checkSession } from "../../actions/session_actions";

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  checkSession: () => dispatch(checkSession()),
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  onLogin: (username, password) => dispatch(login({username, password})),
  onSignUp: (username, password, firstname, lastname, email) => dispatch(signup({username, password, firstname, lastname, email}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
