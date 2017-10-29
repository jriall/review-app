import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "../style/App.css";

import Overview from "./Overview";
import AddNewItem from "./AddNewItem";
import CategoryOverview from "./CategoryOverview";
import Review from "./Review";

const App = ({ store }) => {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Overview} />
            <Route
              exact
              path="/category/*/add-new-item"
              component={AddNewItem}
            />
            <Route path="/category/*/:id" component={Review} />
            <Route path="/category/:id" component={CategoryOverview} />
          </Switch>
        </Router>
      </Provider>
    );
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
