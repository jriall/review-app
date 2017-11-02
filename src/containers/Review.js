import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { deleteReview } from "../actions/index";
import { Row, Col, Image, Button } from "react-bootstrap";

import Back from "../components/BackButton";
import HomeButton from '../components/HomeButton';

import ZeroStars from "../assets/images/stars/0-stars.png";
import OneStar from "../assets/images/stars/1-stars.png";
import TwoStars from "../assets/images/stars/2-stars.png";
import ThreeStars from "../assets/images/stars/3-stars.png";
import FourStars from "../assets/images/stars/4-stars.png";
import FiveStars from "../assets/images/stars/5-stars.png";

import dateFormatter from "../helpers/dateFormatter";

function mapStateToProps(state) {
  return {
    reviewedItem: state
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      deleteReview: deleteReview
    },
    dispatch
  );
}

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    const { pathname } = this.props.location;
    if (pathname.match(/movies/g)) {
      this.setState({ category: "movies" });
    } else if (pathname.match(/tv/g)) {
      this.setState({ category: "tv" });
    } else if (pathname.match(/books/g)) {
      this.setState({ category: "books" });
    }
  }

  handleDelete() {
    this.props.deleteReview(this.state);
    this.setState({ redirect: true });
  }

  render() {
    const reviewId = this.props.match.params.id;

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`/category/${this.state.category}`} />;
    }

    const starsArray = [
      ZeroStars,
      OneStar,
      TwoStars,
      ThreeStars,
      FourStars,
      FiveStars
    ];

    const item = this.props.reviewedItem.reviewApp[this.state.category][
      reviewId
    ];
    return (
      <div>
        <HomeButton />
        <Back
          text={`Back to ${this.state.category === "tv"
            ? "TV"
            : this.state.category[0].toUpperCase() +
              this.state.category.slice(1)}`}
          link={`/category/${this.state.category}`}
        />
        <Row className="review-row">
          <Col xs={12} md={6} className="review-column">
            <Image
              className="review-image center-block"
              src={item.image}
              responsive
            />
          </Col>
          <Col
            xsOffset={2}
            xs={8}
            mdOffset={0}
            md={5}
            className="review-column"
          >
            <h1 className="review-title">{item.title}</h1>
            <h3 className="review-header">{item.reviewHeader}</h3>
            <Image
              className="review-stars"
              src={starsArray[item.stars]}
              responsive
            />
            <p className="review-text">{item.review}</p>
            <p className="review-date">{dateFormatter(item.dateAdded, "added")}</p>
            <p className="edit-date">{dateFormatter(item.dateEdited, "edited")}</p>
            <Button
              bsSize="large"
              bsStyle="primary"
              href={item.link}
              target="_blank"
              className="amazon-link-button"
            >
              Buy on Amazon
            </Button>
            <Button bsStyle="danger" bsSize="large" onClick={this.handleDelete}>
              Delete Review
            </Button>
            <Link
            to={`/category/${this.state.category}/edit-item/${reviewId}`}
            className="edit-review-button"
          >
            <Button bsStyle="success" bsSize="large">Edit Item</Button>
          </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Review);
