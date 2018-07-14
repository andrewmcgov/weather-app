import React from "react";
import Rain from "./icons/Rain";
import Lightning from "./icons/Ligntning";
import PartialClouds from "./icons/PartialClouds";
import Snow from "./icons/Snow";
import Sun from "./icons/Sun";

import "./WeatherIcon.css";

class WeatherIcon extends React.Component {
  icons = ["Clouds", "Rain", "Clear"];
  render() {
    const condition = this.props.condition;
    const sizeClass =
      this.props.size === "large" ? "icon--large" : "icon--small";
    const hasIcon = this.icons.includes(this.props.condition);
    return (
      <div className={`weatherIcon--wrapper ${sizeClass}`}>
        {condition == "Clouds" && <PartialClouds />}
        {condition == "Rain" && <Rain />}
        {condition == "Clear" && <Sun />}
        {!hasIcon && condition}
      </div>
    );
  }
}

export default WeatherIcon;
