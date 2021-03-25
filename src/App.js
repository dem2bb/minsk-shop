import React, { createContext, useState, useEffect } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import CssBaseline from '@material-ui/core/CssBaseline';
import light from './themes/lightTheme';
import dark from './themes/darkTheme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './themes/globalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { setIsAuth } from './redux/auth/auth-action';
import useTheme from './hooks/useTheme';

const App = () => {
  //   state = {
  //     theme: light,
  //   };
  const [theme, toggleTheme] = useTheme();

  // const [theme, setTheme] = useState(light);
  const token = useSelector(state => state.auth.user.idToken);
  const dispatch = useDispatch();

  useEffect(() => {
    token && dispatch(setIsAuth(true));
  }, []);

  // const toggleTheme = () => {
  //   setTheme(prevTheme => (prevTheme.title === 'light' ? dark : light));
  // };

  // const { cart, theme } = this.state;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <CssBaseline />
        <Header toggleTheme={toggleTheme} />
        <Main />
      </div>
    </ThemeProvider>
  );
};

export default App;
