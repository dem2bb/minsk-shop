import axios from 'axios';
import { cartReset } from './cart-actions';

const createOrderOperation = order => async (dispatch, getState) => {
  try {
    const baseUrl = process.env.REACT_APP_DATA_BASE_BASEURL;
    const response = await axios.post(`${baseUrl}/orders.json`, order);
    dispatch(cartReset());
  } catch (error) {
    console.log(error);
  }
};
export { createOrderOperation };
