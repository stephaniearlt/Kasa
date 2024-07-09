import React, { useState } from "react";

const Collapse = ({ title, content }) => {
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
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
