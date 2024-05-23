import React from "react";

import Header from "../components/Header"; 
import Banner from "../components/Banner"; 
import Footer from "../components/Footer"; 

import '../styles/css/style.css';

const Home = () => {
  return (
    <>
      <Header />
      <Banner image="/images/cove.png" text="Chez vous, partout et ailleurs" />
      <div className="home-content">
        {/* Ajoute ici la logique pour afficher la liste des appartements */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
