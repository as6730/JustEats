import React, { PureComponent } from "react";

class LoginModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }



  render() {
    return (
      <div className="modal-background" onClick={this.props.onDismiss}>
        <div className="login-form-box" onClick={(event) => event.stopPropagation()}>
          <div className="title">Please sign in</div>
          <input
            placeholder="Username"
            type="text"
            value={this.state.username}
            onChange={(e) => {
              this.setState({'username': e.target.value})
            }}
            className="login-input"
            />
          <input
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={(e) => {this.setState({'password': e.target.value})}}
            className="login-input"
            />
          <button onClick={() => {
              this.props.onLogin(this.state.username, this.state.password)
            }}
            className="btn-submit-form">
            Sign in
          </button>
          <div className="error">{this.props.errors[0]}</div>
        </div>
      </div>
    );
  }
}

export default LoginModal;
