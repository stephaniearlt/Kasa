import React from "react";
import "../styles/css/style.css";

function Banner({ image, text, overlayOpacity }) {
  return (
    <section className="banner">
      <img src={process.env.PUBLIC_URL + image} alt="Bannière" />
      {text && <h1>{text}</h1>}
      <div className="overlay" style={{ opacity: overlayOpacity }}></div>
    </section>
  );
}

export default Banner;
