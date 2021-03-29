import axios from 'axios';
import { addNewProduct, getProducts } from '../../services/productsApi';
import { addProduct, getAllProducts, setLoader } from './products-actions';

const addProductOperation = product => async (dispatch, getState) => {
  // const response = await addNewProduct(product);
  const idToken = getState().auth.user.idToken;
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_DATA_BASE_BASEURL}/products.json?auth=${idToken}`,
      product,
    );
    dispatch(addProduct({ ...product, id: response.data.name }));
  } catch (error) {
    console.log(error);
  }
};

const getAllProductsOperation = () => async dispatch => {
  dispatch(setLoader());
  const response = await getProducts();
  dispatch(getAllProducts(response));
};

export { addProductOperation, getAllProductsOperation };
