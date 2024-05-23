import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/css/style.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <img src="/images/logo-header.svg" alt="Kasa Logo" className="logo-header" />
      <nav>
        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Accueil</Link></li>
          <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>A propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
