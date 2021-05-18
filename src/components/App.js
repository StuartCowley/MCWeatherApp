import React, { useState, useEffect } from "react";
import getForecasts from "../requests/getForecasts";

import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import DetailedSummary from "./DetailedSummary";

import "../styles/App.css";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    // eslint-disable-next-line no-console
    console.log(date);
    setSelectedDate(date);
  };

  useEffect(() => {
    getForecasts(setForecasts, setLocation, setSelectedDate);
  }, []);

  const { city, country } = location;

  return (
    <div className="weather-app">
      <LocationDetails city={city} country={country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <DetailedSummary forecast={selectedForecast} />}
    </div>
  );
};

export default App;
