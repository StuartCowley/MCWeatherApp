import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import ForecastSummary from "./ForecastSummary";

function ForecastSummaries({ forecasts }) {
  return (
    <div>
      <h1>Forecast summaries</h1>
      {forecasts.forEach((forecast) => {
        <ForecastSummary forecastData={forecast} />;
      })}
    </div>
  );
}

ForecastSummaries.propTypes = {
  forecasts: PropTypes.array,
};

ForecastSummaries.defaultProps = {
  forecasts: [],
};

export default ForecastSummaries;
