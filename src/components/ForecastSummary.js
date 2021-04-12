import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";

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
      <div className="forecast-summary__date">{formattedDate}</div>
      <WeatherIcon
        data-testid="forecast-icon"
        className="forecast-summary__icon"
        name="owm"
        iconId={icon}
        flip="horizontal"
        rotate="90"
      />
      <div className="forecast-summary__max-temp">{`${maxTemp}\u2103`}</div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  maxTemp: PropTypes.number.isRequired,
};

export default ForecastSummary;
