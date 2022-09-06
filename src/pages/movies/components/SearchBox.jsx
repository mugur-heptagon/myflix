import React, { useState } from "react";
import { useSelector } from "react-redux";
import Styles from "pages/movies/styles/movies.module.scss";
import Icons from "constants/icons";
import { search } from "helpers/dataHelper";
import Config from "config/appConfig";
import { Themes } from "constants/enums";
import { getTranslation } from "languages";
import Texts from "constants/texts";
import debounce from "lodash.debounce";

const {
  MIN_LETTER_COUNT_FOR_SEARCH,
  MAX_LETTER_COUNT_FOR_SEARCH,
  DEBOUNCE_DELAY,
} = Config;

const isValidKeyword = (value) =>
  value.length >= MIN_LETTER_COUNT_FOR_SEARCH &&
  value.length <= MAX_LETTER_COUNT_FOR_SEARCH;

export const SearchBox = () => {
  const theme = useSelector((state) => state.app.theme);
  const filter = useSelector((state) => state.app.filter);

  const debouncedSearch = React.useRef();
  const [keyword, setKeyword] = useState(filter);

  const handleKeywordChange = (e) => {
    const newKeyword = e.target.value;
    setKeyword(newKeyword);

    const searchWithFilter = () => {
      if (isValidKeyword(newKeyword)) search(newKeyword);
    };

    debouncedSearch.current?.cancel();
    debouncedSearch.current = debounce(searchWithFilter, DEBOUNCE_DELAY);
    debouncedSearch.current();
  };

  const searchPlaceholder = getTranslation(Texts.SearchPlaceholder);
  const searchButtonAlt = getTranslation(Texts.SearchButtonAlt);

  return (
    <div className={Styles.search} data-testid="searchbox">
      <input
        type="text"
        value={keyword}
        placeholder={searchPlaceholder}
        maxLength={50}
        onChange={handleKeywordChange}
        aria-label={searchPlaceholder}
      />
      <img
        alt={searchButtonAlt}
        src={theme === Themes.Dark ? Icons.SearchDark : Icons.SearchLight}
      />
    </div>
  );
};

export default SearchBox;
