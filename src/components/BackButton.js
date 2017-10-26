import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Back = ({ history, ...props }) => (
  <Button onClick={history.goBack}>{props.text}</Button>
);

export default withRouter(Back);
