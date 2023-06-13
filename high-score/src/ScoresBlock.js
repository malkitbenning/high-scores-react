import React from "react";
import PlayerScore from "./PlayerScore";

const ScoresBlock = (props) => {
  return (
    <div className="player-score-table">
      <div>
        {props.playersScores.map((aScore, index) => (
          <PlayerScore aScore={aScore} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ScoresBlock;
