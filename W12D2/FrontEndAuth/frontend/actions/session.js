import * as APIUtils from "../utils/session";

// action creators

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = (user) => {
    return ({
        type: RECEIVE_CURRENT_USER, 
        user
    });
}

export const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER
    });
}



// thunk action creators

export const createNewUser = (formUser) => (dispatch) => {
    return (
        APIUtils.postUser(formUser)
            .then(user => dispatch(receiveCurrentUser(user)))
    );
}

export const login = (formUser) => (dispatch) => {
    return (
        APIUtils.postSession(formUser)
            .then(user => dispatch(receiveCurrentUser(user)))
    );
}

export const logout = () => (dispatch) => {
    return (
        APIUtils.deleteSession()
            .then(() => dispatch(logoutCurrentUser()))
    );
}