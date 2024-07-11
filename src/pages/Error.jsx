import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-content" role="alert" aria-live="assertive">
      <h1 tabIndex="0">404</h1>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default Error;
