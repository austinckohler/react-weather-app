import React, { Component } from "react";
import apiKeys from "./components/apiKeys";
// import Clock from "react-live-clock";
// import ReactAnimatedWeather from "react-animated-weather/package.json";
import CurrentLocation from "./components/currentLocation";
import "./App.css";

const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};
const defaults = {
  color: "white",
  size: 112,
  animate: true,
};

export class App extends Component {
  state = {
    weather: {},
  };

  componentDidMount() {
    fetch(
      `${apiKeys.base}weather?lat=${apiKeys.lat}&lon=${apiKeys.lon}&units=Imperial&APPID=${apiKeys.key}`
    )
      .then((response) => response.json())
      .then((weather) => this.setState(Object.values(weather)));
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <CurrentLocation weather={this.state} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
