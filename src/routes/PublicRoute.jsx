import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'
import { getIsAuth } from '../redux/auth/auth-selectors'


const PublicRoute = ({ exact, path, component, restricted }) => {

    const isAuth = useSelector(getIsAuth);

    return (
        <>
      {!isAuth && !restricted ?
      <Route
        exact={exact}
        path={`${path}`}
        component={component}
        key={path}
        />
    :<Redirect to="/admin"/>}
    </>
    )
}

export default PublicRoute
