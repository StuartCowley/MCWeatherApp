import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastDetails", () => {
  const validProps = {
    forecasts: [
      {
        date: 1525046400000,
        description: "Sunny",
        icon: "200",
        temperature: {
          max: 12,
          min: 10,
        },
      },
      {
        date: 1525046454300,
        description: "Cloudy",
        icon: "602",
        temperature: {
          max: 22,
          min: 15,
        },
      },
    ],
    onForecastSelect: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );
    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
