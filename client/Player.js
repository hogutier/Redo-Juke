import React from 'react'

const Player = ({pause, resume, songIsPlaying, forward, backward}) => {
  return (
    <div id="player-container">
      <div id="player-controls">
        <div className="row center">
          <i className="fa fa-step-backward" onClick={backward} />
          <i
            className={songIsPlaying ? 'fa fa-pause-circle' : 'fa fa-play-circle'}
            onClick={songIsPlaying ? pause : resume}
          />
          <i className="fa fa-step-forward" onClick={forward} />
        </div>
      </div>
    </div>
  );
};

export default Player

