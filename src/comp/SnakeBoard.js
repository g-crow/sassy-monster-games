import React from 'react';

import Row from './Row';
import Controls from './Controls';
import LevelIndicator from './LevelIndicator';

// TODO - figure out how to handle key press events without the stupid input workaround

const Title = () =>
  <div className="title">
    <h1 className="title-text">Sassy Snake Monster</h1>
  </div>

class SnakeBoard extends React.Component {

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
      directionOfMovement: 'FORWARD',
      keyPressState: 'ACTIVE'
    };
    this.startGame = this.startGame.bind(this);
    this.pauseGame = this.pauseGame.bind(this);
    this.levelUp = this.levelUp.bind(this);
  }

  // Initiate avatar's movement. Focus the hidden input so the game listens for key events.
  startGame() {
    this.focusInput();
    this.setState({
      directionOfMovement: 'FORWARD'
    })
    this.advanceAvatarForward();
  }

  advanceAvatarForward() {
    if (this.state.debug) {
      console.log('advanceAvatarForward();');
    }
    setInterval(() => {
      if (this.state.directionOfMovement === 'FORWARD')  {
        // Make a copy of the current active cells.
        let newAvatarCellXCordinate = this.state.avatarCell[0].xCordinate + 1;
        let newAvatarCellYCordinate = this.state.avatarCell[0].yCordinate;
        let newActiveCells = [{xCordinate: newAvatarCellXCordinate, yCordinate: newAvatarCellYCordinate}];
        this.setState({
          activeCells: newActiveCells,
          avatarCell: newActiveCells
        });
      }
    }, 1000)
  }

  pauseGame() {
    if (this.state.debug) {
      console.log('pauseGame()');
    }
    this.setState({
      directionOfMovement: 'SUSPENDED'
    })
  }

  // Level up increases level by 1, grid size by 1 until grid size reaches 14. If level is 10, user wins.
  levelUp() {
    if (this.state.level === 10) {
      alert('You win!');
      return;
    }
    const newLevel = this.state.level + 1;
    const newGridSize = this.state.gridSize <= 14 ? this.state.gridSize + 1 : this.state.gridSize;
    if (this.state.debug) {
      console.log(`levelUp(); to ${newLevel}`);
    }
    this.setState({
      level: newLevel,
      gridSize: newGridSize
    });
  }

  focusInput() {
    const hiddenInput = document.getElementById('key-down-controller');
    hiddenInput.focus();
  }

  handleKeyDown() {
    console.log('handling key press');
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
      <div className="game-wrapper">
        <Title />
        <div className="gameboard-wrapper">
          <LevelIndicator level={this.state.level} />

          <div className="board">
            {rows.reverse()}
          </div>

          <Controls start={this.startGame}
            debug={this.state.debug}
            pause={this.pauseGame}
            levelUp={this.levelUp}
            />

          <input id="key-down-controller" className="invisible-input" onKeyDown={() => this.handleKeyDown()}></input>

        </div>
      </div>
    );
  }
}

export default SnakeBoard;
