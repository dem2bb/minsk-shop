import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProfile } from '../../redux/user/user-operation';

const initialState = {
  firstName: '',
  lastName: '',
  birthday: '',
};

const Profile = () => {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();

  const onHandleChange = e => {
    setUser(prevUser => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    dispatch(setProfile(user));
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        type="text"
        name="firstName"
        value={user.firstName}
        placeholder="insert first name"
        onChange={onHandleChange}
      />
      <input
        type="text"
        name="lastName"
        value={user.lastName}
        placeholder="insert last name"
        onChange={onHandleChange}
      />
      <input
        type="text"
        name="birthday"
        value={user.birthday}
        placeholder="insert birthday"
        onChange={onHandleChange}
      />
      <button type="submit">Change account</button>
    </form>
  );
};

export default Profile;
