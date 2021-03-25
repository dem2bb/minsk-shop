import {useSelector} from 'react-redux';


import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ exact, path, component, restricted }) => {
  return (
    <>
      {isAuth
        ? (<Route exact={exact} path={`${path}`} component={component} key={path} />)
        : (<Redirect to="/signin" />)

      
    </>
  );
};

export default PrivateRoute;
