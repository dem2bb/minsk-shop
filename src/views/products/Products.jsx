import React, { Component } from 'react';
import { productRoutes } from '../../routes/productRoutes';
import NavigationList from '../../components/navigation/NavigationList';
import NavigationRoutes from '../../components/navigation/NavigationRoutes';
import { useRouteMatch } from 'react-router-dom';

const Products = () => {
  const match = useRouteMatch();

  return (
    <>
      <h2>Products</h2>
      <NavigationList routes={productRoutes} match={match.url} />
      <NavigationRoutes routes={productRoutes} match={match.url} />
    </>
  );
};

export default Products;

// class Products extends Component {
//   componentDidMount() {
//     this.props.history.push(`${this.props.match.url}/list`);
//   }

//   render() {
//     return (
//       <>
//         <NavigationList routes={productRoutes} match={this.props.match.url} />
//         <NavigationRoutes routes={productRoutes} match={this.props.match.url} />
//       </>
//     );
//   }
// }

// export default Products;
