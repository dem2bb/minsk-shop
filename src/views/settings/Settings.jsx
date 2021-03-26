import React, { useContext } from 'react';
import { connect } from 'react-redux';
import useTheme from '../../hooks/useTheme';
import { signOut } from '../../redux/auth/auth-action';

const Settings = ({ signOut }) => {
  const [_, toggleTheme] = useTheme();
  return (
    <div>
      <button type="button" onClick={toggleTheme}>
        Change Theme
      </button>
      <button type="button" onClick={() => signOut()}>
        Log out
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  signOut,
};

export default connect(null, mapDispatchToProps)(Settings);
