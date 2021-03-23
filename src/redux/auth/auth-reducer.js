import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { signIn, signUp, setError, resetError, signOut } from './auth-action';

const user = createReducer(
  {},
  {
    [signUp]: (_, { payload }) => payload,
    [signIn]: (_, { payload }) => payload,
    [signOut]: (_, { payload }) => ({}),
  },
);

const isAuth = createReducer(false, {
  [signUp]: () => true,
  [signIn]: () => true,
  [signOut]: () => false,
});

const error = createReducer('', {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => '',
});

const authReducer = combineReducers({
  user,
  error,
  isAuth,
});

export default authReducer;
