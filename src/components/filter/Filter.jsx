import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/products/products-actions';
import { filterSelector } from '../../redux/products/products-selector';

const Filter = ({ filter, handleFilter }) => {
  const onChangeFilter = event => {
    handleFilter(event.target.value);
  };
  return (
    <input
      type="text"
      name="filter"
      placeholder="search product"
      value={filter}
      onChange={onChangeFilter}
    />
  );
};

const mapStateToProps = state => ({
  filter: filterSelector(state),
});

const mapDispatchToProps = {
  handleFilter: changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
