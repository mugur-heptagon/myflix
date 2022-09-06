import React from "react";
import Styles from "pages/movies/styles/movies.module.scss";
import Loading from "pages/shared/Loading";
import MovieListItem from "./MovieListItem";
import { useSelector } from "react-redux";
import { getTranslation } from "languages";
import Texts from "constants/texts";

const EmptyListMessage = () => (
  <div className={Styles.empty}>{getTranslation(Texts.NoMovieFound)}</div>
);

export const MovieList = () => {
  const loading = useSelector((state) => state.app.loading);
  const movieList = useSelector((state) => state.app.movieList);
  const language = useSelector((state) => state.app.language);

  return (
    <ul className={Styles.movieList} data-testid="movie-list">
      {!movieList.length && <EmptyListMessage />}
      {movieList.map((movie) => (
        <MovieListItem key={movie.id || movie.imdbID} {...movie} />
      ))}
      <Loading visible={loading} />
    </ul>
  );
};

export default MovieList;
