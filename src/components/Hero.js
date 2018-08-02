import React from "react";
import CitySearch from "./CitySearch";
import WeatherIcon from "./WeatherIcon";
import "./Hero.css";

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleDateString()
    };
  }

  tick() {
    this.setState({ time: new Date().toLocaleTimeString().split(" ")[0] });
  }

  render() {
    const current = this.props.current;
    const { main: { temp } = "", name = "" } = this.props.current;
    const condition = current.weather ? current.weather[0].main : "";

    return (
      <div className="hero">
        <CitySearch getWeather={this.props.getWeather} />
        <div className="hero__main">
          <div className="hero__block hero__weather">
            <p className="hero__temp">{temp ? `${Math.round(temp)}°` : ""}</p>
            <WeatherIcon condition={condition} size="large" />
          </div>
          <div className="hero__block hero__location">
            <h1 className="hero__city">{name}</h1>
            <p className="hero__date">{this.state.date}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
