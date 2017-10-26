import React, { Component } from "react";
import { Link } from "react-router-dom";
import Back from "../components/BackButton";

class AddNewItem extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Back text="Back to Category" />
      </div>
    );
  }
}

export default AddNewItem;
