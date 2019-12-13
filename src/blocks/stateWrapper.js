import React from "react";
import PropTypes from "prop-types";

const styles = {
  active: {
    fill: "",
    stroke: ""
  },
  error: {},
  success: {},
  failed: {}
};

const StateWrapper = ({ state, children }) => {
  return <div>{children}</div>;
};

export default StateWrapper;
