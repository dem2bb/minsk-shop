import { addNewProduct, getProducts } from '../../services/productsApi';
import { addProduct, getAllProducts, setLoader } from './products-actions';

const addProductOperation = product => async dispatch => {
  const response = await addNewProduct(product);
  dispatch(addProduct({ ...product, id: response }));
  console.log(response);
};

const getAllProductsOperation = () => async dispatch => {
  dispatch(setLoader());
  const response = await getProducts();
  dispatch(getAllProducts(response));
};

export { addProductOperation, getAllProductsOperation };
