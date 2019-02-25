import * as actionTypes from '../actions/actionTypes';

const todo = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case actionTypes.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
}

export default todo;