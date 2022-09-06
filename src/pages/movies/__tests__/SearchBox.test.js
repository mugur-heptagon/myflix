import { render, fireEvent, waitFor } from "@testing-library/react";
import SearchBox from "../components/SearchBox";
import { withStore } from "testing/testHelper";
import { store } from "redux/store";
import debounce from "lodash.debounce";
import Config from "config/appConfig";

let container;

beforeEach(() => {
  container = render(withStore(SearchBox));
});

describe("SearchBox", () => {
  test("should display search input", () => {
    expect(container.getByLabelText("search here...")).toBeInTheDocument();
  });

  test("should search with input", async () => {
    debounce.mockImplementation((fn) => fn);

    const input = container.getByLabelText("search here...");
    await waitFor(() => {
      fireEvent.change(input, { target: { value: "matrix" } });
    });
    const filter = store.getState().app.filter;
    expect(filter).toBe("matrix");

    const movieList = store.getState().app.movieList;
    expect(movieList.length).toBe(Config.PAGE_SIZE);
  });
});
