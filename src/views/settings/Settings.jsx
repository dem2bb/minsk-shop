import React from 'react';
import { connect } from 'react-redux';
import { ThemeSwitcher } from '../../App';
import { signOut } from '../../redux/auth/auth-actions';

const Settings = ({signOut}) => {
  return (
    <div>
      <ThemeSwitcher.Consumer>
        {toggleTheme =>
          <button
            type="button"
            onClick={toggleTheme}
        >
          Change Theme
          </button>}
      </ThemeSwitcher.Consumer>
      <button type="button" onClick={()=>signOut()} >Log out</button>
    </div>
  );
};


const mapDispatchToProps = {
  signOut
}

export default connect(null,mapDispatchToProps) (Settings);
