import React from 'react';
import { productRoutes } from '../../routes/productRoutes';
import InnerNavigation from '../../components/innerNavigation/InnerNavigation';

const Products = () => {
  return <InnerNavigation routes={productRoutes} />;
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
