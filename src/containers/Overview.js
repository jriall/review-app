import React, { Component } from "react";
import { Navbar, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    categories: state
  };
}

function latestCover(obj) {
  return obj[Object.keys(obj)[Object.keys(obj).length - 1]].image;
}

class Overview extends Component {
  render() {
    const path = this.props.categories.reviewApp;

    return (
      <div className="category-overview">
        <Navbar bsClass="navbar" fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Review App</Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Row className="category-overview-grid">
          <Link to="/category/books">
            <Col
              md={12}
              lg={4}
              className="category-tile"
              id="books-category-tile"
              style={{ backgroundImage: `url(${latestCover(path.books)})` }}
            >
              <h2 className="category-overview-header">Books</h2>
            </Col>
          </Link>
          <Link to="/category/movies">
            <Col
              md={12}
              lg={4}
              className="category-tile"
              id="movies-category-tile"
              style={{ backgroundImage: `url(${latestCover(path.movies)})` }}
            >
              <h2 className="category-overview-header">Movies</h2>
            </Col>
          </Link>
          <Link to="/category/tv">
            <Col
              md={12}
              lg={4}
              className="category-tile"
              id="tv-category-tile"
              style={{ backgroundImage: `url(${latestCover(path.tv)})` }}
            >
              <h2 className="category-overview-header">TV Shows</h2>
            </Col>
          </Link>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Overview);
