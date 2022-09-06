import { Provider } from "react-redux";
import { initStore } from "redux/store";

const store = initStore();

export const withStore = (Component, params = {}) => (
  <Provider store={store}>
    <Component {...params} />
  </Provider>
);
