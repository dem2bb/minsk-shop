import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  signUpOperation,
  signInOperation,
} from '../../redux/auth/auth-operations';

class AuthForm extends Component {
  state = {
    email: '',
    password: '',
  };

  onHanldeChange = evt => {
    const { value, name } = evt.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = evt => {
    evt.preventDefault();
    this.props.location.pathname === '/signup'
      ? this.props.signUpOperation(this.state)
      : this.props.signInOperation(this.state);
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.onHanldeChange}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            value={password}
            onChange={this.onHanldeChange}
          />
        </label>
        <button type="submit">
          {this.props.location.pathname === '/signup' ? 'Sign up' : 'Sign in'}
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  signUpOperation,
  signInOperation,
};

export default connect(null, mapDispatchToProps)(AuthForm);
