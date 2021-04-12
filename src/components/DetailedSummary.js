import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";

import "../styles/DetailedSummary.css";

const DetailedSummary = ({ forecast }) => {
  const { date, icon, minTemp, description } = forecast;

  // Create date in format `shortWeekDay numericDay shortMonth` for local language (hard coded to GB for now)
  const locale = "en-GB";
  const options = {
    month: "short",
    day: "numeric",
  };
  // As toLocaleDateString() includes a comma after the day by default,
  // we have to get the day first then append the numeric day and month
  let formattedDate = new Date(forecast.date).toLocaleDateString(locale, {
    weekday: "short",
  });
  formattedDate += ` ${new Date(date).toLocaleDateString(locale, options)}`;

  return (
    <div className="detailed-summary" data-testid="detailed-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <WeatherIcon
        data-testid="forecast-icon"
        className="forecast-summary__icon"
        name="owm"
        iconId={icon}
        flip="horizontal"
        rotate="90"
      />
      <div className="forecast-summary__max-temp">{`${minTemp}\u2103`}</div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
};

DetailedSummary.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    description: PropTypes.string,
    humidity: PropTypes.number,
    icon: PropTypes.string,
    minTemp: PropTypes.number,
    wind: PropTypes.shape({
      direction: PropTypes.string,
      speed: PropTypes.number,
    }),
  }).isRequired,
};

export default DetailedSummary;
