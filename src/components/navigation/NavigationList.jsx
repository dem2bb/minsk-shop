import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationListContainer } from "./NavigationStyled";

const NavigationList = ({ routes, match = "" }) => {
  return (
    <NavigationListContainer>
      <ul className="navigation-list">
        {routes.map(({ name, path, exact }) => (
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
        ))}
      </ul>
    </NavigationListContainer>
  );
};

export default NavigationList;
