import React from "react";
import { render } from "@testing-library/react";
import DetailedSummary from "../../components/DetailedSummary";

describe("DetailedSummary", () => {
  const validProps = {
    date: 1525046400000,
    description: "Cloudy",
    icon: "300",
    temperature: {
      min: 10,
      max: 15,
    },
    wind: { speed: 13, direction: "s" },
    humidity: 22,
  };

  it("renders correctly", () => {
    const { asFragment } = render(<DetailedSummary forecast={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <DetailedSummary forecast={validProps} />
    );
    expect(getByText("Cloudy")).toHaveClass("detailed-summary__description");
    expect(getByTestId("forecast-icon")).toHaveClass("detailed-summary__icon");
    expect(getByText(22)).toHaveClass("detailed-summary__humidity");
    expect(getByText("Mon 30 Apr")).toHaveClass("detailed-summary__date");
    expect(getByText(`10\u2103`)).toHaveClass("detailed-summary__min-temp");
    expect(getByText(13)).toHaveClass("detailed-summary__wind-speed");
    expect(getByText("s")).toHaveClass("detailed-summary__wind-direction");
  });
});
