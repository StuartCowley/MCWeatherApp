import React, { useState, useEffect } from "react";
import getForecasts from "../requests/getForecasts";

import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import DetailedSummary from "./DetailedSummary";
import SearchForm from "./SearchForm";

import "../styles/App.css";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleLocationChange = () => {
    getForecasts(
      setForecasts,
      setLocation,
      setSelectedDate,
      searchText,
      setErrorMessage
    );
  };

  useEffect(() => {
    getForecasts(
      setForecasts,
      setLocation,
      setSelectedDate,
      searchText,
      setErrorMessage
    );
  }, []);

  const { city, country } = location;

  return (
    <div className="weather-app">
      <LocationDetails
        city={city}
        country={country}
        errorMessage={errorMessage}
      />
      <SearchForm
        onChangeLocation={handleLocationChange}
        updateSearchText={setSearchText}
      />
      {!errorMessage && (
        <>
          <ForecastSummaries
            forecasts={forecasts}
            onForecastSelect={handleForecastSelect}
          />
          {selectedForecast && <DetailedSummary forecast={selectedForecast} />}
        </>
      )}
    </div>
  );
};

export default App;
