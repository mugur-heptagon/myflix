import React from "react";
import Styles from "pages/movies/styles/movies.module.scss";
import Icons from "constants/icons";
import { getNextPage, getPreviousPage } from "helpers/dataHelper";
import { useSelector } from "react-redux";
import { getTranslation } from "languages";
import Texts from "constants/texts";

export const Pagination = () => {
  const totalRecordCount = useSelector((state) => state.app.totalRecordCount);
  const page = useSelector((state) => state.app.page);
  const pageCount = useSelector((state) => state.app.pageCount);
  const language = useSelector((state) => state.app.language);

  const resultsLabel = getTranslation(Texts.SearchResultsLabel)(
    totalRecordCount
  );
  const pageLabel = getTranslation(Texts.PagingLabel)(page, pageCount);
  const previousButtonAlt = getTranslation(Texts.PreviousButtonAlt);
  const nextButtonAlt = getTranslation(Texts.NextButtonAlt);

  return (
    <section className={Styles.pagination} data-testid="pagination">
      <div>{resultsLabel}</div>
      <div className={Styles.pager}>
        <span>{pageLabel}</span>
        <img
          alt={previousButtonAlt}
          src={Icons.BackArrow}
          onClick={getPreviousPage}
          aria-label={previousButtonAlt}
        />
        <img
          alt={nextButtonAlt}
          src={Icons.ForwardArrow}
          onClick={getNextPage}
          aria-label={nextButtonAlt}
        />
      </div>
    </section>
  );
};

export default Pagination;
