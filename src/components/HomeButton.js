import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeButton = () => (
  <Link to="/">
    <Button bsStyle="primary" bsSize="large" className="home-button">
      Home
    </Button>
  </Link>
);

export default HomeButton;
