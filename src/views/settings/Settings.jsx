import React from 'react';
import { ThemeSwitcher } from '../../App';

const Settings = () => {
  return (
    <div>
      <ThemeSwitcher.Consumer>
        {toggleTheme => (
          <button type="button" onClick={toggleTheme}>
            Change Theme
          </button>
        )}
      </ThemeSwitcher.Consumer>

      <button type="button">Log out </button>
    </div>
  );
};

export default Settings;
