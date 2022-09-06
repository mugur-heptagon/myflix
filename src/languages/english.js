import Texts from "constants/texts";

const English = {
  [Texts.ThemeDarkLabel]: "Dark",
  [Texts.ThemeLightLabel]: "Light",
  [Texts.SearchPlaceholder]: "search here...",
  [Texts.SearchResultsLabel]: (count) => `${count} results found.`,
  [Texts.PagingLabel]: (page, totalPages) => `Page ${page} of ${totalPages}`,
  [Texts.PreviousButtonAlt]: "previous page",
  [Texts.NextButtonAlt]: "next page",
  [Texts.SearchButtonAlt]: "search",
  [Texts.Year]: "Year",
  [Texts.Director]: "Director",
  [Texts.Writer]: "Writer",
  [Texts.Actors]: "Actors",
  [Texts.Genre]: "Genre",
  [Texts.NoMovieFound]: "No movie found!",
};

export default English;
