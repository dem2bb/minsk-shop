import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { getIsAuth } from '../../redux/auth/auth-selectors';
import { productsSelector } from '../../redux/products/products-selectors';
import PrivateRoute from '../../routes/PrivateRoute';

const NavigationRoutes = ({ routes, match = '' }) => {
  const isAuth = useSelector(getIsAuth);
  // const products = useSelector(productsSelector);
  // console.log(isAuth);
  // console.log(products);
  console.log('match :>> ', match);

  return (
    <Suspense
      fallback={<Loader type="Puff" color="#00BFFF" height={100} width={100} />}
    >
      <Switch>
        {routes.map(({ exact, path, component }) => (
          <Route
            exact={exact}
            path={`${match}${path}`}
            component={component}
            key={path}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

export default NavigationRoutes;
