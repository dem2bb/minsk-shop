import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import {
  signUp,
  signIn,
  setError,
  resetError,
  signOut,
  setIsAuth,
} from './auth-actions';
import storage from 'redux-persist/lib/storage';

const user = createReducer(
  {},
  {
    [signUp]: (_, { payload }) => ({ ...payload }),
    [signIn]: (_, { payload }) => ({ ...payload }),
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
  [setIsAuth]: (_, { payload }) => payload,
});

const config = {
  key: 'user',
  storage,
  whitelist: ['idToken', 'refreshToken', 'email', 'localId'],
};

const persistedReducer = persistReducer(config, user);

const authReducer = combineReducers({ user: persistedReducer, error, isAuth });

export default authReducer;
