import React from "react";
import { useDispatch } from "react-redux";
import Styles from "pages/movies/styles/movies.module.scss";
import { Languages } from "constants/enums";
import { setLanguageAction } from "redux/app/appActions";

export const LanguageSwitch = () => {
  const dispatch = useDispatch();
  const setLanguage = (language) => dispatch(setLanguageAction(language));

  return (
    <div className={Styles.languageSwitch} data-testid="languageSwitch">
      <button
        aria-label="english"
        onClick={() => setLanguage(Languages.English)}
      />
      <button
        aria-label="deutsch"
        onClick={() => setLanguage(Languages.German)}
      />
    </div>
  );
};

export default LanguageSwitch;
