import React, { Component } from 'react';
import {
  signUpOperation,
  signInOperation,
} from '../../redux/auth/auth-operations';
import { connect } from 'react-redux';

class AuthForm extends Component {
  state = {
    email: '',
    password: '',
  };

  onHandleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onHandleSubmit = event => {
    event.preventDefault();
    this.props.location.pathname === '/signup'
      ? this.props.signUpOperation(this.state)
      : this.props.signInOperation(this.state);
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          {' '}
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          {' '}
          Password
          <input
            type="text"
            name="password"
            value={password}
            onChange={this.onHandleChange}
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
