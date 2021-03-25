import React from 'react';
import { Route } from 'react-router-dom';
import { getIsAuth } from '../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ exact, path, component }) => {
  return (
    <>
      <Route exact={exact} path={`${path}`} component={component} key={path} />
    </>
  );
};

export default PrivateRoute;
