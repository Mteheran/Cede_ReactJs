import React, { Component } from 'react';

import './App.css';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Messages from './components/Messages';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>

        <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/about" component={About} />
            <Redirect to="/"  />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
