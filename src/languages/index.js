import English from "./english";
import German from "./german";
import { Languages } from "constants/enums";
import { store } from "redux/store";

const languages = {
  [Languages.English]: English,
  [Languages.German]: German,
};

export const getTranslation = (key) => {
  const state = store.getState().app;
  return languages[state.language][key];
};
