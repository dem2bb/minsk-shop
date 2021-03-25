import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductListCont } from './ProductStyles';
import notFoundImg from '../../images/notfound.png';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '../modal/Modal.hoc';
import { deleteProduct } from '../../redux/products/products-actions';
import { getAllProductsOperation } from '../../redux/products/products-operations';
import Loader from 'react-loader-spinner';
import Filter from '../filter/Filter';
import {
  loaderSelector,
  filteredProductsSelector,
} from '../../redux/products/products-selectors';

const ProductList = () => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector(filteredProductsSelector);
  const loader = useSelector(loaderSelector);

  useEffect(() => {
    dispatch(getAllProductsOperation());
  }, []);

  const onDelete = event => {
    const { id } = event.currentTarget.dataset;
    dispatch(deleteProduct(id));
    onClose();
  };

  const onOpenModal = event => {
    const { id } = event.target.dataset;
    setCurrentProduct(products.find(product => product.id === id));
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Filter />
      {!loader ? (
        <ProductListCont>
          {products.map(
            ({ category, description, id, name, price, sale, avatar }) => {
              return (
                <li className="product_item" key={id}>
                  <img
                    className="notfound_img"
                    src={avatar ? avatar : notFoundImg}
                    alt={name}
                  />
                  <h3>{name}</h3>
                  <p className="product_list_text">
                    <b>Price:</b> {price}
                  </p>
                  <p className="product_list_text">
                    <b>Sale:</b> {sale ? 'Enabled' : 'Disabled'}
                  </p>
                  <div className="buttons">
                    <IconButton
                      color="primary"
                      aria-label="add to shopping cart"
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="primary"
                      data-id={id}
                      onClick={onDelete}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <button type="button" onClick={onOpenModal} data-id={id}>
                      Details
                    </button>
                  </div>
                </li>
              );
            },
          )}
        </ProductListCont>
      ) : (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      {isModalOpen && (
        <Modal onClose={onClose} isOpen={isModalOpen}>
          <img
            className="notfound_img"
            src={currentProduct.avatar ? currentProduct.avatar : notFoundImg}
            alt={currentProduct.name}
          />
          <h3>{currentProduct.name}</h3>
          <p className="product_list_text">
            <b>Price:</b> {currentProduct.price}
          </p>
          <p className="product_list_text">
            <b>Description:</b> {currentProduct.description}
          </p>
          <p className="product_list_text">
            <b>Sale:</b> {currentProduct.sale ? 'Enabled' : 'Disabled'}
          </p>
          <p className="product_list_text">
            <b>Category:</b> {currentProduct.category}
          </p>
          <div className="buttons">
            <IconButton color="primary" aria-label="add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              color="primary"
              data-id={currentProduct.id}
              onClick={this.onDelete}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ProductList;
