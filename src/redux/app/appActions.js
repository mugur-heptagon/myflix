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

export const setLoadingAction = (loading) => ({
  type: SET_LOADING,
  payload: { loading },
});

export const setThemeAction = (theme) => ({
  type: SET_THEME,
  payload: { theme },
});

export const setLanguageAction = (language) => ({
  type: SET_LANGUAGE,
  payload: { language },
});

export const fillMovieListAction = (movieList, totalRecordCount) => ({
  type: FILL_MOVIE_LIST,
  payload: { movieList, totalRecordCount },
});

export const setfilterAction = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});

export const setPageAction = (page) => ({
  type: SET_PAGE,
  payload: { page },
});

export const setSelectedMovieIdAction = (selectedMovieId) => ({
  type: SET_SELECTED_MOVIE_ID,
  payload: { selectedMovieId },
});

export const resetAppStateAction = () => ({ type: RESET_APP_STATE });
