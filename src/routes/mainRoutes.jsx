import { lazy } from 'react';

export const mainRoutes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: lazy(() => import('../views/home/Home')),
    isPrivate: false,
    restricted:false,
  },
  {
    name: 'About',
    path: '/about',
    exact: true,
    component: lazy(() => import('../views/about/AboutPage')),
    isPrivate: false,
    restricted:false,

  },
  {
    name: 'Admin',
    path: '/admin',
    exact: false,
    component: lazy(() => import('../views/products/Products')),
    isPrivate: true,
    restricted:false,


  },
  {
    name: 'AllProducts',
    path: '/allproducts',
    exact: false,
    component: lazy(() => import('../views/allproducts/AllProducts')),
    isPrivate: false,
    restricted:false,


  },
  {
    name: 'Cart',
    path: '/cart',
    exact: true,
    component: lazy(() => import('../views/cart/Cart')),
    isPrivate: false,
    restricted:false,


  },
  {
    name: 'Account',
    path: '/account',
    exact: true,
    component: lazy(() => import('../views/settings/Settings')),
    isPrivate: true,
    restricted:false,


  },
  {
    name: "Sign up",
    path: "/signup",
    exact: true,
    component: lazy(()=>import('../components/auth/AuthForm')),
    isPrivate: false,
    restricted:true,

  },
  {
    name: "Sign in",
    path: "/signin",
    exact: true,
    component: lazy(()=>import('../components/auth/AuthForm')),
    isPrivate: false,
    restricted:true,

  }
];
