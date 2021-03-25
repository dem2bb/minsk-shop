import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  signUpOperation,
  signInOperation,
} from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

const InitiaSltate = {
  email: '',
  password: '',
};

const AuthForm = () => {
  const [user, setUser] = useState(InitiaSltate);
  const location = useLocation();
  const dispatch = useDispatch();

  const onHandleChange = event => {
    const { value, name } = event.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    location.pathname === '/signup'
      ? dispatch(signUpOperation(user))
      : dispatch(signInOperation(user));
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        {' '}
        Email
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={onHandleChange}
        />
      </label>
      <label>
        {' '}
        Password
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={onHandleChange}
        />
      </label>
      <button type="submit">
        {location.pathname === '/signup' ? 'Sign up' : 'Sign in'}
      </button>
    </form>
  );
};

export default AuthForm;
