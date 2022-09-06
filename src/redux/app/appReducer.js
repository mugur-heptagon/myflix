import {
  SET_LOADING,
  FILL_MOVIE_LIST,
  SET_THEME,
  SET_FILTER,
  SET_PAGE,
  SET_SELECTED_MOVIE_ID,
  SET_LANGUAGE,
  RESET_APP_STATE,
} from "./actionTypes";
import { Languages, Themes } from "constants/enums";
import { calculatePageCount } from "helpers/appHelper";

const initialState = {
  language: Languages.English,
  loading: false,
  movieList: [],
  totalRecordCount: 0,
  page: 1,
  pageCount: 1,
  filter: "lord",
  theme: Themes.Dark,
  selectedMovieId: null,
};

export function appReducer(state = { ...initialState }, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload.loading };
    case FILL_MOVIE_LIST:
      return {
        ...state,
        movieList: [...payload.movieList],
        totalRecordCount: payload.totalRecordCount,
        pageCount: calculatePageCount(payload.totalRecordCount),
      };
    case SET_THEME:
      return { ...state, theme: payload.theme };
    case SET_LANGUAGE:
      return { ...state, language: payload.language };
    case SET_FILTER:
      return { ...state, filter: payload.filter };
    case SET_PAGE:
      return { ...state, page: payload.page };
    case SET_SELECTED_MOVIE_ID:
      return { ...state, selectedMovieId: payload.selectedMovieId };
    case RESET_APP_STATE:
      return { ...initialState };
    default:
      return state;
  }
}
