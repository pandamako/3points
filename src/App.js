import React, { Component } from 'react';
import Calculator from './components/calculator';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-header-container">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Оценка по 3 точкам</h2>
          </div>
        </div>
        <div className='container'>
          <Calculator className="ff"/>
        </div>
      </div>
    );
  }
}

export default App;
