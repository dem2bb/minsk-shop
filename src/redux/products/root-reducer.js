import { combineReducers } from 'redux';
import authReducer from '../auth/auth-reducers';
import cartReducer from '../cart/cart-reducer';
import productReducer from './products-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
