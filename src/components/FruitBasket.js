import React, { Component } from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ fruit, filters, currentFilter, newFilter }) =>

  <div className="fruit-basket">
    <Filter
      filters={filters}
      handleChange={newFilter} />

    <FilteredFruitList
      fruit={fruit}
      filter={currentFilter} />
  </div>;

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => { }
}

export default FruitBasket;

