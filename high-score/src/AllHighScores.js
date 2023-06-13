import React from "react";
import HighScoreTable from "./HighScoreTable";

const AllHighScores = (props) => {
  return (
    <div>
      {props.allCountryScores.map((aCountryScores, index) => (
        <HighScoreTable
          key={index}
          aCountryScores={aCountryScores}
          sortOrder={props.sortOrder}
        />
      ))}
    </div>
  );
};

export default AllHighScores;
