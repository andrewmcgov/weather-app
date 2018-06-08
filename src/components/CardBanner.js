import React from "react";
import "./CardBanner.css";
import WeatherCard from "./WeatherCard";

class CardBanner extends React.Component {
  render() {
    const forecasts = this.props.forecast.list ? this.props.forecast.list : [];

    return (
      <div className="card-banner">
        {forecasts.map(forecast => {
          return (
            <div className="weather-card__container">
              <WeatherCard key={forecast.dt} forecast={forecast} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardBanner;
