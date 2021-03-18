import { combineReducers } from "redux";
import cartReducer from "../cart/cart-reducer";
import productReducer from "./products-reducer";

const rootReducer = combineReducers({
  auth: () => ({
    isAuth: true,
  }),
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
