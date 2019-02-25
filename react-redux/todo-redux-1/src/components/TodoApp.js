import React, { Component } from 'react';
import * as actionTypes from '../actions/actionTypes';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

let nextTodoId = 0;
export default class TodoApp extends Component {
  getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        // Use the `Array.filter()` method
        return todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  };

  render() {
    const visibleTodos = this.getVisibleTodos(
      this.props.todos,
      this.props.visibilityFilter
    );
    return (
      <div style={{padding: '10px'}}>
        <AddTodo
          onAddClick={text =>
            this.props.dispatch({
              type: actionTypes.ADD_TODO,
              id: nextTodoId++,
              text
            })
          }
        />
        <TodoList
          todos={visibleTodos}
          onTodoClick={id =>
            this.props.dispatch({
              type: actionTypes.TOGGLE_TODO,
              id
            })
          }
        />

        <Footer
          visibilityFilter={this.props.visibilityFilter}
          onFilterClick={filter =>
            this.props.dispatch({
              type: actionTypes.SET_VISIBILITY_FILTER,
              filter
            })
          }
          dispatch={this.props.dispatch}
        />
      </div>
    );
  }
}
