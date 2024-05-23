import React from 'react';
import '../styles/css/style.css';

function Banner({ image, text }) {
  return (
    <section className="banner">
      <img src={process.env.PUBLIC_URL + image} alt="Bannière" />
      {text && <h1>{text}</h1>}
    </section>
  );
}

export default Banner;
