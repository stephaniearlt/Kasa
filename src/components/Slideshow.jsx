import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/css/style.css";

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slideshow">
      {images.length > 1 && (
        <>
          <button className="arrow left-arrow" onClick={previousSlide}>
            ‹
          </button>
          <button className="arrow right-arrow" onClick={nextSlide}>
            ›
          </button>
        </>
      )}
      <div className="slide" key={currentIndex}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      {images.length > 1 && (
        <div className="pagination">
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
};

Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
