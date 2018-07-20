import React, { Component } from "react";
import "./App.css";
import Hero from "./components/Hero";
import CardBanner from "./components/CardBanner";
//import WeatherCard from "./components/WeatherCard";

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      cityID: 6094817,
      current: {},
      forecast: {}
    };
  }
  async componentDidMount() {
    this.getWeather(6094817);
  }

  getWeather = cityID => {
    let current = fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&APPID=${
        process.env.REACT_APP_WEATHER_API_KEY
      }&units=metric`
    ).then(data => data.json());

    let forecast = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&APPID=${
        process.env.REACT_APP_WEATHER_API_KEY
      }&units=metric`
    ).then(data => data.json());

    Promise.all([current, forecast]).then(data => {
      current = data[0];
      forecast = data[1];
      this.setState({ current, forecast });
    });
  };

  render() {
    return (
      <div className="App">
        <div className="main-section">
          <Hero current={this.state.current} getWeather={this.getWeather} />
          <CardBanner forecast={this.state.forecast} />
        </div>
      </div>
    );
  }
}

export default App;
