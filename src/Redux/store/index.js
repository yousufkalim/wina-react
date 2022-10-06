import { createStore, applyMiddleware, compose } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
const logger = (store) => {
  return (next) => {
    return (action) => {
      const result = next(action);
      return result;
    };
  };
};
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger, thunk)
    // process.env.devtool === true ? composeWithDevTools() : ""
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
