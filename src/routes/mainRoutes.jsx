import { lazy } from 'react';

export const mainRoutes = [
  // {
  //   name: 'Home',
  //   path: '/',
  //   exact: true,
  //   component: lazy(() => import('../views/home/Home')),
  // },
  // {
  //   name: 'About',
  //   path: '/about',
  //   exact: true,
  //   component: lazy(() => import('../views/about/AboutPage')),
  // },
  // {
  //   name: 'Products',
  //   path: '/products',
  //   exact: false,
  //   component: lazy(() => import('../views/products/Products')),
  // },
  // {
  //   name: 'AllProducts',
  //   path: '/allproducts',
  //   exact: false,
  //   component: lazy(() => import('../views/allproducts/AllProducts')),
  // },
  // {
  //   name: 'Cart',
  //   path: '/cart',
  //   exact: true,
  //   component: lazy(() => import('../views/cart/Cart')),
  // },
  {
    name: 'Account',
    path: '/account',
    exact: true,
    component: lazy(() => import('../views/settings/Settings')),
  },
  {
    name: "Sign up",
    path: "/signup",
    exact: true,
    component: lazy(()=>import('../components/auth/AuthForm'))

  },
  {
<<<<<<< HEAD
    name: 'Account',
    path: '/account',
    exact: true,
    component: lazy(() => import('../views/settings/Settings')),
  },
  {
    name: 'Signup',
    path: '/signup',
    exact: true,
    component: lazy(() => import('../components/auth/AuthForm')),
  },
  {
    name: 'Signin',
    path: '/signin',
    exact: true,
    component: lazy(() => import('../components/auth/AuthForm')),
  },
=======
    name: "Sign in",
    path: "/signin",
    exact: true,
    component: lazy(()=>import('../components/auth/AuthForm'))

  }
>>>>>>> 9a9da18f8bb08a5a3e7cfc2afd2fa00cc1820eb8
];
