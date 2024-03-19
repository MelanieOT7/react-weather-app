import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        <Weather
          defaultCity="Durban"
          defaultTemperature={26}
          defaultCondition="Cloudy"
          defaultDate="Tuesday"
        />
      </header>
    </div>
  );
}

export default App;
