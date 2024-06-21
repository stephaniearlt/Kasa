import React from "react";

function Banner({ image, text, overlayOpacity }) {
  return (
    <section className="banner">
      <img src={process.env.PUBLIC_URL + image} alt="Bannière" />
      {text && (
        <h1>
          <span className="desktop">{text}</span>
          <span className="mobile">
            {text.split(",")[0]},<br />
            {text.split(",")[1]}
          </span>
        </h1>
      )}
      <div className="overlay" style={{ opacity: overlayOpacity }}></div>
    </section>
  );
}

export default Banner;
