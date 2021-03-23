import { lazy } from 'react';

export const productRoutes = [
  {
    exact: true,
    path: '/list',
    name: 'List',
    component: lazy(() => import('../components/productList/ProductList')),
    private: true,
  },
  {
    exact: true,
    path: '/form',
    name: 'ADD PRODUCT',
    component: lazy(() => import('../components/productForm/ProductForm')),
    private: true,
  },
];
