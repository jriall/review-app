import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import reviewApp from "./reducers/index";

let store = createStore(reviewApp);

ReactDOM.render(<App store={store} />, document.getElementById("root"));
registerServiceWorker();
