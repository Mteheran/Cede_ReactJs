import React from 'react';

export default class TemperatureInput extends React.Component {
  scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  constructor(props) {
    super(props);
    this.state = { temperature: '' };
  }

  handleChange = e => {
    console.log(this.props);
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {this.scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
