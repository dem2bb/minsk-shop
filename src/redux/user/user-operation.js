import axios from 'axios';

const setProfile = user => async (dispatch, getState) => {
  const idToken = getState().auth.user.idToken;
  const user_id = getState().auth.user.localId;
  try {
    await axios.post(
      `${process.env.REACT_APP_DATA_BASE_BASEURL}/users/${user_id}.json?auth=${idToken}`,
      user,
    );
  } catch (error) {
    console.log(error);
  }
};

export { setProfile };
