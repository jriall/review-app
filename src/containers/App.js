import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "../style/App.css";
import Overview from "./Overview";
import AddNewItem from "./AddNewItem";
import CategoryOverview from "./CategoryOverview";
import Review from "./Review";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route exact path="/add-new-item" component={AddNewItem} />
          <Route path="/review:id" component={Review} />
          <Route path="/category/:id" component={CategoryOverview} />
        </Switch>
      </div>
    );
  }
}

export default App;
