import React from 'react';

class Controls extends React.Component {
  handleClick(command) {
    if (this.props.debug) {
      console.log(`handleClick(); ${command}`);
    }
    if (command === 'START') {
      this.props.start();
    } else if (command === 'PAUSE') {
      this.props.pause();
    } else if (command === 'LEVEL_UP') {
      this.props.levelUp();
    } else if (command === 'SET_GRID_SIZE') {
      this.props.setGridSize(this.props.gridSize + 1);
    } else {
      console.log('This doesn\'t do anything.');
    }
  }

  render() {
    return (
      <div className="buttons">
        <button className="btn btn-start" onClick={() => this.handleClick('START')}>START</button>
        <button className="btn btn-pause" onClick={() => this.handleClick('PAUSE')}>PAUSE</button>
        <button className="btn btn-level-up" onClick={() => this.handleClick('LEVEL_UP')}>LEVEL UP</button>
        <button className="btn btn-level-up" onClick={() => this.handleClick('SET_GRID_SIZE')}>SET GRID SIZE +1</button>
      </div>
    );
  }
}

export default Controls;
