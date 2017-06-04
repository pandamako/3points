import React, { Component } from 'react';
import Input from '../input/'
import './index.css'

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  setOptimistic = (e) =>{
    if(e.target.valueAsNumber) {
      this.setState({optimistic: e.target.valueAsNumber})
    }
  }

  setReal = (e) =>{
    if(e.target.valueAsNumber) {
      this.setState({real: e.target.valueAsNumber})
    }
  }

  setPessimistic = (e) =>{
    if(e.target.valueAsNumber) {
      this.setState({pessimistic: e.target.valueAsNumber})
    }
  }

  result() {
    if(!this.state.optimistic || !this.state.real || !this.state.pessimistic) {
      return '---'
    }
    let timeEstimate = (this.state.optimistic + 4 * this.state.real + this.state.pessimistic) / 6.0
    let standart_deviation = (this.state.pessimistic - this.state.optimistic) / 6.0
    return Math.round((timeEstimate + 2 * (standart_deviation * standart_deviation)) * 100) / 100
  }

  render() {
    return (
      <div {...this.props} className="calculator-container">
        <div className="calculator-cell">
          <label htmlFor="optimistic">Optimistic</label>
          <Input id="optimistic" className="calculator-input" onChange={this.setOptimistic}/>
        </div>
        <div className="calculator-cell">
          <label htmlFor="real">Real</label>
          <Input id="real" className="calculator-input" onChange={this.setReal}/>
        </div>
        <div className="calculator-cell">
          <label htmlFor="pessimistic">Pessimistic</label>
          <Input id="pessimistic" className="calculator-input" onChange={this.setPessimistic}/>
        </div>
        <div className="calculator-cell">
          <label htmlFor="result">95% estimate</label>
          <span id="result" className="calculator-input result">
            {this.result()}
          </span>
        </div>
      </div>
    );
  }
}

export default Calculator;
