import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import addReview from '../actions/add_review';

import Back from "../components/BackButton";

const mapStateToProps = function(state){
  return {
    reviewedItem: state,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addReview: addReview
  }, dispatch);
}

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
    this.props.addReview(this.state);
    event.preventDefault();
  }

  render() {
    console.log(this.props)
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
            <Row>
            <Col xsOffset={1} xs={10} mdOffset={3} md={6}>
        <form onSubmit={this.handleSubmit}>
         <h1 className="add-new-review-title">{`Add a New ${category === "books"
            ? "Book"
            : category === "movies" ? "Movie" : "TV Show"} Review`}</h1>
            <Row>
          <label>
          <Row>
            Name
          </Row>
            <input
            className="text-input"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          </Row>
          <Row>
          <label>
          <Row>
            Image
            </Row>
            <input
            className="text-input"
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.handleChange}
            />
          </label>
          </Row>
          <Row>
          <label>
          <Row>
            Number of Stars
            </Row>
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
          </Row>
          <Row>
          <label>
          <Row>
            Link
            </Row>
            <input
            className="text-input"
              type="text"
              name="link"
              value={this.state.link}
              onChange={this.handleChange}
            />
          </label>
          </Row>
          <Row>
          <label>
          <Row>
            Review
            </Row>
            <textarea
              name="review"
              value={this.state.image}
              onChange={this.handleChange}
            />
          </label>
          </Row>
<Row>
          <Button type="submit" bsStyle="success">Submit</Button>
          </Row>
        </form>
        </Col>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewItem);
