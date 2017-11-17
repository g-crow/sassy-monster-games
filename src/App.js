import React, { Component } from 'react';
import './App.css';

import SnakeBoard from './comp/SnakeBoard';

class App extends Component {
  render() {
    return (
      <div className="App">

        <SnakeBoard />

      </div>
    );
  }
}

export default App;
