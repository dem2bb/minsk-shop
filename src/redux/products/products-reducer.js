import { createReducer } from '@reduxjs/toolkit';
import {
  addProduct,
  changeFilter,
  deleteProduct,
  getAllProducts,
  setLoader,
} from './products-actions';
import { combineReducers } from 'redux';

const initialState = {
  productItems: [],
  filter: '',
};

const itemReducer = createReducer([], {
  [getAllProducts]: (_, action) => action.payload,
  [addProduct]: (state, action) => [...state, action.payload],
  [deleteProduct]: (state, action) => [
    ...state.filter(item => item.id !== action.payload),
  ],
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const loaderReducer = createReducer(false, {
  [setLoader]: state => !state,
  [getAllProducts]: state => !state,
});

const productsReducer = combineReducers({
  productItems: itemReducer,
  filter: filterReducer,
  loader: loaderReducer,
});

export default productsReducer;
