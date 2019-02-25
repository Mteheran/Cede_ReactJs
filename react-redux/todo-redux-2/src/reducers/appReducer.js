import todos from './todos';
import visibilityFilter from './visibilityFilter';
import {combineReducers} from 'redux'; 

const appReducer = combineReducers({todos, visibilityFilter});

export default appReducer;