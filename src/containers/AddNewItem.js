import React, { Component } from "react";
import { Link } from "react-router-dom";
import Back from "../components/BackButton";

class AddNewItem extends Component {
  render() {
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
        <Back text={`Back to ${category === 'tv' ? "TV" : category[0].toUpperCase() + category.slice(1)}`} />
        <h1>{`Add a new ${category === "books"
          ? "Book"
          : category === "movies" ? "Movie" : "TV Show"} Review`}</h1>
      </div>
    );
  }
}

export default AddNewItem;
