import React, { Component } from "react";
import { Link } from "react-router-dom";
import Back from "../components/BackButton";

class CategoryOverview extends Component {
  render() {
    const categoryId = this.props.match.params.id;
    console.log(categoryId);
    return (
      <div>
        <Link to="/add-new-item">Add New Item</Link>
        <Link to={`/review:id`}>Review</Link>
        <Back text="Back" />
      </div>
    );
  }
}

export default CategoryOverview;
