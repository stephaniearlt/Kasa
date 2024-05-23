import React from "react";

import Header from "../components/Header"; 
import Footer from "../components/Footer"; 

import '../styles/css/style.css';

const Location = () => {
  return (
    <>
      <Header />
      <div className="location-content">
        {/* Ajoute ici la logique pour afficher les détails du logement */}
      </div>
      <Footer />
    </>
  );
};

export default Location;
