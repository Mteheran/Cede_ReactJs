import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class PropComponent extends Component {
  render(){
    return (
      <h1>Hello, {this.props.name} {this.props.lastName} - {this.props.year}</h1>
    )
  }
}

PropComponent.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string.isRequired,
  year: PropTypes.number
};

class App extends Component {
  render() {
    return (
      <div>
        <h1>Prop-Types</h1>
        <PropComponent name={'Miguel'} lastName={true} year={'2019'} />
      </div>
    );
  }
}

export default App;
