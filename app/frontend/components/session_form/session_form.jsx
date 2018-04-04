import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.processForm(user);
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

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div>
            <label>
              Username
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </label>
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
