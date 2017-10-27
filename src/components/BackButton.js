import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Back = ({ history, ...props }) => (
  <Button onClick={history.goBack} bsStyle="primary">{props.text}</Button>
);

export default withRouter(Back);
