import { render } from "@testing-library/react";
import MovieList from "../components/MovieList";
import { withStore } from "testing/testHelper";
import { store } from "redux/store";
import mockMovieList from "testing/mockData/mockMovieList";
import { fillMovieListAction } from "redux/app/appActions";

let container;

beforeEach(() => {
  container = render(withStore(MovieList));
});

describe("MovieList", () => {
  test("should display no results", () => {
    expect(container.getByText("No movie found!")).toBeInTheDocument();
  });

  test("should display list wrapper", () => {
    expect(container.getByTestId("movie-list")).toBeInTheDocument();
  });

  test("should display movies", async () => {
    store.dispatch(fillMovieListAction(mockMovieList.Search));
    mockMovieList.Search.forEach((item) => {
      const listItem = container.getByTestId(`movie-${item.imdbID}`);
      expect(listItem).toBeInTheDocument();
    });
  });
});
