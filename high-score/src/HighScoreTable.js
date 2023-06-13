import React from "react";
import "./HighScoreTable.css";
import ScoresBlock from "./ScoresBlock";

const HighScoreTable = (props) => {
  function compareDescending(a, b) {
    if (a.s > b.s) {
      return -1;
    }
    if (a.s < b.s) {
      return 1;
    }
    return 0;
  }
  function compareAscending(a, b) {
    if (a.s < b.s) {
      return -1;
    }
    if (a.s > b.s) {
      return 1;
    }
    return 0;
  }

  if (props.sortOrder === "ascending") {
    props.aCountryScores.scores.sort(compareAscending);
  } else {
    props.aCountryScores.scores.sort(compareDescending);
  }

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
