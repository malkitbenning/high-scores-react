import React from "react";
import HighScoreTable from "./HighScoreTable";

const AllHighScores = (props) => {
  return (
    <div>
      {props.allCountryScores.map((aCountryScores) => (
        <HighScoreTable aCountryScores={aCountryScores} />
      ))}
    </div>
  );
};

export default AllHighScores;
