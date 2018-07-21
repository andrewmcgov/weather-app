import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherCard.css";

class WeatherCard extends React.Component {
  render() {
    const forecast = this.props.forecast;
    const time = new Date(forecast.dt * 1000).toLocaleTimeString();
    const ampm = time.split(" ")[1];
    const condition = forecast.weather[0].main;
    const temp = forecast.main.temp;

    return (
      <div className="weather-card">
        <span className="weather-card__time">{`${
          time.split(":")[0]
        } ${ampm}`}</span>
        <WeatherIcon condition={condition} size="small" />
        <span className="weather-card__temp">{`${Math.round(temp)}°`}</span>
      </div>
    );
  }
}

export default WeatherCard;
