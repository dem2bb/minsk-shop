import React from 'react';
import logo from '../../images/asd.png';
import { HeaderContainer } from './HeaderStyled';
import { mainRoutes } from '../../routes/mainRoutes';
import NavigationList from '../navigation/NavigationList';

const Header = ({ toggleTheme }) => {
  return (
    <HeaderContainer>
      <h1>Hey it's Daria</h1>
      <img className="logo" src={logo} alt="Logo" />
      <NavigationList routes={mainRoutes} />
      <button onClick={toggleTheme}>Switch theme</button>
    </HeaderContainer>
  );
};

export default Header;
