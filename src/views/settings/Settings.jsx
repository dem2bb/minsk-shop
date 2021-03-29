import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import useTheme from '../../hooks/useTheme';
import { signOut } from '../../redux/auth/auth-action';
import Profile from './Profile';

const Settings = () => {
  const dispatch = useDispatch();
  const [_, toggleTheme] = useTheme();
  return (
    <div>
      <Profile />
      <button type="button" onClick={() => dispatch(signOut())}>
        Log out
      </button>
    </div>
  );
};

export default Settings;
