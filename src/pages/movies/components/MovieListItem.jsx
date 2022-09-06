import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Styles from "pages/movies/styles/movies.module.scss";
import Icons from "constants/icons";
import { setSelectedMovieIdAction } from "redux/app/appActions";

export const MovieListItem = ({ imdbID, Poster, Title, Year }) => {
  const dispatch = useDispatch();
  const showDetails = () => {
    dispatch(setSelectedMovieIdAction(imdbID));
  };

  return (
    <li
      className={Styles.animated}
      onClick={showDetails}
      data-testid={`movie-${imdbID}`}
    >
      <div className={Styles.poster}>
        <img src={Poster || Icons.UnavailablePoster} alt={Title} />
      </div>
      <div className={Styles.title}>{Title}</div>
      <div className={Styles.year}>{Year}</div>
    </li>
  );
};

MovieListItem.propTypes = {
  Poster: PropTypes.string,
  Title: PropTypes.string,
  Year: PropTypes.string,
};

export default MovieListItem;
