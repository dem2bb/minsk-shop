import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { getIsAuth } from '../redux/auth/auth-selectors';

const PrivateRoute = ({ exact, path, component }) => {
  const isAuth = useSelector(getIsAuth);
  return (
    <>
      {isAuth ? (
        <Route
          exact={exact}
          path={`${path}`}
          component={component}
          key={path}
        />
      ) : (
        <Redirect to="/signin" />
      )}
    </>
  );
};

export default PrivateRoute;
