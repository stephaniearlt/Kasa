import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/" className="logo-link">
        <img
          src="/images/logo-footer.svg"
          alt="Kasa Logo"
          className="logo-footer"
        />
      </Link>
      <p>&copy; 2024 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
