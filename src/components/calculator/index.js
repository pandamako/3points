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
      <div {...this.props} className="container">
        <Input onChange={this.setOptimistic}/>
        <Input onChange={this.setReal}/>
        <Input onChange={this.setPessimistic}/>
        <span>
          {this.result()}
        </span>
      </div>
    );
  }
}

export default Calculator;
