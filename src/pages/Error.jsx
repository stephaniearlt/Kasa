import React from "react";
import { Link } from "react-router-dom";

import "../styles/css/style.css";

const Error = () => {
  return (
    <>
      <div className="error-content">
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="error-link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </>
  );
};

export default Error;
