import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuth } from '../../redux/auth/auth-selectors';
import { NavigationListContainer } from './NavigationStyled';

const NavigationList = ({ routes, match = '' }) => {
  const isAuth = useSelector(getIsAuth);
  return (
    <NavigationListContainer>
      <ul className="navigation-list">
        {routes.map(({ name, path, exact, isPrivate, restricted }) => {
          return (
            <>
              {!isPrivate && !restricted && (
                <li key={path}>
                  <NavLink
                    exact={exact}
                    to={`${match}${path}`}
                    className="navLink"
                    activeClassName="active_navLink"
                  >
                    {name}
                  </NavLink>
                </li>
              )}
              {isPrivate && !restricted && isAuth && (
                <li key={path}>
                  <NavLink
                    exact={exact}
                    to={`${match}${path}`}
                    className="navLink"
                    activeClassName="active_navLink"
                  >
                    {name}
                  </NavLink>
                </li>
              )}
              {!isPrivate && restricted && !isAuth && (
                <li key={path}>
                  <NavLink
                    exact={exact}
                    to={`${match}${path}`}
                    className="navLink"
                    activeClassName="active_navLink"
                  >
                    {name}
                  </NavLink>
                </li>
              )}
            </>
          );
        })}
      </ul>
    </NavigationListContainer>
  );
};

export default NavigationList;
