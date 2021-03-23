import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

const PrivateRoute = ({ exact, path, component, match = '' }) => {
  // const match = useRouteMatch();
  console.log('match', match);

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

// const PrivateRoute = ({ exact, path, component: MyComponent }) => {
//   const match = useRouteMatch('');
//   // console.log(match);

//   return (
//     <>
//       <Route
//         exact={exact}
//         path={`${match}${path}`}
//         render={props => <MyComponent {...props} />}
//         key={path}
//       />
//     </>
//   );
// };

// export default PrivateRoute;
