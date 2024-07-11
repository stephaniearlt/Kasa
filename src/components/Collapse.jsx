import React, { useState } from "react";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const handleArrowKeyPress = (e) => {
    // Si la touche Entrée est pressée sur l'icône de la flèche
    if (e.key === "Enter") {
      toggleCollapse();
    }
  };

  return (
    <div className="collapse">
      <div className="collapse-header">
        <h2>{title}</h2>
        <img
          src={`${process.env.PUBLIC_URL}/images/chevron-up.svg`}
          alt={`Collapse ${isOpen ? "fermé" : "ouvert"}`}
          className={`chevron ${isOpen ? "open" : ""}`}
          onClick={toggleCollapse}
          onKeyPress={handleArrowKeyPress}
          role="button"
          tabIndex={0} // Rendre l'icône focusable
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
