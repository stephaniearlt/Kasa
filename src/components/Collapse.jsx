import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/css/style.css";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header">
        <h2>{title}</h2>
        <img
          src={`${process.env.PUBLIC_URL}/images/chevron-up.svg`}
          alt="Chevron"
          className={`chevron ${isOpen ? "open" : ""}`}
          onClick={toggleCollapse}
        />
      </div>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapse;
