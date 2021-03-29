import axios from 'axios';
import { cartReset } from './cart-actions';

export const createOrderOperation = order => async (dispatch, getState) => {
  const idToken = getState().auth.user.idToken;
  const user_id = getState().auth.user.localId;
  try {
    const baseURL = process.env.REACT_APP_DATA_BASE_BASEURL;
    const response = await axios.post(
      `${baseURL}/orders/${user_id}.json?auth=${idToken}`,
      order,
    );
    dispatch(cartReset());
  } catch (err) {
    console.log(err);
  }
};
