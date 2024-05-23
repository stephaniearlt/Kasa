import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header"; 
import Footer from "../components/Footer"; 

import '../styles/css/style.css';

const Error = () => {
  return (
    <>
      <Header />
      <div className="error-content">
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="error-link">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </>
  );
};

export default Error;
