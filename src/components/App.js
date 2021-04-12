import React from "react";
import PropTypes from "prop-types";

import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import DetailedSummary from "./DetailedSummary";

import "../styles/App.css";

const App = ({ location, forecasts }) => {
  const { city, country } = location;
  return (
    <div className="weather-app">
      <LocationDetails city={city} country={country} />
      <ForecastSummaries forecasts={forecasts} />
      <DetailedSummary forecast={forecasts[0]} />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
};

export default App;
