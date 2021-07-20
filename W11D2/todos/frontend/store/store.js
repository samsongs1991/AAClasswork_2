import { createStore } from "redux";
import rootReducer from "../reducers/root_reducer";



const configureStore = (preloaded = {}) => {
    return createStore(rootReducer, preloaded);
};

export default configureStore;