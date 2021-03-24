import axios from 'axios';
import { setError, signIn, signUp } from './auth-action';

export const signUpOperation = user => async dispatch => {
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNUP_URL, {
      ...user,
      returnSecureToken: true,
    });
    dispatch(signUp(response.data));
  } catch (error) {
    dispatch(setError(error.response.data.error.message));
  }
};

export const signInOperation = user => async dispatch => {
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNIN_URL, {
      ...user,
      returnSecureToken: true,
    });
    dispatch(signIn(response.data));
  } catch (error) {
    dispatch(setError(error.response.data.error.message));
  }
};
