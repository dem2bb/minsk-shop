import {
  ADD_TO_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
  ORDER_PRODUCTS,
} from './cart-types';

const cartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ORDER_PRODUCTS:
      return [];
    case ADD_TO_CART:
      const foundedIdx = state.findIndex(item => item.id === payload.id);
      const foundedItem = state[foundedIdx];
      if (foundedIdx === -1) {
        return [...state, { ...payload, quantity: 1 }];
      }
      return [
        ...state.slice(0, foundedIdx),
        { ...payload, quantity: foundedItem.quantity + 1 },
        ...state.slice(foundedIdx + 1),
      ];
    case DECREMENT:
      return [
        ...state.map(item =>
          item.id === payload
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        ),
      ];
    case INCREMENT:
      return [
        ...state.map(item =>
          item.id === payload
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      ];
    case REMOVE_FROM_CART:
      return [...state.filter(item => item.id !== payload)];
    default:
      return state;
  }
};

export default cartReducer;
