import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpOperation } from '../../redux/auth/auth-operations';

class AuthForm extends Component {
  state = {
    email: '',
    password: '',
  };

  onHandleChange = evt => {
    const { value, name } = evt.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = evt => {
    evt.preventDefault();
    this.props.signUpOperation(this.state);
    // this.props.location.pathname === '/signup' ? () : ();
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
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            value={password}
            onChange={this.onHandleChange}
          />
        </label>

        <button type="submit">
          {this.props.location.pathname === '/signup' ? 'Sing up' : 'Sign in'}
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  signUpOperation,
};

export default connect(null, mapDispatchToProps)(AuthForm);
