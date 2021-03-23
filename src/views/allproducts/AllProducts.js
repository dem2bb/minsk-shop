import React, { Component } from 'react';
import notFoundImg from '../../images/notfound.png';
import { AllProductsCont } from './AllProductsStyled';
import { deleteProduct } from '../../redux/products/products-actions';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cart-actions';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { AllProductsItemCont } from './AllProductsItemStyled';

import './AllProducts.css';
<<<<<<< HEAD
import { productsSelector } from '../../redux/products/products-selectors';
=======
import { allProductsSelector } from '../../redux/products/products-selector';
>>>>>>> 9a9da18f8bb08a5a3e7cfc2afd2fa00cc1820eb8

class AllProducts extends Component {
  addProduct = event => {
    const { id } = event.currentTarget.dataset;
    const product = this.props.productItems.find(item => item.id === id);
    this.props.addToCart(product);
  };

  deleteProduct = event => {
    const { id } = event.currentTarget.dataset;
    this.props.deleteProduct(id);
  };

  render() {
    const { productItems, cart } = this.props;
    return (
      <>
        <CSSTransition in={true} classNames="anim" appear timeout={3000}>
          <TransitionGroup className="product-list" component="ul">
            {productItems.map(
              ({ category, description, id, name, price, sale, avatar }) => {
                return (
                  <AllProductsItemCont key={id} timeout={3000}>
                    <div>
                      <img
                        className="notfound_img"
                        src={avatar ? avatar : notFoundImg}
                        alt={name}
                      />
                      <h3>{name}</h3>
                      <p className="product_list_text">
                        <b>Price:</b> {price}$
                      </p>
                      <p className="product_list_text">
                        <b>Description:</b> {description}
                      </p>
                      <p className="product_list_text">
                        <b>Sale:</b> {sale ? 'Enabled' : 'Disabled'}
                      </p>
                      <p className="product_list_text">
                        <b>Category:</b> {category}
                      </p>
                      <div className="buttons">
                        <IconButton
                          color="primary"
                          aria-label="add to shopping cart"
                          data-id={id}
                          onClick={this.addProduct}
                        >
                          <AddShoppingCartIcon />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          color="primary"
                          data-id={id}
                          onClick={this.deleteProduct}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </div>
                  </AllProductsItemCont>
                );
              },
            )}
          </TransitionGroup>
        </CSSTransition>
      </>
    );
  }
}

const mapStateToProps = state => ({
<<<<<<< HEAD
  productItems: productsSelector(state),
=======
  productItems: allProductsSelector(state),
>>>>>>> 9a9da18f8bb08a5a3e7cfc2afd2fa00cc1820eb8
});

const mapDispatchToProps = {
  deleteProduct,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
