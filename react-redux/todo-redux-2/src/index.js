import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducers/appReducer';
import TodoApp from './components/TodoApp';

const store = createStore(appReducer);
render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
