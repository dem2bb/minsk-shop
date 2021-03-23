import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

const PrivateRoute = ({ exact, path, component }) => {
  const match = useRouteMatch();
  console.log(match);

  return (
    <>
      <Route
        exact={exact}
        path={`${match}${path}`}
        component={component}
        key={path}
      />
    </>
  );
};

export default PrivateRoute;
