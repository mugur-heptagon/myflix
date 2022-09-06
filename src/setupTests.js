// jest-dom adds custom jest matchers for asserting on DOM nodes.
import "@testing-library/jest-dom";
import mockMovieList from "testing/mockData/mockMovieList";
import mockMovieDetail from "testing/mockData/mockMovieDetail";
import { store } from "redux/store";
import { resetAppStateAction } from "redux/app/appActions";

global.fetch = (url) => {
  const response = url.includes("&i=") ? mockMovieDetail : mockMovieList;
  return Promise.resolve({
    json: () => {
      return Promise.resolve(response);
    },
  });
};

jest.mock("lodash.debounce");

beforeEach(() => {
  store.dispatch(resetAppStateAction());
});
