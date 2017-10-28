import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import Back from "../components/BackButton";

class AddNewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    if (name === "stars") {
      this.setState({ [name]: Number(event.target.value) });
    } else {
      this.setState({ [name]: event.target.value });
    }
  }

  handleSubmit(event) {
    alert("A review was submitted: " + this.state);
    event.preventDefault();
  }

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
        <Back
          text={`Back to ${category === "tv"
            ? "TV"
            : category[0].toUpperCase() + category.slice(1)}`}
        />

        <form onSubmit={this.handleSubmit}>
          <h1>{`Add a New ${category === "books"
            ? "Book"
            : category === "movies" ? "Movie" : "TV Show"} Review`}</h1>
          <label>
            Name:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Image:
            <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number of Stars
            <select
              name="stars"
              value={this.state.stars}
              onChange={this.handleChange}
            >
              <option value={0}>Zero Stars</option>
              <option value={1}>One Star</option>
              <option value={2}>Two Stars</option>
              <option value={3}>Three Stars</option>
              <option value={4}>Four Stars</option>
              <option value={5}>Five Stars</option>
            </select>
          </label>
          <label>
            Link:
            <input
              type="text"
              name="link"
              value={this.state.link}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Review:
            <textarea
              name="review"
              value={this.state.image}
              onChange={this.handleChange}
            />
          </label>

          <Button type="submit" bsStyle="success">Submit</Button>
        </form>
      </div>
    );
  }
}

export default AddNewItem;
