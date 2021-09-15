import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.clickButton = this.clickButton.bind(this);
  }

  clickButton(e) {
    this.setState((state) => calculate(state, e.target.name));
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <section className="calculator-section">
        <p className="result">
          {total}
          {operation}
          {next}
        </p>
        <button type="button" name="AC" onClick={this.clickButton}>AC</button>
        <button type="button" name="+/-" onClick={this.clickButton}>+/-</button>
        <button type="button" name="%" onClick={this.clickButton}>%</button>
        <button type="button" className="operator" name="÷" onClick={this.clickButton}>÷</button>
        <button type="button" name="7" onClick={this.clickButton}>7</button>
        <button type="button" name="8" onClick={this.clickButton}>8</button>
        <button type="button" name="9" onClick={this.clickButton}>9</button>
        <button type="button" className="operator" name="x" onClick={this.clickButton}>x</button>
        <button type="button" name="4" onClick={this.clickButton}>4</button>
        <button type="button" name="5" onClick={this.clickButton}>5</button>
        <button type="button" name="6" onClick={this.clickButton}>6</button>
        <button type="button" className="operator" name="-" onClick={this.clickButton}>-</button>
        <button type="button" name="1" onClick={this.clickButton}>1</button>
        <button type="button" name="2" onClick={this.clickButton}>2</button>
        <button type="button" name="3" onClick={this.clickButton}>3</button>
        <button type="button" className="operator" name="+" onClick={this.clickButton}>+</button>
        <button type="button" className="zero" name="0" onClick={this.clickButton}>0</button>
        <button type="button" name="." onClick={this.clickButton}>.</button>
        <button type="button" className="operator" name="=" onClick={this.clickButton}>=</button>
      </section>
    );
  }
}
