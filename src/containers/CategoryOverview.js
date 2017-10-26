import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image } from 'react-bootstrap';

import Back from "../components/BackButton";

import testData from '../assets/testdata';

import ZeroStars from '../assets/images/stars/0-stars.png';
import OneStar from '../assets/images/stars/1-stars.png';
import TwoStars from '../assets/images/stars/2-stars.png';
import ThreeStars from '../assets/images/stars/3-stars.png';
import FourStars from '../assets/images/stars/4-stars.png';
import FiveStars from '../assets/images/stars/5-stars.png';

class CategoryOverview extends Component {
  render() {
    const categoryId = this.props.match.params.id;
    console.log(categoryId);

    const starsArray = [ZeroStars, OneStar, TwoStars, ThreeStars, FourStars, FiveStars]

    const tiles = testData.map((item, index) => {
      return (
          <Link to="/review/:id" key={index}>
            <Col xs={12} md={4} lg={3} className="review-tile">
              <h2 className="review-tile-header">{item.title}</h2>
              <Image className="review-tile-image" src={item.image} responsive />
              <Image className="review-tile-stars" src={starsArray[item.stars]} responsive />
            </Col>
          </Link>
      )
    });

    return (
      <div className="category-overview">
        <Row className="category-overview-row">
          <Link to="/add-new-item">Add New Item</Link>
          <Back text="Back" />
        </Row>
        <Row>
          {tiles}
        </Row>
      </div>
    );
  }
}

export default CategoryOverview;
