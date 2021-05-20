import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ onChangeLocation, updateSearchText }) => {
  const handleLocationChange = (event) => {
    updateSearchText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeLocation();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleLocationChange}
          type="text"
          placeholder="Enter city"
        />
        <button className="search-form__button" type="submit">
          Change location
        </button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onChangeLocation: PropTypes.func.isRequired,
  updateSearchText: PropTypes.func.isRequired,
};

export default SearchForm;
