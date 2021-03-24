import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationListContainer } from "./NavigationStyled";
import {useSelector} from "react-redux"



const NavigationList = ({ routes, match = "" }) => {
  const isAuth = useSelector(state => state.auth.isAuth)
  return (
    <NavigationListContainer>
      <ul className="navigation-list">
        {routes.map(({ name, path, exact, isPrivate, restricted }) => {
          return (
            <>
              {!isPrivate&&!restricted&&
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
              }
               {isPrivate&&!restricted&&isAuth&&
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
              }
               {!isPrivate&&restricted&&isAuth&&
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
              }
            </>
          );
        })}
      </ul>
    </NavigationListContainer>

  );
};

export default NavigationList;
