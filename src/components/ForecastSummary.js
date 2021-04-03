import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = (props) => {
  const { date, icon, temperature, description } = props;
  const { maxTemp } = temperature;
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
      <div>{`${maxTemp}\u2103`}</div>
      <div>{description}</div>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  icon: PropTypes.number.isRequired,
  temperature: PropTypes.objectOf(PropTypes.string),
  description: PropTypes.string.isRequired,
};

ForecastSummary.defaultProps = {
  temperature: 0,
};

export default ForecastSummary;
