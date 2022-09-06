import { render } from "@testing-library/react";
import ListingPage from "../ListingPage";
import { withStore } from "testing/testHelper";

let container;

beforeEach(() => {
  container = render(withStore(ListingPage));
});

describe("ListingPage", () => {
  test("should contain header", () => {
    expect(container.getByTestId("header")).toBeInTheDocument();
  });

  test("should contain pagination", () => {
    expect(container.getByTestId("pagination")).toBeInTheDocument();
  });

  test("should contain movie-list", () => {
    expect(container.getByTestId("movie-list")).toBeInTheDocument();
  });
});
