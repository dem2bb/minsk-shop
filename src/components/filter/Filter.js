import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/products/products-actions';

const Filter = ({ filter, handleChangeFilter }) => {
  const onChangeFilter = evt => {
    handleChangeFilter(evt.target.value);
  };

  return (
    <input
      type="text"
      name="filter"
      placeholder="product name"
      value={filter}
      onChange={onChangeFilter}
    />
  );
};

const mapStateToProps = state => ({
  filter: state.products.filter,
});

const mapDispatchToProps = {
  handleChangeFilter: changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
