import React from "react";
import "../styles/App.css";
import placeholderData from "../data/placeholderData";

import LocationBanner from "./LocationBanner";
import ForecastSummaries from "./ForecastSummaries";
import DetailedSummary from "./DetailedSummary";

function App() {
  return (
    <div className="App">
      <LocationBanner {...placeholderData.location} />
      <ForecastSummaries forecasts={placeholderData.forecasts} />
      <DetailedSummary />
    </div>
  );
}

export default App;
