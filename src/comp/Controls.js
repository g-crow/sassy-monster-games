import React from 'react';

class Controls extends React.Component {
  handleClick(command) {
    if (command === 'START') {
      this.props.start();
    } else if (command === 'PAUSE') {
      this.props.pause();
    } else if (command === 'LEVEL_UP') {
      this.props.levelUp();
    } else if (command === 'SET_GRID_SIZE') {
      this.props.setGridSize(this.props.gridSize + 1);
    } else if (command === 'ADD_ACTIVE_CELL') {
      this.props.addActiveCell();
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
        <button className="btn btn-grid-size" onClick={() => this.handleClick('SET_GRID_SIZE')}>SET GRID SIZE +1</button>
        <button className="btn btn-active-cell=" onClick={() => this.handleClick('ADD_ACTIVE_CELL')}>ADD ACTIVE CELL</button>
      </div>
    );
  }
}

export default Controls;
