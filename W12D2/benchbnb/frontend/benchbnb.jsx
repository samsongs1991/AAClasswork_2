import React from "react";
import ReactDOM from "react-dom";
// import { login, logout, signup } from "./util/session_api_util";
import configureStore from "./store/store";
import {login} from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
  // window.login = login;
  // window.logout = logout;
  // window.signup = signup;

  window.login = login;
  const store = configureStore();
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});