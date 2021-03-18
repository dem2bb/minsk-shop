import { createAction, nanoid } from '@reduxjs/toolkit';

const addProduct = createAction('products/addProduct');

const setLoader = createAction('products/setLoader');

const getAllProducts = createAction('product/getProducts');

const deleteProduct = createAction('products/deleteProduct');

export { addProduct, deleteProduct, getAllProducts, setLoader };
