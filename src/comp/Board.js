import React from 'react';

import Row from './Row'

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      gridSize: 10,
      avatarLength: 1,
      activeCells: [{xCordinate: 0, yCordinate: 0}]
    };
  }

  render() {
    let rows = [];
    for (let i = 0; i < this.state.gridSize; i++) {
      rows.push(<Row key={i}
        cells={this.state.gridSize}
        yCordinate={i}
        activeCells={this.state.activeCells}
        />);
    }

    return (
      <div className="board">
        {rows.reverse()}
      </div>
    );
  }
}

export default Board;
