import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/products/products-actions';

const Filter = ({ filter, changeFilter }) => {
  const onChangeFilter = event => {
    changeFilter(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="insert product name"
      value={filter}
      onChange={onChangeFilter}
    />
  );
};

const mapStateToProps = state => ({
  filter: state.products.filter,
});

const mapDispatchToProps = {
  changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
