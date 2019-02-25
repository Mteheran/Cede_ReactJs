import React from 'react';
import * as actionTypes from '../actions/actionTypes';

const FilterLink = ({ filter, currentFilter, children, dispatch }) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        dispatch({
          type: actionTypes.SET_VISIBILITY_FILTER,
          filter
        });
      }}
    >
      {children}
    </a>
  );
};

export default FilterLink;
