import "./App.css";
import Footer from "./Footer";
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
          defaultHumidity="60"
          defaultWind="5"
        />
        <Footer />
      </header>
    </div>
  );
}

export default App;
