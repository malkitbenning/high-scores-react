import React from "react";
import "./HighScoreTable.css";
import ScoresBlock from "./ScoresBlock";

const HighScoreTable = (props) => {
  return (
    <div className="high-score-table">
      <div className="country-line">
        HIGH SCORES: {props.aCountryScores.name}
      </div>
      <div>
        <ScoresBlock playersScores={props.aCountryScores.scores} />
      </div>
    </div>
  );
};

export default HighScoreTable;
