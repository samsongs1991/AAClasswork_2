import * as ApiUtils from "../util/session_api_util" 
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (currentUser) => {
    console.log(RECEIVE_CURRENT_USER);
    return ({
        type: RECEIVE_CURRENT_USER,
        currentUser
    });
} 

export const login = (user) => dispatch => {
    console.log("session actions");
    return (
        ApiUtils.login(user)
            .then(res => dispatch(receiveCurrentUser(res)))
    );
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

export const logout = () => dispatch => {
    return ApiUtils.logout().then(() => dispatch(logoutCurrentUser()));
}

export const signup = (user) => dispatch => {
    return ApiUtils.signup(user).then((res) => dispatch(receiveCurrentUser(res)));
}

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}