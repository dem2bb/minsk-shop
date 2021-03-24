import axios from 'axios';
import { cartReset } from './cart-actions';

export const createOrderOperation = order => async (dispatch, getState) => {
  try {
    const baseURL = process.env.REACT_APP_DATA_BASE_BASEURL;
    const response = await axios.post(`${baseURL}/orders.json`, order);
    dispatch(cartReset());
  } catch (err) {
    console.log(err);
  }
};
