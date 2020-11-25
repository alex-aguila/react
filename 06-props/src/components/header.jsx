import React, { Component } from 'react';
import logo from '../logo.svg';

export default class Header extends Component {

    manejaClick = () => {
        const { myVariable1, manejaClick } = this.props
        manejaClick(myVariable1)
    }

    render () {

        const { myVariable1 } = this.props

        return (
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p onClick={this.manejaClick}>
              {myVariable1}
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        );
    }
}