import React from 'react';
import { Suspense } from 'react';
import { NavLink, Route, useRouteMatch, Switch } from 'react-router-dom';

const InnerNavigation = ({ routes }) => {
  const match = useRouteMatch();
  return (
    <>
      <ul>
        {routes.map(({ path, name, exact }) => (
          <li key={path}>
            <NavLink to={match.url + path} exact={exact}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          {routes.map(({ path, exact, component }) => (
            <Route
              path={match.url + path}
              exact={exact}
              key={path}
              component={component}
            />
          ))}
        </Switch>
      </Suspense>
    </>
  );
};

export default InnerNavigation;
