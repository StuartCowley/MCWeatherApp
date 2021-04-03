import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = ({ forecasts }) => {
  return (
    <div className="forecast-summaries">
      <h1>Forecast summaries</h1>
      {forecasts.map((forecast) => {
        return <ForecastSummary {...forecast} />;
      })}
    </div>
  );
};

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(PropTypes.object),
};

ForecastSummaries.defaultProps = {
  forecasts: [],
};

export default ForecastSummaries;
