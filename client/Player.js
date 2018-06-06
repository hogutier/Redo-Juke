import React from 'react'

const Player = () => {
  return (
    <div id="player-container">
      <div id="player-controls">
        <div className="row center">
          <i className="fa fa-step-backward" />
          <i className="fa fa-pause-circle" />
          <i className="fa fa-step-forward" />
        </div>
      </div>
    </div>
  );
};

export default Player

