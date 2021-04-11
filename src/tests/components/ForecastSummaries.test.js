import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastDetails", () => {
  const validProps = [
    {
      date: 1525046400000,
      description: "Sunny",
      icon: "200",
      temperature: {
        max: 12,
        min: 10,
      },
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
