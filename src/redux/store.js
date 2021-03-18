// import { createStore } from "redux";
import rootReducer from './products/root-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {},
  }),
];

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
});

export default store;
