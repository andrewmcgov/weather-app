import React from "react";
import "./CitySelect.css";

class CitySelect extends React.Component {
  render() {
    return (
      <div className="city-select">
        <select
          name="city"
          id="city"
          className="city-selector"
          onChange={e => this.props.getWeather(e.target.value)}
        >
          <option value="6094817" className="">
            Ottawa
          </option>
          <option value="6167865" className="">
            Toronto
          </option>
          <option value="6077243" className="">
            Montreal
          </option>
        </select>
      </div>
    );
  }
}

export default CitySelect;
