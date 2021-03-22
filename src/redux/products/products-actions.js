import { createAction } from '@reduxjs/toolkit';

const addProduct = createAction('products/addProduct');

const setLoader = createAction('products/setLoader');

const getAllProducts = createAction('product/getProducts');

const deleteProduct = createAction('products/deleteProduct');
const changeFilter = createAction('products/changeFilter');

const changeFilter = createAction('products/changeFilter');

export { addProduct, deleteProduct, getAllProducts, setLoader, changeFilter };
