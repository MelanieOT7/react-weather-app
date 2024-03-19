import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState("");
  let [weather, setWeather] = useState("");

  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      city: response.data.city,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  function searchCity() {
    let apiKey = "8161b4309ee03faae957729ba7104797";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
  }

  let form = (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="Search"
          placeholder="Search City..."
          onChange={updateCity}
        />
        <input type="Submit" value={"Search"} />
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}

        <div id="city">{city}</div>
        <div id="time">Sunday 10:00 </div>
        <div id="condition"> {weather.description} </div>

        <div class="temp-wind">
          <div id="temp-section">
            <span id="icon">
              {" "}
              <img src={weather.icon} alt="" />
            </span>
            <span id="temperature">{Math.round(weather.temperature)}</span>
            <span id="celcius">℃</span>
          </div>
          <div class="wind-precipitation">
            <div id="precipitation"> Humidity: {weather.humidity}% </div>
            <div id="wind">Wind: {Math.round(weather.wind)}km/h </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {form}

        <div id="city">{props.defaultCity}</div>
        <div id="time">{props.defaultDate}</div>
        <div id="condition"> {props.defaultCondition} </div>

        <div class="temp-wind">
          <div id="temp-section">
            <span id="icon">
              {" "}
              <img src={weather.icon} alt="" />
            </span>
            <span id="temperature">{props.defaultTemperature}</span>
            <span id="celcius">℃</span>
          </div>
          <div class="wind-precipitation">
            <div id="precipitation"> Humidity: {props.defaultHumidity}% </div>
            <div id="wind">Wind: {Math.round(props.defaultWind)}km/h </div>
          </div>
        </div>
      </div>
    );
  }
}
