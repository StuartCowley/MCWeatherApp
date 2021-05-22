import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import getForecasts from "../requests/getForecasts";

import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import DetailedSummary from "./DetailedSummary";
import SearchForm from "./SearchForm";
import Loading from "./Loading";

import "../styles/App.css";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleLocationChange = () => {
    setIsLoading(true);
    getForecasts(
      setForecasts,
      setLocation,
      setSelectedDate,
      searchText,
      setErrorMessage,
      setIsLoading
    );
  };

  useEffect(() => {
    getForecasts(
      setForecasts,
      setLocation,
      setSelectedDate,
      searchText,
      setErrorMessage,
      setIsLoading
    );
  }, []);

  const { city, country } = location;

  return (
    <div className="weather-app">
      {isLoading && <Loading />}
      <CSSTransition classNames="loading-transition">
        <>{isLoading && <Loading />}</>
      </CSSTransition>
      <>
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
            {selectedForecast && (
              <DetailedSummary forecast={selectedForecast} />
            )}
          </>
        )}
        )
      </>
    </div>
  );
};

export default App;
