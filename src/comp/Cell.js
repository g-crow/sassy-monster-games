import React from 'react';

class Cell extends React.Component {
  // Check the cell state to apply styling classes. Add active cell at chomp

  render() {
    let isActive = false;
    let isLuring = false;
    let isChomping = false;
    for (let i = 0; i < this.props.activeCells.length; i++) {
      if (this.props.activeCells[i].xCordinate === this.props.xCordinate && this.props.activeCells[i].yCordinate === this.props.yCordinate) {
        isActive = 'is--active';
      }
      if (this.props.lureCell[i].xCordinate === this.props.xCordinate && this.props.lureCell[i].yCordinate === this.props.yCordinate) {
        isLuring = 'is--luring';
      }
      if (isActive && isLuring) {
        isChomping = 'is--chomping';
      }
    }

    return (
      <div className={`cell ${isActive} ${isLuring} ${isChomping}`}></div>
    );
  }
}

export default Cell;
