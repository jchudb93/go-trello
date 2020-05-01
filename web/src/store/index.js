import { createStore, applyMiddleware } from "react-redux";
import { routerMiddleware } from "react-router-redux";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import reducers from "../reducers";

const loggerMiddleware = createLogger({
  level: "info",
  collapsed: "true"
});

export default configureStore = browserHistory => {
  const reduxRouterMiddleware = routerMiddleware(browserHistory);
  const createStoreWithMiddleware = applyMiddleware(
    reduxRouterMiddleware,
    thunkMiddleware,
    loggerMiddleware
  )(createStore);

  return createStoreWithMiddleware(reducers);
};
