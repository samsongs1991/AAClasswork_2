import React from "react";
import { Provider } from "react-redux";
import App from "./app.jsx";

const Root = (props) => (
    // <div>Root is working</div>
    <Provider store={props.store}>
        <App />
    </Provider>
);

export default Root;