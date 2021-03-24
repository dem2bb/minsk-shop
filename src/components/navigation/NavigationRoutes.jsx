import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getIsAuth } from '../../redux/auth/auth-selectors';
import { productsSelector } from '../../redux/products/products-selectors';
import PrivateRoute from '../../routes/PrivateRoute';
import PublicRoutes from '../../routes/PublicRoutes';

const NavigationRoutes = ({ routes, match = '' }) => {
  const isAuth = useSelector(getIsAuth);
  return (
    <Suspense
      fallback={<Loader type="Puff" color="#00BFFF" height={100} width={100} />}
    >
      <Switch>
        {routes.map(item =>
          item.isPrivate ? (
            <PrivateRoute {...item} match={match} key={item.path} />
          ) : (
            <PublicRoutes {...item} key={item.path} />
          ),
        )}
      </Switch>
    </Suspense>
  );
};

export default NavigationRoutes;
