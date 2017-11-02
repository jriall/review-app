import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { editReview } from "../actions/index";
import Back from "../components/BackButton";
import HomeButton from "../components/HomeButton";

function mapStateToProps(state) {
  return {
    reviewedItem: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      editReview: editReview
    },
    dispatch
  );
}

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({
      id: this.props.match.params.id
    });
    const { pathname } = this.props.location;
    if (pathname.match(/movies/g)) {
      this.setState({ category: "movies" });
    } else if (pathname.match(/tv/g)) {
      this.setState({ category: "tv" });
    } else if (pathname.match(/books/g)) {
      this.setState({ category: "books" });
    }
  }

  componentDidMount() {
    const itemPath = this.props.reviewedItem.reviewApp[this.state.category][this.state.id];
    this.setState({
      dateAdded: itemPath.dateAdded,
      title: itemPath.title,
      image: itemPath.image,
      stars: itemPath.stars,
      review: itemPath.review,
      link: itemPath.link,
      dateEdited: Date.now(),
    });
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
    this.props.editReview(this.state);
    event.preventDefault();
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return (
        <Redirect to={`/category/${this.state.category}/${this.state.id}`} />
      );
    }

    const { pathname } = this.props.location;
    let cat;

    if (pathname.match(/movies/g)) {
      cat = "movies";
    } else if (pathname.match(/tv/g)) {
      cat = "tv";
    } else if (pathname.match(/books/g)) {
      cat = "books";
    }

    return (
      <div>
        <HomeButton />
        <Back
          text="Back to Review"
          link={`/category/${cat}/${this.state.id}`}
        />
        <Row>
          <Col xsOffset={1} xs={10} mdOffset={3} md={6}>
            <form onSubmit={this.handleSubmit}>
              <h1 className="edit-review-title">{`Edit ${this.state.title} Review`}</h1>
              <Row>
                <label>
                  <Row>Name</Row>
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
                  <Row>Image</Row>
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
                  <Row>Number of Stars</Row>
                  <select
                    name="stars"
                    value={this.state.stars}
                    onChange={this.handleChange}
                  >
                    <option>Select a Rating</option>
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
                  <Row>Category</Row>
                  <select
                    name="category"
                    value={this.state.category}
                    onChange={this.handleChange}
                  >
                    <option disabled>Select a Category</option>
                    <option disabled value="books">Book</option>
                    <option disabled value="movies">Movie</option>
                    <option disabled value="tv">TV</option>
                  </select>
                </label>
              </Row>

              <Row>
                <label>
                  <Row>Link</Row>
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
                  <Row>Review</Row>
                  <textarea
                    name="review"
                    value={this.state.review}
                    onChange={this.handleChange}
                  />
                </label>
              </Row>
              <Row>
                <Button type="submit" bsStyle="success">
                  Submit
                </Button>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);