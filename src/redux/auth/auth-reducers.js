import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { signIn, signUp, resetError, setError, signOut } from './auth-actions';

const user = createReducer(
  {},
  {
    [signUp]: (_, { payload }) => payload,
    [signIn]: (_, { payload }) => payload,
    [signOut]: () => ({}),
  },
);

const error = createReducer('', {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => '',
});

const isAuth = createReducer(false, {
  [signUp]: () => true,
  [signIn]: () => true,
  [signOut]: () => false,
});

const authReducer = combineReducers({ user, error, isAuth });

export default authReducer;
