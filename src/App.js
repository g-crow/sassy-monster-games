import React, { Component } from 'react';
import './App.css';

import Board from './comp/Board';

class App extends Component {
  render() {
    return (
      <div className="app">

        <Board />

        <a href="#" id="instructions-modal-trigger" className="instructions">Instructions</a>

      </div>
    );
  }
}

export default App;
