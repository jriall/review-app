import React, { Component } from "react";
import { Navbar, Row, Col } from "react-bootstrap";
import bookImage from "../assets/images/book-cover-photo.png";
import tvImage from "../assets/images/tv-cover-photo.jpg";
import movieImage from "../assets/images/movie-cover-photo.jpg";

class Overview extends Component {
  render() {
    return (
      <div className="category-overview">
        <Navbar bsClass="navbar" fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Review App</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Row className="category-overview-grid">
          <Col
            md={12}
            lg={4}
            className="category-tile"
            id="book-category-tile"
            style={{ backgroundImage: `url(${bookImage})` }}
          >
            <h2 className="category-overview-header">Books</h2>
          </Col>
          <Col
            md={12}
            lg={4}
            className="category-tile"
            id="movie-category-tile"
            style={{ backgroundImage: `url(${movieImage})` }}
          >
            <h2 className="category-overview-header">Movies</h2>
          </Col>
          <Col
            md={12}
            lg={4}
            className="category-tile"
            id="tv-category-tile"
            style={{ backgroundImage: `url(${tvImage})` }}
          >
            <h2 className="category-overview-header">TV Shows</h2>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Overview;
