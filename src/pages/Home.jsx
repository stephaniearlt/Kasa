import React from 'react';
import Header from '../components/Header'; 
import Banner from '../components/Banner'; 
import Card from '../components/Card';
import logements from '../datas/logements.json'; 
import Footer from '../components/Footer'; 
import '../styles/css/style.css';

const Home = () => {
  return (
    <>
      <Header />
      <Banner image="/images/cove.png" text="Chez vous, partout et ailleurs" overlayOpacity={0.6} />
      <ul className="cards-container">
        {logements.map((logement) => (
          <li key={logement.id}>
            <Card title={logement.title} cover={logement.cover} />
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
};

export default Home;
