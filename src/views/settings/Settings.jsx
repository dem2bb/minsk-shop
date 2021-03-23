import React from 'react';
import { connect } from 'react-redux';
import { ThemeSwitcher } from '../../App';
import { signOut } from '../../redux/auth/auth-actions';

const Settings = ({signOut}) => {
  return (
    <div>
      <ThemeSwitcher.Consumer>
<<<<<<< HEAD
        {toggleTheme => (
          <button type="button" onClick={toggleTheme}>
            Change Theme
          </button>
        )}
      </ThemeSwitcher.Consumer>
      <button type="button">Log out</button>
=======
        {toggleTheme =>
          <button
            type="button"
            onClick={toggleTheme}
        >
          Change Theme
          </button>}
      </ThemeSwitcher.Consumer>
      <button type="button" onClick={()=>signOut()} >Log out</button>
>>>>>>> 9a9da18f8bb08a5a3e7cfc2afd2fa00cc1820eb8
    </div>
  );
};


const mapDispatchToProps = {
  signOut
}

export default connect(null,mapDispatchToProps) (Settings);
