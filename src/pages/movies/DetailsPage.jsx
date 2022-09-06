import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from "pages/movies/styles/details.module.scss";
import { getMovieDetail } from "helpers/dataHelper";
import { setSelectedMovieIdAction } from "redux/app/appActions";
import { getTranslation } from "languages";
import Texts from "constants/texts";

export const DetailsPage = () => {
  const dispatch = useDispatch();
  const selectedMovieId = useSelector((state) => state.app.selectedMovieId);
  const language = useSelector((state) => state.app.language);
  const [details, setDetails] = useState();

  useEffect(() => {
    getMovieDetail(selectedMovieId).then((result) => setDetails(result));
  }, [selectedMovieId]);

  const closeDetails = () => {
    dispatch(setSelectedMovieIdAction(null));
  };

  const yearLabel = getTranslation(Texts.Year);
  const directorLabel = getTranslation(Texts.Director);
  const writerLabel = getTranslation(Texts.Writer);
  const castLabel = getTranslation(Texts.Actors);
  const genreLabel = getTranslation(Texts.Genre);
  const loadingLabel = getTranslation(Texts.Loading);

  const { Poster, Title, Year, Director, Writer, Actors, Genre, Plot } =
    details || {};

  return details ? (
    <section className={Styles.container} data-testid="details">
      <img src={Poster} alt="poster" />
      <section>
        <h1 aria-label="title">{Title}</h1>
        <div aria-label={yearLabel}>
          <span>{yearLabel}:</span> {Year}
        </div>
        <div aria-label={directorLabel}>
          <span>{directorLabel}:</span> {Director}
        </div>
        <div aria-label={writerLabel}>
          <span>{writerLabel}:</span> {Writer}
        </div>
        <div aria-label={castLabel}>
          <span>{castLabel}:</span> {Actors}
        </div>
        <div aria-label={genreLabel}>
          <span>{genreLabel}:</span> {Genre}
        </div>
        <p aria-label="plot">{Plot}</p>
      </section>
      <button onClick={closeDetails} aria-label="close">
        X
      </button>
    </section>
  ) : (
    <section className={Styles.container}>{loadingLabel}</section>
  );
};

export default DetailsPage;
