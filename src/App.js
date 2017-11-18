import React, { Component } from 'react';
import './App.css';

import SnakeBoard from './comp/SnakeBoard';

class App extends Component {
  render() {
    return (
      <div className="app">

        <SnakeBoard />

        <a href="#" id="instructions-modal-trigger" className="instructions">Instructions</a>

      </div>
    );
  }
}

export default App;
