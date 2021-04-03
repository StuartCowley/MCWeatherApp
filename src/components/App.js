import React from "react";
import PropTypes from "prop-types";

import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import DetailedSummary from "./DetailedSummary";

const App = (props) => {
  const { location } = props;
  const { forecasts } = props;
  return (
    <div className="App">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} />
      <DetailedSummary />
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
      date: PropTypes.number.isRequired,
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
