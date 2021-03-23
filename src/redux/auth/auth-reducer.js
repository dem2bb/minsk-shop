import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { signUp, signIn, setError, resetError, signOut } from './auth-actions';

const auth = createReducer(
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

const authReducer = combineReducers({
  auth,
  isAuth,
  error,
});

export default authReducer;
