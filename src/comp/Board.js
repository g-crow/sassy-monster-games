import React from 'react';

import Row from './Row'

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      debug: true,
      level: 1,
      gridSize: 10,
      avatarLength: 1,
      activeCells: [{xCordinate: 0, yCordinate: 9}],
      // The active cell the user controls. Other cells follow.
      avatarCell: [{xCordinate: 0, yCordinate: 9}],
      directionOfMovement: 'FORWARD'
    };
  }

  // TODO - replace this with button onclick function.
  componentDidMount() {
    this.advanceAvatarForward();
  }

  advanceAvatarForward() {
    if (this.state.debug) {
      console.log('advanceAvatarForward();');
    }
    if (this.state.directionOfMovement === 'FORWARD') {
      setInterval(() => {
        // Make a copy of the current active cells.
        let newAvatarCellXCordinate = this.state.avatarCell[0].xCordinate + 1;
        let newAvatarCellYCordinate = this.state.avatarCell[0].yCordinate;
        let newActiveCells = [{xCordinate: newAvatarCellXCordinate, yCordinate: newAvatarCellYCordinate}];
        this.setState({
          activeCells: newActiveCells,
          avatarCell: newActiveCells
        });
      }, 1000)
    }
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
