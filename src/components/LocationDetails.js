import React from "react";
import PropTypes from "prop-types";

const LocationDetails = ({ city, country }) => {
  return (
    <h1 className="location-details">{`Forecast for ${city}, ${country}`}</h1>
  );
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
