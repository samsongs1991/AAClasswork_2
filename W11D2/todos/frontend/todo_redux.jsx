import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
// import { receiveTodos, receiveTodo, removeTodo } from "./actions/todo_actions";



function root () {
    return(
        <h1>Todos App</h1>
    );
}


document.addEventListener("DOMContentLoaded", () => {


    const store = configureStore();
    window.store = store;



    ReactDOM.render(root(), document.getElementById("content"));

});