import React from 'react';

import Cell from './Cell';

class Row extends React.Component {

  render() {
    let cells = [];
    for (let i = 0; i < this.props.cells; i++) {
      cells.push(<Cell key={i}
        xCordinate={i}
        yCordinate={this.props.yCordinate}
        activeCells={this.props.activeCells}
        />);
    }

    return (
      <div className="row">
        {cells}
      </div>
    );
  }
}

export default Row;
