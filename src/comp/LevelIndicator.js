import React from 'react';

class LevelIndicator extends React.Component {

  render() {
    return (
      <h1 className="level-indicator">Level {this.props.level}</h1>
    );
  }
}

export default LevelIndicator;
