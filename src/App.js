import React, { Component, createContext } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import CssBaseline from '@material-ui/core/CssBaseline';
import light from './themes/lightTheme';
import dark from './themes/darkTheme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './themes/globalStyles';
import { connect } from 'react-redux';
import { setIsAuth } from './redux/auth/auth-action';

export const ThemeSwitcher = createContext();

class App extends Component {
  state = {
    theme: light,
  };

  componentDidMount() {
    this.props.token && this.props.setIsAuth(true);
  }

  toggleTheme = () => {
    this.setState(prevState =>
      prevState.theme.title === 'light' ? { theme: dark } : { theme: light },
    );
  };
  render() {
    const { cart, theme } = this.state;
    return (
      <ThemeSwitcher.Provider value={this.toggleTheme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <div>
            <CssBaseline />
            <Header toggleTheme={this.toggleTheme} />
            <Main />
          </div>
        </ThemeProvider>
      </ThemeSwitcher.Provider>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.user.idToken,
});

const mapDispatchToProps = {
  setIsAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
