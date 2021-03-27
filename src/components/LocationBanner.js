import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";

function LocationBanner({ city, country }) {
  return (
    <div className="location-banner">
      <h1>
        Forecast for {city}, {country}
      </h1>
    </div>
  );
}

LocationBanner.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
};

LocationBanner.defaultProps = {
  city: "",
  country: "",
};

export default LocationBanner;
