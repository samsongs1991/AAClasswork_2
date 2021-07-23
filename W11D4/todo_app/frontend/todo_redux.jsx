import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root.jsx"
import allTodos from "./reducers/selectors";
// import {fetchTodos} from "./util/todo_api_util";
import {fetchTodos} from "./actions/todo_actions"

document.addEventListener("DOMContentLoaded", () => {

    const store = configureStore();
    window.store = store;
    window.fetchTodos = fetchTodos;

    ReactDOM.render(<Root store={ store } />, document.getElementById("root"));

});