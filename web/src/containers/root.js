import React, { PropTypes, View } from "react";
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
      <Router routerHistory={routerHistory}>
        <View>
        <head>
          <meta charset="utf-8"> </meta>
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
            {" "}
          </meta>
          <meta name="viewport" content="width=device-width, initial-scale=1">
            {" "}
          </meta>
          <meta name="description" content=""></meta>
          <meta name="author" content="ricardo@codeloveandboards.com"></meta>

          <title>Go Trello</title>
        </head>

        <body>
          <main id="main_container" role="main"></main>
        </body>
        </View>
      </Router>
    </Provider>
  );
};

Root.propTypes = propTypes;
export default Root;
