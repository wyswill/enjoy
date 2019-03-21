import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./style/common.css";
import "./style/index.css";
import "./static/css/font.css";
import "./static/css/iconfont.css";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
