import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

describe("Search form", () => {
  const validProps = {
    onChangeLocation: () => {},
    updateSearchText: () => {},
  };
  it("renders correctly", () => {
    const { getByText } = render();
    render(
      <SearchForm
        onChangeLocation={validProps.onChangeLocation}
        updateSearchText={validProps.updateSearchText}
      />
    );
    expect(getByText("Change location")).toHaveClass("search-form__button");
  });
});
