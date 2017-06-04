import React, { Component } from 'react';
import Calculator from './components/calculator';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Оценка по 3 точкам</h2>
        </div>
        <ul className="container">
          <li><Calculator className="ff"/></li>
        </ul>
      </div>
    );
  }
}

export default App;
