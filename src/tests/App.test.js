import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import { location, forecasts } from "../data/placeholderData.json";

test("renders weather app heading", () => {
  render(<App location={location} forecasts={forecasts} />);
  const linkElement = screen.getByText(/forecast summaries/i);
  expect(linkElement).toBeInTheDocument();
});
