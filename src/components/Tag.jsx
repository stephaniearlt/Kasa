import React from "react";

const Tag = ({ label }) => {
  return (
    <span className="tag" aria-label={`Tag: ${label}`}>
      {label}
    </span>
  );
};

export default Tag;
