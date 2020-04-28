import React, { PropTypes } from "react";
import { Provider } from "react-redux";
import { Router, RoutingContext } from "react-router";
import invariant from "invariant";
import configRoutes from "../routes";

const propTypes = {
  routerHistory: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

const Root = ({ routerHistory, store }) => {
  invariant(routerHistory, "Root needs context");

  return (
    <Provider store={store}>
      <Router routerHistory={routerHistory}>{configRoutes(store)}</Router>
    </Provider>
  );
};

Root.propTypes = propTypes;
export default Root;
