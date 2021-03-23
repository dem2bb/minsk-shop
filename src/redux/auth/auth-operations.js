import axios from 'axios';
import { signUp, signIn, setError } from './auth-actions';

const signUpOperation = user => async dispatch => {
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

const signInOperation = user => async dispatch => {
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

export { signUpOperation, signInOperation };
