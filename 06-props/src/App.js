import React, { Component } from 'react';
import './App.css';
import Header from './components/header'

export default class App extends Component {

  manejaClick = texto => {
    console.log(texto)
  }

  render () {
    const  myVariable1 = 'Test props'
    const  myVariable2 = 'Variable 2'
    return (
      <div className="App">
        <Header myVariable1={myVariable1} manejaClick={this.manejaClick} />
        <Header myVariable1={myVariable2} manejaClick={this.manejaClick} />
      </div>
    );
  }
  
}