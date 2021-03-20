const loaderSelector = state => state.products.loader;

const filteredProductsSelector = state =>
  state.products.productItems.filter(product =>
    product.name.toLowerCase().includes(state.products.filter.toLowerCase()),
  );

const allProductsSelector = state => state.products.productItems;

const filterSelector = state => state.products.filter;

export {
  loaderSelector,
  filteredProductsSelector,
  allProductsSelector,
  filterSelector,
};
