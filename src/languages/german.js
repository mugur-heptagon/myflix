import Texts from "constants/texts";

const German = {
  [Texts.ThemeDarkLabel]: "Dunkel",
  [Texts.ThemeLightLabel]: "Licht",
  [Texts.SearchPlaceholder]: "Suche...",
  [Texts.SearchResultsLabel]: (count) => `${count} ergebnisse gefunden.`,
  [Texts.PagingLabel]: (page, totalPages) => `Seite ${page} von ${totalPages}`,
  [Texts.PreviousButtonAlt]: "bisherige",
  [Texts.NextButtonAlt]: "nächster",
  [Texts.SearchButtonAlt]: "suche",
  [Texts.Year]: "Jahr",
  [Texts.Director]: "Direktor",
  [Texts.Writer]: "Schriftsteller",
  [Texts.Actors]: "Schauspieler",
  [Texts.Genre]: "Genre",
  [Texts.NoMovieFound]: "Kein Film gefunden!",
};

export default German;
