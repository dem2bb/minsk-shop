import React, { Component } from 'react';

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
    console.log(this.state);
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
        <button type="submit"> Sign up</button>
      </form>
    );
  }
}

export default AuthForm;
