import React from 'react';
import Row from './Row';
import Controls from './Controls';
import LevelIndicator from './LevelIndicator';


class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      debug: true,
      level: 1,
      gridSize: 10,
      avatarLength: 1,
      newActiveCell: [],
      activeCells: [{xCordinate: 0, yCordinate: 9}],
      avatarCell: [{xCordinate: 0, yCordinate: 9}],
      directionOfMovement: 'RIGHT',
      keyPressState: 'ACTIVE',
      lureCell: [{xCordinate: 3, yCordinate: 7}],
      gameState: null
    };
    this.startGame = this.startGame.bind(this);
    this.pauseGame = this.pauseGame.bind(this);
    this.levelUp = this.levelUp.bind(this);
    this.setGridSize = this.setGridSize.bind(this);
  }

  // Initiate avatar's movement. Focus the hidden input to listen for key events.
  startGame() {
    this.focusInput();
    this.setState({
      directionOfMovement: 'RIGHT'
    })
    this.advanceAvatar('RIGHT');
  }

  setDirectionOfMovement(direction) {
    this.setState({
      directionOfMovement: direction
    });
    this.advanceAvatar(direction);
  }

  advanceAvatar(direction) {
    if (this.state.debug) {
      console.log('advanceAvatar', direction);
    }
    let newAvatarCellXCordinate;
    let newAvatarCellYCordinate;
    const moving = direction;
    setTimeout(() => {
      if (this.state.directionOfMovement === 'RIGHT') {
        newAvatarCellXCordinate = this.state.avatarCell[0].xCordinate + 1;
        newAvatarCellYCordinate = this.state.avatarCell[0].yCordinate;
      } else if (this.state.directionOfMovement === 'LEFT') {
        newAvatarCellXCordinate = this.state.avatarCell[0].xCordinate - 1;
        newAvatarCellYCordinate = this.state.avatarCell[0].yCordinate;
      } else if (this.state.directionOfMovement === 'UP') {
        newAvatarCellXCordinate = this.state.avatarCell[0].xCordinate;
        newAvatarCellYCordinate = this.state.avatarCell[0].yCordinate + 1;
      } else if (this.state.directionOfMovement === 'DOWN') {
        newAvatarCellXCordinate = this.state.avatarCell[0].xCordinate;
        newAvatarCellYCordinate = this.state.avatarCell[0].yCordinate - 1;
      }
      let newActiveCells = [{xCordinate: newAvatarCellXCordinate, yCordinate: newAvatarCellYCordinate}];
      console.log('setting new active cells', moving);
      if (this.state.directionOfMovement === moving) {
        this.advanceAvatar(moving);
        this.setState({
          activeCells: newActiveCells,
          avatarCell: newActiveCells
        });
      }
    }, 500);
  }

  pauseGame() {
    if (this.state.debug) {
      console.log('pauseGame()');
    }
    this.setState({
      directionOfMovement: 'SUSPENDED'
    })
  }

  addActiveCell(activeCells) {
    console.log('add new active cell because chomping', activeCells)
  }


  levelUp() {
    if (this.state.level === 10) {
      alert('You win!');
      return;
    }
    const newLevel = this.state.level + 1;
    this.focusInput();
    if (this.state.debug) {
      console.log(`levelUp(); to ${newLevel}`);
    }
    this.setState({
      level: newLevel
    });
  }

  setGridSize(size){
    this.setState({
      gridSize: size
    });
  }

  focusInput() {
    const hiddenInput = document.getElementById('key-down-controller');
    hiddenInput.focus();
  }

  handleKeyDown(e) {
    if (e.keyCode === 38) {
      if (this.state.debug) {
        console.log('handling up-arrow key press');
      }
      this.setDirectionOfMovement('UP');
    } else if (e.keyCode === 40) {
      if (this.state.debug) {
        console.log('handling down-arrow key press');
      }
      this.setDirectionOfMovement('DOWN');
    } else if (e.keyCode === 39) {
      if (this.state.debug) {
        console.log('handling right-arrow key press');
      }
      this.setDirectionOfMovement('RIGHT');
    } else if (e.keyCode === 37) {
      if (this.state.debug) {
        console.log('handling left-arrow key press');
      }
      this.setDirectionOfMovement('LEFT');
    } else {
      if (this.state.debug) {
        console.log('Another key pressed. Nothing happens')
      }
    }
  }

  gameOver() {
    if (this.state.debug) {
      console.log('game over!');
    }
    this.setState({ gameState: 'GAME_OVER' })
    alert('Game Over!');
  }

  render() {
    let rows = [];
    for (let i = 0; i < this.state.gridSize; i++) {
      rows.push(<Row key={i}
        cells={this.state.gridSize}
        yCordinate={i}
        activeCells={this.state.activeCells}
        lureCell={this.state.lureCell}
        />);
    }

    return (
      <div className="game-wrapper">
        <LevelIndicator level={this.state.level} />
        <Controls start={this.startGame}
          debug={this.state.debug}
          pause={this.pauseGame}
          levelUp={this.levelUp}
          setGridSize={this.setGridSize}
          addActiveCell={this.addActiveCell}
          gridSize={this.state.gridSize}
          activeCells={this.state.activeCells}
          />
        <div className="gameboard-wrapper">
          <div className="flex-container">
            <div className="board">
              {rows.reverse()}
            </div>
          </div>
          <input id="key-down-controller" className="invisible-input" onKeyDown={(e) => this.handleKeyDown(e)}></input>
        </div>
      </div>
    );
  }
}

export default Board;
