import React from "react";
import cities from "../canadian-cities";
import "./CitySearch.css";

class CitySearch extends React.Component {
  state = {
    cityMatches: []
  };

  findCities = (wordToMatch, cities) => {
    //console.log(`findCities searched for ${wordToMatch}`);
    if (!wordToMatch) {
      this.setState({
        cityMatches: []
      });
      return;
    }
    const matches = cities.filter(city => {
      const regex = new RegExp(wordToMatch, "gi");
      return city.name.match(regex);
    });
    this.setState({
      cityMatches: matches
    });
  };

  selectCity = city => {
    this.props.getWeather(city.id);
    this.findCities("", cities);
  };

  render() {
    return (
      <div className="city-search">
        <div className="city-search__wrapper">
          <input
            className="city-search__input"
            type="text"
            placeholder="Enter a city"
            onChange={e => this.findCities(e.target.value, cities)}
          />
          <ul className="city-select__results">
            {this.state.cityMatches.map(city => {
              return (
                <li
                  className="city-select__suggestion"
                  key={city.id}
                  onClick={() => this.selectCity(city)}
                >
                  {city.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default CitySearch;
