import React from "react";
import PlayerScore from "./PlayerScore";

const GlobalHighScores = (props) => {
  const AllHighScores = [];
  props.allCountryScores.forEach((country) => {
    country.scores.forEach((singleScore) => {
      AllHighScores.push(singleScore);
    });
  });
  function compare(a, b) {
    if (a.s > b.s) {
      return -1;
    }
    if (a.s < b.s) {
      return 1;
    }
    return 0;
  }

  AllHighScores.sort(compare);

  return (
    <div>
      {AllHighScores.map((aScore, index) => {
        return <PlayerScore aScore={aScore} key={index} />;
      })}
    </div>
  );
};

export default GlobalHighScores;
