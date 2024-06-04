import React from "react";
import PropTypes from "prop-types";
import "../styles/css/style.css";

const Tag = ({ label }) => {
  return <span className="tag">{label}</span>;
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Tag;
