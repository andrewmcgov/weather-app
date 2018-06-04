import React from "react";
import CitySelect from "./CitySelect";
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
    return (
      <div className="hero">
        <CitySelect getWeather={this.props.getWeather} />
        <div className="hero__main">
          <div className="hero__block hero__date">
            <p className="hero__temp">
              {current.main ? `${current.main.temp}°` : ""}
            </p>
            <p className="hero__condition">
              {current.weather ? current.weather[0].main : ""}
            </p>
          </div>
          <div className="hero__block hero__location">
            <h1 className="hero__city">{current.name ? current.name : ""}</h1>
            <p className="hero__date">{this.state.date}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
