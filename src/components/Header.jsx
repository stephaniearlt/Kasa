import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <img
          src="/images/logo-header.svg"
          alt="Kasa Logo"
          className="logo-header"
        />
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
