import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import "../style/App.css";
import Overview from "./Overview";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Overview} />
        </Switch>
      </div>
    );
  }
}

export default App;
