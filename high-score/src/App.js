import "./App.css";
import "./scores";
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


  return (
    <div className="App">
      <section className="scores-section">
        <div className="scores-container">
          <div className="scores-title">
            <p>High Scores per Country</p>
          </div>
          <AllHighScores allCountryScores={allCountryScores} />
        </div>
      </section>
    </div>
  );
}

export default App;
