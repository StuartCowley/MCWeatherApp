import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";

function ForecastSummary({ date, icon, temperature, description }) {
  return (
    <div className="forecast-summary">
      <h1>forecast summary 1</h1>
      <div>{date}</div>
      <div>{icon}</div>
      <div>{temperature.max}</div>
      <div>{description}</div>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number,
  icon: PropTypes.number,
  temperature: PropTypes.objectOf(PropTypes.string),
  description: PropTypes.string,
};

ForecastSummary.defaultProps = {
  date: 0,
  icon: 0,
  temperature: 0,
  description: "",
};

export default ForecastSummary;
