import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class PropComponent extends Component {
  render(){
    return (
      <h1>Hello, {this.props.name} {this.props.lastName}</h1>
    )
  }
}

PropComponent.propTypes = {
  name: PropTypes.string
};

class App extends Component {
  render() {
    return (
      <div>
        <h1>Prop-Types</h1>
        <PropComponent name={true}/>
      </div>
    );
  }
}

export default App;
