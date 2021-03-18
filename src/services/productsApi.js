import axios from "axios";
import { transformData } from "../utils/utils";

const addNewProduct = async (product) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_DATA_BASE_BASEURL}/products.json`,
      product
    );
    return response.data.name;
  } catch (error) {
    console.log(error);
  }
};

const getProducts = async (product) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_DATA_BASE_BASEURL}/products.json`,
      product
    );
    return response.data ? transformData(response.data) : [];
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_DATA_BASE_BASEURL}/products/${id}.json`
    );
  } catch (error) {
    console.log(error);
  }
};

export { addNewProduct, getProducts, deleteProduct };
