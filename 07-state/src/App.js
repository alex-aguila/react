import React, { Component } from 'react';
import './App.css';
import Header from './components/header'

export default class App extends Component {
  state = {
    miau: 'Bienvenido miau'
  }

  cambiarTextoDelEstado = () => {
    this.setState({ miau: 'Hello Word' })
  }

  manejaClick = texto => {
    console.log(texto)
  }
  // Los estados tb se pueden heredar de padre a hijos (línea 22)
  render() {
    const { miau } = this.state
    return (
      <div className="App">
        <Header myVariable1={miau} manejaClick={this.manejaClick} />
        <p onClick={this.cambiarTextoDelEstado} className="App-intro">
          {miau}
        </p>
      </div>
    );
  }

}