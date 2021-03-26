import React, { Component } from 'react';
import ProductForm from '../../productForm/ProductForm';
import ProductList from '../../productList/ProductList';
import { ProductContainer } from './ProductStyled';

class Product extends Component {
  render() {
    return (
      <ProductContainer>
        <ProductForm />
        <ProductList />
      </ProductContainer>
    );
  }
}

export default Product;
