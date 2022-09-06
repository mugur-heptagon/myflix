import { combineReducers } from "redux";
import { appReducer } from "./app/appReducer";

const rootAppReducer = combineReducers({
  app: appReducer,
});

const rootReducer = (state, action) => {
  return rootAppReducer(state, action);
};

export default rootReducer;
