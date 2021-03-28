import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";

function ForecastSummary({ date, icon, temperature, description }) {
  // Create date in format `shortWeekDay numericDay shortMonth` for local language (hard coded to GB for now)
  const locale = "en-GB";
  const options = {
    month: "short",
    day: "numeric",
  };
  // As toLocaleDateString() includes a comma after the day by default,
  // we have to get the day first then append the numeric day and month
  let formattedDate = new Date(date).toLocaleDateString(locale, {
    weekday: "short",
  });
  formattedDate += ` ${new Date(date).toLocaleDateString(locale, options)}`;

  return (
    <div className="forecast-summary">
      <h2>Forecast summary</h2>
      <div>{formattedDate}</div>
      <div>{icon}</div>
      <div>{`${temperature.max}\u2103`}</div>
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
