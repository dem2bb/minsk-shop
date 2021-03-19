export const loaderSelector = state => state.products.loader;

export const filteredProductsSelector = state =>
  state.products.productItems.filter(product =>
    product.name.toLowerCase().includes(state.products.filter.toLowerCase()),
  );

export const productsSelector = state => state.products.productItems;

export const filterSelector = state => state.products.filter;
