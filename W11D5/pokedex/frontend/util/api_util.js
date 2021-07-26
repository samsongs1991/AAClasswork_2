// Inside this file, we'll define 
// functions that make ajax requests, 
// fetching information from our rails api.

// ------------------------------------------
// Regular action creators
// Will go straight to the reducers


// ------------------------------------------
// Thunk action creators
// Will be functions so will be invoked
// then passed through thunk again until
// not a function before being passed to 
// the reducers
export const fetchAllPokemon = () => {
    return (
        $.ajax({
            method: "GET",
            url: "/api/pokemon"
        })
    )
}

export const requestAllPokemon = () => (dispatch) => {
    fetchAllPokemon()
        .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
}