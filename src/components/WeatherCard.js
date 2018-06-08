import React from "react";
import "./WeatherCard.css";

class WeatherCard extends React.Component {
  render() {
    const forecast = this.props.forecast;
    const time = new Date(forecast.dt * 1000).toLocaleTimeString();
    const condition = forecast.weather[0].main;
    const temp = forecast.main.temp;

    return (
      <div className="weather-card">
        <span className="weather-card__time">{time}</span>
        <span className="weather-card__condition">{condition}</span>
        <span className="weather-card__temp">{`${temp}°`}</span>
      </div>
    );
  }
}

export default WeatherCard;
