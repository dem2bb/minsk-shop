import { useState, useEffect } from 'react';
import light from '../themes/lightTheme';
import dark from '../themes/darkTheme';

const useTheme = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme.title === 'light' ? dark : light));
  };

  return [theme, toggleTheme];
};

export default useTheme;
