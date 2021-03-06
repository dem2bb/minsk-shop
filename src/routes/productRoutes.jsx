import ProductForm from "../components/productForm/ProductForm";
import ProductList from "../components/productList/ProductList";

export const productRoutes = [
  {
    exact: true,
    path: "/list",
    name: "List",
    component: ProductList,
  },
  {
    exact: true,
    path: "/form",
    name: "ADD PRODUCT",
    component: ProductForm,
  },
];
