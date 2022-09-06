import React, { Suspense } from "react";
import { Provider } from "react-redux";
import "./App.module.scss";
import { initStore } from "redux/store";
import Loading from "pages/shared/Loading";

const ListingPage = React.lazy(() => import("./pages/movies/ListingPage"));

const store = initStore();

export const App = () => {
  return store ? (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <ListingPage />
      </Suspense>
    </Provider>
  ) : (
    <Loading />
  );
};

export default App;
