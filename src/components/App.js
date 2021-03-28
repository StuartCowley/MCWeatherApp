import React from "react";
import "../styles/App.css";

import LocationBanner from "./LocationBanner";
import ForecastSummaries from "./ForecastSummaries";
import DetailedSummary from "./DetailedSummary";

const location = {
  city: "Manchester",
  country: "UK",
};

function App() {
  return (
    <div className="App">
      <LocationBanner {...location} />
      <ForecastSummaries />
      <DetailedSummary />
    </div>
  );
}

export default App;
