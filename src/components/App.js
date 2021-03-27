import React from "react";
import "../styles/App.css";
import LocationBanner from "./LocationBanner";

const location = {
  city: "Manchester",
  country: "UK",
};

function App() {
  return (
    <div className="App">
      <LocationBanner {...location} />
    </div>
  );
}

export default App;
