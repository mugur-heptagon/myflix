import React, { useEffect, Suspense } from "react";
import { useSelector } from "react-redux";
import Styles from "pages/movies/styles/movies.module.scss";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import { getMovies } from "helpers/dataHelper";
import Modal from "pages/shared/Modal";
import Loading from "pages/shared/Loading";

const DetailsPage = React.lazy(() => import("./DetailsPage"));

export const ListingPage = () => {
  const theme = useSelector((state) => state.app.theme);
  const selectedMovieId = useSelector((state) => state.app.selectedMovieId);

  useEffect(() => {
    const initialPage = 1;
    const initialFilter = "lord";
    getMovies(initialPage, initialFilter);
  }, []);

  return (
    <div className={Styles[theme]}>
      <div className={Styles.container}>
        <div className={Styles.main}>
          <Header />
          <section className={Styles.listingWrapper}>
            <Pagination />
            <MovieList />
          </section>
        </div>
      </div>
      <Modal visible={!!selectedMovieId}>
        <Suspense fallback={<Loading />}>
          <DetailsPage />
        </Suspense>
      </Modal>
    </div>
  );
};

export default ListingPage;
