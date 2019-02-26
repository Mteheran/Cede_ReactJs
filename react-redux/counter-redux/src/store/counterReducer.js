import * as actionTypes from './actionTypes';

export default (state = 0, action) => {
    switch (action.type) {
      case actionTypes.INCREMENT:
        return state + 1
      case actionTypes.DECREMENT:
        return state - 1
      case actionTypes.RESET:
        return 0
      default:
        return state
    }
  }