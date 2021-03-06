import { lazy } from 'react';

export const mainRoutes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: lazy(() => import('../views/home/Home')),
  },
  {
    name: 'About',
    path: '/about',
    exact: true,
    component: lazy(() => import('../views/about/AboutPage')),
  },
  {
    name: 'Products',
    path: '/products',
    exact: false,
    component: lazy(() => import('../views/products/Products')),
  },
  {
    name: 'AllProducts',
    path: '/allproducts',
    exact: false,
    component: lazy(() => import('../views/allproducts/AllProducts')),
  },
  {
    name: 'Cart',
    path: '/cart',
    exact: true,
    component: lazy(() => import('../views/cart/Cart')),
  },
  {
    name: 'Settings',
    path: '/settings',
    exact: true,
    component: lazy(() => import('../views/settings/Settings')),
  },
];
