import todos from './todos';
import visibilityFilter from './visibilityFilter';

const appReducer = (state = {}, action) => {
    return {
       todos: todos(
        state.todos,
        action
      ),
      visibilityFilter: visibilityFilter(
        state.visibilityFilter,
        action
      )
    };
  };

export default appReducer;