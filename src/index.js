import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./reducers/index";

let store = createStore(rootReducer);

ReactDOM.render(<App store={store} />, document.getElementById("root"));
registerServiceWorker();
