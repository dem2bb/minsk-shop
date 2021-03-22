const loaderSelector = state => state.products.loader;

const filteredProductsSelector = state =>
  state.products.productItems.filter(product =>
    product.name.toLowerCase().includes(state.products.filter.toLowerCase()),
  );

export { loaderSelector, filteredProductsSelector };

