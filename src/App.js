import React, { Component } from "react";
import "./App.css";

class App extends Component {
  async componentDidMount() {
    let data = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=6094817&APPID=${
        process.env.REACT_APP_WEATHER_API_KEY
      }`
    );
    data = await data.json();
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Get Your Weather Here</h1>
        </header>
        <p className="App-intro">
          This will become a basic weather app, made for learning React.
        </p>
      </div>
    );
  }
}

export default App;
