import React from "react";
import ReactDOM from "react-dom";
import "core-js/es";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import { Provider } from "react-redux";
import store from "store/store.js";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
