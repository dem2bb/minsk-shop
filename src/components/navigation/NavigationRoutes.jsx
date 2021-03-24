import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import {useSelector} from "react-redux"
import Loader from "react-loader-spinner";
import { getIsAuth } from "../../redux/auth/auth-selectors";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";

// import { allProductsSelector } from "../../redux/products/products-selector";

const NavigationRoutes = ({routes,  match = ""}) => {
 
const isAuth = useSelector(getIsAuth)
// const products = useSelector(allProductsSelector)
  
  return (
    <Suspense
      fallback={<Loader type="Puff" color="#00BFFF" height={100} width={100} />}
    >
      <Switch>
        {routes.map((item) => (
          item.isPrivate ? (<PrivateRoute {...item} key={item.path}/> )
            : (< PublicRoute {...item} key={item.path}/> ) 

        ))}
      </Switch>
    </Suspense>
  );
};

export default NavigationRoutes;
