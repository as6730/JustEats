import React, { PureComponent } from 'react';

class SignUpModal extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      repeatPassword: "",
      firstname: "",
      lastname: "",
      email: "",
    }
  }

  render() {
    return (
      <div className="modal-background" onClick={this.props.onDismiss}>
        <div className="signup-form-box" onClick={(event) => event.stopPropagation()}>
          <div className="title">Welcome to JustEat!</div>
            <label>
              <input
                placeholder="Username"
                type="text"
                value={this.state.username}
                onChange={(e) => {
                  this.setState({'username': e.target.value})
                }}
                className="signup-input"
              />
            </label>
            <br />
            <label>
              <input
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={(e) => {
                  this.setState({'password': e.target.value})
                }}
                className="signup-input"
              />
            </label>
            <br />
            <label>
              <input
                placeholder="Re-enter password"
                type="password"
                value={this.state.repeatPassword}
                onChange={(e) => {
                  this.setState({'repeatPassword': e.target.value})
                }}
                className="signup-input"
              />
            </label>
            <br />
            <label>
              <input
                placeholder="First Name"
                type="text"
                value={this.state.firstname}
                onChange={(e) => {
                  this.setState({'firstname': e.target.value})
                }}
                className="signup-input"
                />
            </label>
            <br />
            <label>
              <input
                placeholder="Last Name"
                type="text"
                value={this.state.lastname}
                onChange={(e) => {
                  this.setState({'lastname': e.target.value})
                }}
                className="signup-input"
              />
            </label>
            <br />
            <label>
              <input
                placeholder="Enter email"
                type="text"
                value={this.state.email}
                onChange={(e) => {
                  this.setState({'email': e.target.value})
                }}
                className="signup-input"
              />
            </label>
          <button onClick={() => {
              this.props.onSignUp(this.state.username, this.state.password, this.state.firstname, this.state.lastname, this.state.email)
            }}
            className="btn-submit-form">
            Create Account
          </button>
          <button onClick={() => {
              this.props.onLogin("DemoUser", "password")
            }}
            className="btn-submit-form">
            Demo Login
          </button>
          <div className="error">{this.props.errors[0]}</div>
        </div>
      </div>
    );
  }
}


export default SignUpModal;
