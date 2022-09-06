import { render } from "@testing-library/react";
import MovieListItem from "../components/MovieListItem";
import { withStore } from "testing/testHelper";

let container;

const mockProps = {
  imdbID: "123",
  Poster: "image",
  Title: "here the title",
  Year: "1999",
};

beforeEach(() => {
  container = render(withStore(MovieListItem, mockProps));
});

describe("MovieListItem", () => {
  test("should render movie detail", async () => {
    expect(
      container.getByTestId(`movie-${mockProps.imdbID}`)
    ).toBeInTheDocument();
  });

  test("should render poster", async () => {
    expect(container.getByAltText(mockProps.Title)).toBeInTheDocument();
  });

  test("should render title", async () => {
    expect(container.getByText(mockProps.Title)).toBeInTheDocument();
  });

  test("should render year", async () => {
    expect(container.getByText(mockProps.Year)).toBeInTheDocument();
  });
});
