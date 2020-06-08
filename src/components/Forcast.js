import React from "react";

function Forcast({ lat, lon, temp }) {
  // console.log("forcast", lat);
  return (
    <div>
      <h4>Latitude and Longitude</h4>
      <li>{lat}</li>
      <li>{lon}</li>
      <li>{temp}</li>
    </div>
  );
}

export default Forcast;

// [0].lat;
