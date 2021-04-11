import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = ({ date, description, icon, maxTemp }) => {
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
    <div className="forecast-summary" data-testid="forecast-summary">
      <h2 className="forecast-summary__title">Forecast summary</h2>
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        {icon}
      </div>
      <div className="forecast-summary__max-temp">{`${maxTemp}\u2103`}</div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  maxTemp: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default ForecastSummary;
