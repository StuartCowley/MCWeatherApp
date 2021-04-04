import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1525046400000,
    description: "Sunny",
    icon: "200",
    temperature: {
      min: 12,
      max: 22,
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        maxTemp={validProps.temperature.max}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        maxTemp={validProps.temperature.max}
      />
    );
    expect(getByText("Sunny")).toHaveClass("forecast-summary__description");
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
    expect(getByText("Mon 30 Apr")).toHaveClass("forecast-summary__date");
    expect(getByText(`22\u2103`)).toHaveClass("forecast-summary__max-temp");
  });
});
