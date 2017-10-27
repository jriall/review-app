import React, { Component } from "react";
import { Link } from "react-router-dom";
import Back from "../components/BackButton";
import { Row, Col, Image } from "react-bootstrap";

import ZeroStars from "../assets/images/stars/0-stars.png";
import OneStar from "../assets/images/stars/1-stars.png";
import TwoStars from "../assets/images/stars/2-stars.png";
import ThreeStars from "../assets/images/stars/3-stars.png";
import FourStars from "../assets/images/stars/4-stars.png";
import FiveStars from "../assets/images/stars/5-stars.png";

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

    const starsArray = [
      ZeroStars,
      OneStar,
      TwoStars,
      ThreeStars,
      FourStars,
      FiveStars
    ];

    return (
      <div>
        <Link to="/" className="review">
          Home
        </Link>
        <Back text="Back to Category" />
        <h1 className="review-title">{testData[category][reviewId].title}</h1>
        <Image
          className="review-stars"
          src={starsArray[testData[category][reviewId].stars]}
          responsive
        />
        <Image
          className="review-image"
          src={testData[category][reviewId].image}
          responsive
        />
      </div>
    );
  }
}

export default Review;
