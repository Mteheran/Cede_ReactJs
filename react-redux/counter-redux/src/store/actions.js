import * as actionTypes from './actionTypes';

export const incrementAction = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrementAction = () => {
    return {
        type: actionTypes.DECREMENT
    }
}