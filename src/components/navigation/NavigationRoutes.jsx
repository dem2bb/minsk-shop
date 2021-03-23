import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getIsAuth } from '../auth/auth-selectors';
import { productsSelector } from '../../redux/products/products-selectors';
import PrivateRoute from '../../routes/PrivateRoute';

const NavigationRoutes = ({ routes, match = '' }) => {
  const isAuth = useSelector(getIsAuth);
  const products = useSelector(productsSelector);

  return (
    <Suspense
      fallback={<Loader type="Puff" color="#00BFFF" height={100} width={100} />}
    >
      <Switch>
        {routes.map(item => (
          <PrivateRoute {...item} />
        ))}
      </Switch>
    </Suspense>
  );
};

export default NavigationRoutes;

// import React, { Suspense } from "react";
// import { Switch, Route } from "react-router-dom";
// import Loader from "react-loader-spinner";

// const NavigationRoutes = ({
//   routes,
//   match = "",
//   cart,
//   addToCart,
//   deleteFromCart,
//   sendOrder,
// }) => {
//   const renderProps = (item, data) => {
//     const { path, component: MyComponent } = item;
//     switch (path) {
//       case "/cart":
//         return (
//           <MyComponent
//             {...data}
//             cart={cart}
//             deleteFromCart={deleteFromCart}
//             addToCart={addToCart}
//             sendOrder={sendOrder}
//           />
//         );
//       case "/allproducts":
//         return <MyComponent {...data} addToCart={addToCart} />;
//       default:
//         return <MyComponent {...data} />;
//     }
//   };

//   return (
//     <Suspense
//       fallback={<Loader type="Puff" color="#00BFFF" height={100} width={100} />}
//     >
//       <Switch>
//         {routes.map((item) => (
//           <Route
//             exact={item.exact}
//             path={`${match}${item.path}`}
//             render={(data) => renderProps(item, data)}
//             key={item.path}
//           />
//         ))}
//       </Switch>
//     </Suspense>
//   );
// };

// export default NavigationRoutes;
