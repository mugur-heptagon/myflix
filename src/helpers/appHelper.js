import Config from "config/appConfig";

export const calculatePageCount = (totalRecordCount) => {
  return Math.ceil(totalRecordCount / Config.PAGE_SIZE) || 1;
};

export const alterDuplicateRecords = (movies) => {
  const result = [];
  const ids = movies.map((m) => m.imdbID);
  const uniqueIds = [...new Set(ids)];
  uniqueIds.forEach((unique) => {
    const selectedMovies = movies.filter((f) => f.imdbID === unique);
    if (selectedMovies.length === 1) {
      result.push(selectedMovies[0]);
    } else {
      selectedMovies[1].id = unique + "-2";
      selectedMovies[1].Title = selectedMovies[1].Title + "(2)";
      result.push(...selectedMovies);
    }
  });
  return result;
};
