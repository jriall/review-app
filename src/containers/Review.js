import React, { Component } from "react";
import { Link } from "react-router-dom";
import Back from "../components/BackButton";

import testData from "../assets/testdata";

class Review extends Component {
  render() {
    const reviewId = this.props.match.params.id;
    const { pathname } = this.props.location;
    let category;

    if (pathname.match(/movies/g)) {
      category = "movies";
    } else if (pathname.match(/tv/g)) {
      category = "tv";
    } else if (pathname.match(/books/g)) {
      category = "books";
    }

    return (
      <div>
        <Link to="/">Home</Link>
        <Back text="Back to Category" />
        <h1>{testData[category][reviewId].title}</h1>
      </div>
    );
  }
}

export default Review;
