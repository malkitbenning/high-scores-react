import React, { useState } from "react";
import "./App.css";
import "./scores";
import GlobalHighScores from "./GlobalHighScores";
import AllHighScores from "./AllHighScores";
import allCountryScores from "./scores";

function App() {
  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  allCountryScores.sort(compare);

  const [sortOrder, setSortOrder] = useState("ascending");

  function toggleOrder() {
    if (sortOrder === "ascending") {
      setSortOrder("descending");
    } else {
      setSortOrder("ascending");
    }
  }

  return (
    <div className="App">
      <section className="scores-section">
        <div className="scores-container">
          <div className="scores-title">
            <p>Overall High Scores</p>
          </div>
          <GlobalHighScores allCountryScores={allCountryScores} />
        </div>
      </section>
      <button className="toggle-button" onClick={toggleOrder}>
        Sort {sortOrder}{" "}
      </button>
      <section className="scores-section">
        <div className="scores-container">
          <div className="scores-title">
            <p>High Scores per Country</p>
          </div>
          <AllHighScores
            allCountryScores={allCountryScores}
            sortOrder={sortOrder}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
