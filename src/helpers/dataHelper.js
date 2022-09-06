import { fetchMovieDetail, fetchMovies } from "integration/api";
import { store } from "redux/store";
import {
  fillMovieListAction,
  setfilterAction,
  setLoadingAction,
  setPageAction,
} from "redux/app/appActions";
import { alterDuplicateRecords } from "./appHelper";

const getState = async () => await store.getState().app;

export const getMovies = async (page, filter) => {
  store.dispatch(setLoadingAction(true));
  const response = await fetchMovies(page, filter);
  store.dispatch(setLoadingAction(false));
  if (response) {
    const movies = response.Search || [];
    const totalRecordCount = +response?.totalResults || 0;
    const distinctMovies = alterDuplicateRecords(movies); //api might return duplicate values
    store.dispatch(fillMovieListAction(distinctMovies, totalRecordCount));
  }
};

export const getNextPage = async () => {
  const state = await getState();
  const { page, pageCount, filter } = state;
  if (page < pageCount) {
    store.dispatch(setPageAction(page + 1));
    getMovies(page + 1, filter);
  }
};

export const getPreviousPage = async () => {
  const state = await getState();
  const { page, filter } = state;
  if (page > 1) {
    store.dispatch(setPageAction(page - 1));
    getMovies(page - 1, filter);
  }
};

export const search = async (keyword) => {
  store.dispatch(setfilterAction(keyword));
  store.dispatch(setPageAction(1));
  store.dispatch(fillMovieListAction([], 0));
  getMovies(1, keyword);
};

export const getMovieDetail = async (id) => {
  const response = await fetchMovieDetail(id);
  return response || {};
};
