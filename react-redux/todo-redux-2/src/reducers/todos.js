import * as actionTypes from '../actions/actionTypes';
import todo from './todo';
const todos = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [
                ...state
                , todo(undefined, action)
            ];
        case actionTypes.TOGGLE_TODO:
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

export default todos;