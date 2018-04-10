import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// presentational component 
class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      username: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderSignUp = this.renderSignUp.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  renderSignUp() {
    if (this.props.formType === "Sign In") return null;
    return (
      <div className="login-form-container">
        <div className="login-form">
          <label>
            First Name
            <input
              type="text"
              value={this.state.firstname}
              onChange={this.update("firstname")}
              className="login-input"
            />
          </label>
          <br />
          <label>
            Last Name
            <input
              type="text"
              value={this.state.lastname}
              onChange={this.update("lastname")}
              className="login-input"
            />
          </label>
          <br />
          <label>
            Enter email
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              className="login-input"
            />
          </label>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div onClick={this.props.closeModal} className="close-x">X</div>
          <div>
            <label>
              Username
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input"
              />
            </label>
            <br />
            <label>
              Password
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
              />
            </label>
            <br />
            {this.renderSignUp()}
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
