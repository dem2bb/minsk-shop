import { useState, useEffect } from 'react';
import dark from '../themes/darkTheme';
import light from '../themes/lightTheme';

const useTheme = () => {
  const [theme, SetTheme] = useState(light);
  const toggleTheme = () => {
    SetTheme(prevTheme => (prevTheme.title === 'light' ? dark : light));
  };
  return [theme, toggleTheme];
};

export default useTheme;
