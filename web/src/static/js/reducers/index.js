import { combineReducers } from "redux";
import { routeReducer } from "react-redux-router";
import session from "./session";

export default combineReducers({
  routing: routeReducer,
  session: session
});
