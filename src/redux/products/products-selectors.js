import { createSelector } from 'reselect';

export const loaderSelector = state => state.products.loader;

export const productsSelector = state => state.products.productItems;

export const filterSelector = state => state.products.filter;

export const filteredSelector = createSelector(
  [productsSelector, filterSelector],
  (productItems, filter) =>
    productItems.filter(product =>
      product.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);
