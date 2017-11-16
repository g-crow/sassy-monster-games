import React, { Component } from 'react';
import './App.css';

import Board from './comp/Board';
import LevelIndicator from './comp/LevelIndicator';

const Title = () =>
  <h1 className="title">Sassy Snake</h1>

class App extends Component {
  render() {
    return (
      <div className="App">

        <Title />

        <Board />

        <LevelIndicator level={1} />

        <a href="#">Instructions</a>
        <div className="buttons">
          <button>START</button>
          <button>PAUSE</button>
        </div>
      </div>
    );
  }
}

export default App;
