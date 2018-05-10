import React, { Component } from "react";
import { Link } from "react-router-dom";
import IconDotCircle from "react-icons/lib/fa/dot-circle-o";
import IconCircle from "react-icons/lib/fa/circle";
import LoginModal from "./login_modal"
import SignUpModal from "./signup_modal"

class Greeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogin: false,
      showSignUp: false
    }

    this.onLogin = this.onLogin.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({showLogin: false, showSignUp: false})
  }

  onLogin(username, password) {
    this.props.onLogin(username, password);
  }

  onSignUp(username, password, firstname, lastname, email) {
    this.props.onSignUp(username, password, firstname, lastname, email);
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
          {(currentUser === null) ?
              <nav className="login-signup">
                <button onClick={() => {
                    this.setState({showSignUp: true, showLogin: false})
                  }}
                  className="btn-signup">
                  Sign up
                </button>
                <button onClick={() => {
                    this.onLogin("DemoUser", "password")
                  }}
                  className="btn-signin">
                  Demo User
                </button>
              </nav>
          :
            <div>
              <Link to="/myaccount">
                Hi, {currentUser.firstname}
              </Link>

              <button onClick={() => {
                  this.props.logout()
                  this.setState({showLogin: false, showSignUp: false})
                }}
                className="btn-signup">
                Logout
              </button>
            </div>
          }
        </div>

        {(this.state.showLogin && currentUser === null) &&
          <LoginModal
            errors={this.props.errors}
            onLogin={this.onLogin}
            onDismiss={this.onDismiss}/>
        }

        {(this.state.showSignUp && currentUser === null) &&
          <SignUpModal
            errors={this.props.errors}
            onSignUp={this.onSignUp}
            onLogin={this.onLogin}
            onDismiss={this.onDismiss}/>
        }
      </div>
    );
  }
}

export default Greeting;
