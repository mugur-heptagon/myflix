import Config from "config/appConfig";

export const fetchMovies = async (page, filter) => {
  const url = `${Config.API_PATH}&s=${encodeURI(filter)}&page=${page}`;
  const response = await fetch(url)
    .then((res) => res.json())
    .catch((err) => null); //TODO: error handling, toaster message etc.

  return response;
};

export const fetchMovieDetail = async (id) => {
  const url = `${Config.API_PATH}&i=${id}&plot=short`;
  const response = await fetch(url)
    .then((res) => res.json())
    .catch((err) => null); //TODO: error handling, toaster message etc.

  return response;
};
