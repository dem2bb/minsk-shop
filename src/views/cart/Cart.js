import React from 'react';
import { connect } from 'react-redux';
import notFoundImg from '../../images/notfound.png';
import {
  increment,
  decrement,
  removeFromCart,
} from '../../redux/cart/cart-actions';
import { CartListContainer } from './CartStyled';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { cartSelector } from '../../redux/cart/cart-selector';
import { createOrderOperation } from '../../redux/cart/cart-operation';

const Cart = ({
  cart,
  increment,
  decrement,
  removeFromCart,
  createOrderOperation,
}) => {
  const onHandleClick = ({ currentTarget }) => {
    const { id } = currentTarget.closest('[data-id]').dataset;
    switch (currentTarget.name) {
      case 'increment':
        return increment(id);
      case 'decrement':
        return decrement(id);
      case 'removeFromCart':
        return removeFromCart(id);
      default:
        return;
    }
  };

  const handelOrder = () => {
    createOrderOperation(cart.map(({ id, quantity }) => ({ id, quantity })));
  };

  return (
    <div className="productContainer">
      <CartListContainer>
        {cart.map(
          ({
            name,
            price,
            avatar,
            description,
            sale,
            category,
            id,
            quantity,
          }) => (
            <li data-id={id} key={id} className="product_item">
              <img
                className="notfound_img"
                src={avatar ? avatar : notFoundImg}
                alt={name}
              />
              <h4 className="product_list_text">{name}</h4>
              <p className="product_list_text">Price: {price}$</p>
              <p className="product_list_text">Quantity: {quantity}</p>
              <div className="buttons">
                <button
                  className="counterButton "
                  name="increment"
                  onClick={onHandleClick}
                >
                  +
                </button>
                <button
                  className="counterButton"
                  name="decrement"
                  disabled={!quantity}
                  onClick={onHandleClick}
                >
                  -
                </button>
              </div>
              <IconButton
                aria-label="delete"
                color="primary"
                name="removeFromCart"
                onClick={onHandleClick}
              >
                <DeleteIcon />
              </IconButton>
            </li>
          ),
        )}
      </CartListContainer>
      {!!cart.length && (
        <p className="orderCont">
          {cart.reduce((acc, item) => {
            acc += item.quantity * item.price;
            return acc;
          }, 0)}
          $
          <button className="orderButton" onClick={handelOrder}>
            Order
          </button>
        </p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  cart: cartSelector(state),
});

const mapDispatchToProps = {
  increment,
  decrement,
  removeFromCart,
  createOrderOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
