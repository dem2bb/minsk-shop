import axios from "axios";



const signUpOperation = user => async dispatch => {
  dispatch();

  try {
    async axios.post(process.env.REACT_APP_SIGNUP_URL, {...user, returnSecureToken: true})
    // dispatch();
  } catch (error) {
    // dispatch();
  }
};
