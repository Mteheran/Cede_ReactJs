import React from 'react';
import FilterLink from './FilterLink';

const Footer = ({
    visibilityFilter,
    onFilterClick,
    dispatch
  }) => (
    <p>
      <FilterLink
        filter='SHOW_ALL'
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
        dispatch={dispatch}
      >
        All
      </FilterLink>
      {', '}
      <FilterLink
        filter='SHOW_ACTIVE'
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
        dispatch={dispatch}
      >
        Active
      </FilterLink>
        {', '}
      <FilterLink
        filter='SHOW_COMPLETED'
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
        dispatch={dispatch}
      >
        Completed
      </FilterLink>
    </p>
  );

  export default Footer;