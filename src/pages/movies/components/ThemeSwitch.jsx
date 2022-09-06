import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from "pages/movies/styles/movies.module.scss";
import { Themes } from "constants/enums";
import { setThemeAction } from "redux/app/appActions";
import { getTranslation } from "languages";
import Texts from "constants/texts";

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.app.language);
  const setTheme = (theme) => dispatch(setThemeAction(theme));
  const darkLabel = getTranslation(Texts.ThemeDarkLabel);
  const lightLabel = getTranslation(Texts.ThemeLightLabel);

  return (
    <div className={Styles.themeSwitch} data-testid="themeSwitch">
      <button aria-label={darkLabel} onClick={() => setTheme(Themes.Dark)}>
        {darkLabel}
      </button>
      <button aria-label={lightLabel} onClick={() => setTheme(Themes.Light)}>
        {lightLabel}
      </button>
    </div>
  );
};

export default ThemeSwitch;
