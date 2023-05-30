import React from "react";
import "./PlayerScore.css";

const PlayerScore = (props) => {
  return (
    <div className="player-row">
      <div className="player-name">{props.aScore.n}</div>
      <div className="player-score">{props.aScore.s}</div>
    </div>
  );
};

export default PlayerScore;
