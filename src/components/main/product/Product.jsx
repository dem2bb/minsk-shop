import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  addNewProduct,
  getProducts,
  deleteProduct,
} from "../../../services/productsApi";
import ProductForm from "../../productForm/ProductForm";
import ProductList from "../../productList/ProductList";
import { ProductContainer } from "./ProductStyled";

class Product extends Component {
  state = {
    productsList: [],
  };

  componentDidMount() {
    getProducts().then((productsList) => this.setState({ productsList }));
  }

  addProduct = (product) => {
    addNewProduct(product).then((id) =>
      this.setState((prevState) => ({
        productsList: [...prevState.productsList, { ...product, id: uuidv4() }],
      }))
    );
  };

  onDelete = (id) => {
    deleteProduct(id).then(() => {
      this.setState((prevState) => {
        const index = prevState.productsList.findIndex(
          (item) => item.id === id
        );
        const productsList = [
          ...prevState.productsList.slice(0, index),
          ...prevState.productsList.slice(index + 1),
        ];
        return { productsList };
      });
    });
  };

  render() {
    const { productsList } = this.state;
    return (
      <ProductContainer>
        <ProductForm addProduct={this.addProduct} />
        <ProductList products={productsList} onDelete={this.onDelete} />
      </ProductContainer>
    );
  }
}

export default Product;
