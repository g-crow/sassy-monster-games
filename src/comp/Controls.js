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
    } else {
      console.log('This doesn\'t do anything.');
    }
  }

  render() {
    return (
      <div className="buttons">
        <button className="btn btn-start" onClick={() => this.handleClick('START')}>START</button>
        <button className="btn btn-pause" onClick={() => this.handleClick('PAUSE')}>PAUSE</button>
        <button className="btn btn-level-up" onClick={() => this.handleClick('LEVEL_UP')}>(level up)</button>
      </div>
    );
  }
}

export default Controls;
