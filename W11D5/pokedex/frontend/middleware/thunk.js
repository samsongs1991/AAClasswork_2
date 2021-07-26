const thunk = (store) => {
    return (
        (next) => { // next is supposed to be dispatch
            return (action) => { // action is supposed to be action
                if(typeof action === 'function') { // if action is actually a fn, then invoke it
                    return action(store.dispatch, store.getState); // invoke the action fn (in our case fetchAllPokemon) 
                    // fetchAllPokemon will return an object with all the pokemon
                    // this object will be passed to the receiveAllPokemon action creator
                    // the object will be converted into an action object
                    // the action created will be passed to the reducer and change the local state
                } else {
                    return next(action); // dispatch(action) normally directly to the state
                }
            }
        }
    );
}

export default thunk;