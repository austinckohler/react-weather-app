import React from "react";
import CurrentLocation from "./components/currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <h1>My name is AUstin</h1>
        <CurrentLocation />
      </div>
    </React.Fragment>
  );
}

export default App;
