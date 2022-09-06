import { render, fireEvent, waitFor } from "@testing-library/react";
import Pagination from "../components/Pagination";
import { withStore } from "testing/testHelper";
import { store } from "redux/store";
import mockMovieList from "testing/mockData/mockMovieList";
import { fillMovieListAction, setPageAction } from "redux/app/appActions";

let container;

beforeEach(() => {
  container = render(withStore(Pagination));
});

describe("Pagination", () => {
  test("should display results", () => {
    expect(container.getByText("0 results found.")).toBeInTheDocument();
  });

  test("should display paging info", () => {
    expect(container.getByText("Page 1 of 1")).toBeInTheDocument();
  });

  test("should display next button", () => {
    const nextButton = container.getByLabelText("next page");
    expect(nextButton).toBeInTheDocument();
  });

  test("should navigate next page when next button clicked", async () => {
    const nextButton = container.getByLabelText("next page");
    store.dispatch(fillMovieListAction(mockMovieList.Search, 100));
    await waitFor(() => {
      fireEvent.click(nextButton);
    });
    const page = store.getState().app.page;
    expect(page).toBe(2);
  });

  test("should display previous button", () => {
    const previousButton = container.getByLabelText("previous page");
    expect(previousButton).toBeInTheDocument();
  });

  test("should navigate previous page when previous button clicked", async () => {
    store.dispatch(setPageAction(3));
    const previousButton = container.getByLabelText("previous page");
    await waitFor(() => {
      fireEvent.click(previousButton);
    });
    const page = store.getState().app.page;
    expect(page).toBe(2);
  });
});
