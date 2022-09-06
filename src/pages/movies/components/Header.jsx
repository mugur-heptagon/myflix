import React from "react";
import Icons from "constants/icons";
import LanguageSwitch from "./LanguageSwitch";
import SearchBox from "./SearchBox";
import ThemeSwitch from "./ThemeSwitch";
import Styles from "pages/movies/styles/movies.module.scss";

export const Header = () => {
  return (
    <header data-testid="header">
      <div className={Styles.primary}>
        MYFLIX
        <SearchBox />
      </div>
      <div className={Styles.secondary}>
        <ThemeSwitch />
        <LanguageSwitch />
      </div>
    </header>
  );
};

export default Header;
