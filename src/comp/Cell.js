import React from 'react';

class Cell extends React.Component {
  // Check if the cell is active. If so, apply the is--active styling class.

  render() {
    let isActive = '';
    for (let i = 0; i < this.props.activeCells.length; i++) {
      if (this.props.activeCells[i].xCordinate === this.props.xCordinate && this.props.activeCells[i].yCordinate === this.props.yCordinate) {
        isActive = 'is--active';
      }
    }

    return (
      <div className={`cell ${isActive}`}></div>
    );
  }
}

export default Cell;
