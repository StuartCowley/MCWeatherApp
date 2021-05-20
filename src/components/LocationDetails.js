import React from "react";
import PropTypes from "prop-types";

const LocationDetails = ({ city, country, errorMessage }) => {
  return errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <h1 className="location-details">{`Forecast for ${city}, ${country}`}</h1>
  );
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

LocationDetails.defaultProps = {
  errorMessage: "",
};

export default LocationDetails;
