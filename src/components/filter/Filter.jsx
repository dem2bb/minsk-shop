import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/products/products-actions';
import { filterSelector } from '../../redux/products/products-selectors';

const Filter = ({ filter, handleFilter }) => {
  const onChangeFilter = event => handleFilter(event.target.value);

  return (
    <div>
      <input
        type="text"
        name="filter"
        value={filter}
        placeholder="insert product name"
        onChange={onChangeFilter}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  filter: filterSelector(state),
});

const mapDispatchToProps = {
  handleFilter: changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
