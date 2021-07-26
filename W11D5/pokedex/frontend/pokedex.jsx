import React from "react";
import ReactDOM from "react-dom";

import { fetchAllPokemon, requestAllPokemon } from "./util/api_util";
import { receiveAllPokemon } from "./actions/pokemon_actions";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {    
    window.fetchAllPokemon = fetchAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    

    
    ReactDOM.render(<div>React is working</div>, document.getElementById("root"));
});