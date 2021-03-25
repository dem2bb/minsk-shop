import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { getIsAuth } from '../redux/auth/auth-selectors';

const PublicRoutes = ({ exact, path, component, restricted }) => {
  const isAuth = useSelector(getIsAuth);
  return (
    <>
      {isAuth && restricted ? (
        <Redirect to="/admin" />
      ) : (
        <Route
          exact={exact}
          path={`${path}`}
          component={component}
          key={path}
        />
      )}
    </>
  );
};

export default PublicRoutes;
