import { render, waitFor } from "@testing-library/react";
import DetailsPage from "../DetailsPage";
import { withStore } from "testing/testHelper";

let container;

beforeEach(async () => {
  container = await waitFor(() => {
    return render(withStore(DetailsPage));
  });
});

describe("DetailsPage", () => {
  test("should render Details page", () => {
    expect(container.getByTestId("details")).toBeInTheDocument();
  });

  test("should render poster", () => {
    expect(container.getByAltText("poster")).toBeInTheDocument();
  });

  test("should render title", () => {
    expect(container.getByLabelText("title")).toBeInTheDocument();
  });

  test("should render director", () => {
    expect(container.getByLabelText("Director")).toBeInTheDocument();
  });

  test("should render writer", () => {
    expect(container.getByLabelText("Writer")).toBeInTheDocument();
  });

  test("should render actors", () => {
    expect(container.getByLabelText("Actors")).toBeInTheDocument();
  });

  test("should render genre", () => {
    expect(container.getByLabelText("Genre")).toBeInTheDocument();
  });

  test("should render plot", () => {
    expect(container.getByLabelText("plot")).toBeInTheDocument();
  });
});
