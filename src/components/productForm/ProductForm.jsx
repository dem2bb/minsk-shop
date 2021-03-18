import React, { Component } from 'react';
import { addProduct } from '../../redux/products/products-actions';
import { addNewProduct } from '../../services/productsApi';
import { ProductFormContainer } from './productFormStyles';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import './animation.css';
import { addProductOperation } from '../../redux/products/products-operations';

const categories = ['Fruits', 'Drinks', 'Clothes', 'Books'];

const toDataUrl = element => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(element.files[0]);
  });
};

const initialState = {
  name: '',
  price: '',
  avatar: '',
  description: '',
  sale: false,
  category: categories[0],
};

class ProductForm extends Component {
  state = {
    ...initialState,
  };

  onHandleChange = e => {
    if (e.target.type === 'file') {
      toDataUrl(e.target).then(avatar => this.setState({ avatar }));
      console.dir(e.target);
      return;
    }
    if (e.target.type === 'checkbox') {
      this.setState(prevState => ({
        sale: !prevState.sale,
      }));
      return;
    }
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    // addNewProduct(this.state);
    // this.setState({
    //   ...initialState,
    // });
    this.props.addProductOperation(this.state);
  };

  render() {
    const { name, price, category, description } = this.state;
    return (
      <CSSTransition in={true} appear timeout={2000} classNames="animation">
        <ProductFormContainer>
          <>
            <h2>Products Form</h2>
            <form onSubmit={this.onHandleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  onChange={this.onHandleChange}
                  value={name}
                />
              </label>
              <label>
                Price:
                <input
                  type="text"
                  name="price"
                  onChange={this.onHandleChange}
                  value={price}
                />
              </label>
              <label htmlFor="file">Avatar</label>
              <input
                type="file"
                id="file"
                name="avatar"
                className="inputfile"
                onChange={this.onHandleChange}
              />
              <label>
                Description:
                <textarea
                  type="text"
                  name="description"
                  onChange={this.onHandleChange}
                  value={description}
                />
              </label>
              <div className="options">
                <label>
                  Category:
                  <select
                    name="category"
                    onChange={this.onHandleChange}
                    value={category}
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Sale:
                  <input
                    type="checkbox"
                    name="sale"
                    checked={this.state.sale}
                    onChange={this.onHandleChange}
                  />
                </label>
              </div>
              <button type="submit" className="button-3">
                Add product
              </button>
            </form>
          </>
        </ProductFormContainer>
      </CSSTransition>
    );
  }
}

export default connect(null, { addProductOperation })(ProductForm);
