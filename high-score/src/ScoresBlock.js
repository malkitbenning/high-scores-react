import React from "react";
import PlayerScore from "./PlayerScore";

const ScoresBlock = (props) => {
  return (
    <div className="player-score-table">
      <div>
        {props.playersScores.map((aScore) => (
          <PlayerScore aScore={aScore} />
        ))}
      </div>
    </div>
  );
};

export default ScoresBlock;
