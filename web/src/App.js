import React from "react";
import ReactDOM from "react-dom";
import browserHistory, { syncHistoryWithStore } from "react-router-redux";
import configureStore from "./store";

const store = configureStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

export const target = document.getElementById('main_container')
export const node = <Root routerHistory={history} store={store} />
