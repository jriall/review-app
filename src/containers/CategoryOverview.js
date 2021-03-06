import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Col, Image, Button } from "react-bootstrap";

import dateFormatter from "../helpers/dateFormatter";

import HomeButton from "../components/HomeButton";

import ZeroStars from "../assets/images/stars/0-stars.png";
import OneStar from "../assets/images/stars/1-stars.png";
import TwoStars from "../assets/images/stars/2-stars.png";
import ThreeStars from "../assets/images/stars/3-stars.png";
import FourStars from "../assets/images/stars/4-stars.png";
import FiveStars from "../assets/images/stars/5-stars.png";

function mapStateToProps(state) {
  return {
    categoryList: state
  };
}

class CategoryOverview extends Component {
  render() {
    const categoryId = this.props.match.params.id;

    const starsArray = [
      ZeroStars,
      OneStar,
      TwoStars,
      ThreeStars,
      FourStars,
      FiveStars
    ];

    const categoryArray = Object.values(
      this.props.categoryList.reviewApp[categoryId]
    );

    const tiles = categoryArray.map(item => {
      return (
        <Link to={`/category/${categoryId}/${item.id}`} key={item.id}>
          <Col xs={12} sm={6} md={3} lg={2} className="review-tile">
            <Image className="review-tile-image" src={item.image} responsive />
            <h3 className="review-tile-header">{item.title}</h3>
            <Image
              className="review-tile-stars"
              src={starsArray[item.stars]}
              responsive
            />
            <p className="review-tile-date">{dateFormatter(item.dateAdded)}</p>
          </Col>
        </Link>
      );
    });
    return (
      <div className="category-overview">
        <Row className="category-overview-row">
          <HomeButton />
          <Link
            to={`/category/${categoryId}/add-new-item`}
            className="add-new-review-button"
          >
            <Button bsStyle="success" bsSize="large" >Add New Item</Button>
          </Link>
        </Row>
        <Row>{tiles}</Row>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CategoryOverview);
