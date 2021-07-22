import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root.jsx"
import allTodos from "./reducers/selectors";

document.addEventListener("DOMContentLoaded", () => {

    const store = configureStore();
    window.store = store;

    ReactDOM.render(<Root store={ store } />, document.getElementById("content"));

});