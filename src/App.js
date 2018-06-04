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
      current: {}
    };
  }
  async componentDidMount() {
    // let threeHourData = await fetch(
    //   `http://api.openweathermap.org/data/2.5/forecast?id=6094817&APPID=${
    //     process.env.REACT_APP_WEATHER_API_KEY
    //   }`
    // );
    // threeHourData = await threeHourData.json();
    this.getWeather(6094817);
  }

  async getWeather(cityID) {
    console.log("getWeather is running");
    let current = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${cityID}&APPID=${
        process.env.REACT_APP_WEATHER_API_KEY
      }&units=metric`
    );

    current = await current.json();
    console.log(current);

    this.setState({ current });
  }

  render() {
    return (
      <div className="App">
        <div className="top-section">
          <Hero
            current={this.state.current}
            getWeather={this.getWeather.bind(this)}
          />
          <CardBanner />
        </div>
      </div>
    );
  }
}

export default App;
