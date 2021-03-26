import React from 'react';
import { productRoutes } from '../../routes/productRoutes';
import InnerNavigation from '../../components/innerNavigation/InnerNavigation';

const Products = () => {
  return <InnerNavigation routes={productRoutes} />;
};

export default Products;
