import React from 'react';
import { ThemeSwitcher } from '../../App';

const Settings = () => {
  return (
    <div>
      <ThemeSwitcher.Consumer>
        {toggleTheme => <button onClick={toggleTheme}>Change Theme</button>}
      </ThemeSwitcher.Consumer>
    </div>
  );
};

export default Settings;
