import React from "react";
import { withRouter } from "react-router-dom";

const Back = ({ history, ...props }) => (
  <button onClick={history.goBack}>{props.text}</button>
);

export default withRouter(Back);
