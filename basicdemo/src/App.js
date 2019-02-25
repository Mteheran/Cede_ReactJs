import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import List from './Components/Lists/ListExample'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header bigtitle='true'  />
        <List />
      </div>
    );
  }
}

export default App;
