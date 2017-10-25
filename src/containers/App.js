import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import "../style/App.css";
import Overview from "./Overview";
import AddNewItem from './AddNewItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route exact path="/add-new-item" component={AddNewItem} />
        </Switch>
      </div>
    );
  }
}

export default App;
