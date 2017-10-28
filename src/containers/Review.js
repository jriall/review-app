import React, { Component } from "react";
import { Link } from "react-router-dom";
import Back from "../components/BackButton";
import { Row, Col, Image, Button } from "react-bootstrap";

import ZeroStars from "../assets/images/stars/0-stars.png";
import OneStar from "../assets/images/stars/1-stars.png";
import TwoStars from "../assets/images/stars/2-stars.png";
import ThreeStars from "../assets/images/stars/3-stars.png";
import FourStars from "../assets/images/stars/4-stars.png";
import FiveStars from "../assets/images/stars/5-stars.png";

import testData from "../assets/testdata";

import dateFormatter from "../helpers/dateFormatter";

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

    const starsArray = [
      ZeroStars,
      OneStar,
      TwoStars,
      ThreeStars,
      FourStars,
      FiveStars
    ];

    const item = testData[category][reviewId];

    return (
      <div>
        <Link to="/" className="review">
          Home
        </Link>
        <Back text={`Back to ${category === 'tv' ? "TV" : category[0].toUpperCase() + category.slice(1)}`} />
        <Row className="review-row">
        <Col xs={12} md={6} className="review-column">
        <Image className="review-image center-block" src={item.image} responsive />
        </Col>
        <Col xsOffset={2} xs={8} mdOffset={0} md={5} className="review-column">
        <h1 className="review-title">{item.title}</h1>
        <h3 className="review-header">{item.reviewHeader}</h3>
        <Image
          className="review-stars"
          src={starsArray[item.stars]}
          responsive
        />
        <p className="review-text">{item.review}</p>
        <p className="review-date">{dateFormatter(item.dateAdded)}</p>
        <Button
          bsSize="large"
          bsStyle="primary"
          href={item.link}
          target="_blank"
          className="amazon-link-button"
        >
          Buy on Amazon
        </Button>
        </Col>
        </Row>
      </div>
    );
  }
}

export default Review;
