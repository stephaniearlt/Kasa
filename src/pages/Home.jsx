import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../datas/logements.json";

import "../styles/css/style.css";

const Home = () => {
  return (
    <>
      <Banner
        image="/images/cove.png"
        text="Chez vous, partout et ailleurs"
        overlayOpacity={0.6}
      />
      <ul className="cards-container">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
            id={logement.id}
          />
        ))}
      </ul>
    </>
  );
};

export default Home;
