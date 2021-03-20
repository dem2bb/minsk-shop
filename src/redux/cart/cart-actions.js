import {
  ADD_TO_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
  ORDER_PRODUCTS,
} from './cart-types';

const addToCart = product => ({
  type: ADD_TO_CART,
  payload: product,
});

const increment = id => ({
  type: INCREMENT,
  payload: id,
});

const decrement = id => ({
  type: DECREMENT,
  payload: id,
});

const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

const cartReset = () => ({
  type: ORDER_PRODUCTS,
});

export { addToCart, increment, decrement, removeFromCart, cartReset };
