import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Back = ({ ...props }) => (
  <Link to={props.link}>
    <Button bsStyle="primary" bsSize="large" >
      {props.text}
    </Button>
  </Link>

);

export default Back;
