import {
  ADD_TO_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
} from "./cart-types";

const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

const increment = (id) => ({
  type: INCREMENT,
  payload: id,
});

const decrement = (id) => ({
  type: DECREMENT,
  payload: id,
});

const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export { addToCart, increment, decrement, removeFromCart };
