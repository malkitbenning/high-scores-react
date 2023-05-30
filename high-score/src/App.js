import "./App.css";
import "./scores";
import AllHighScores from "./AllHighScores";
import allCountryScores from "./scores";

function App() {
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
