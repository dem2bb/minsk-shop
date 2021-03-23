import axios from 'axios';
import { signUp, signIn, setError } from './auth-actions';

const signUpOperation = user => async dispatch => {
  try {
    const resonse = await axios.post(process.env.REACT_APP_SINGUP_URL, {
      ...user,
      returnSecureToken: true,
    });

    dispatch(signUp(resonse.data));
  } catch (error) {
    dispatch(setError(error.response.data.error.message));
  }
};

const signInOperation = user => async dispatch => {
  try {
    const resonse = await axios.post(process.env.REACT_APP_SINGIN_URL, {
      ...user,
      returnSecureToken: true,
    });
    dispatch(signIn(resonse.data));
  } catch (error) {
    dispatch(setError(error.response.data.error.message));
  }
};

export { signUpOperation, signInOperation };
