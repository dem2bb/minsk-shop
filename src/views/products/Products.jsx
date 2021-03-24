import React, { Component } from 'react';
import { productRoutes } from '../../routes/productRoutes';
import NavigationList from '../../components/navigation/NavigationList';
import NavigationRoutes from '../../components/navigation/NavigationRoutes';
import { useRouteMatch } from 'react-router-dom';

const Products = () => {
  const match = useRouteMatch('');
  return (
    <>
      <NavigationList routes={productRoutes} match={match.url} />
      <NavigationRoutes routes={productRoutes} match={match.url} />
    </>
  );
};

export default Products;
