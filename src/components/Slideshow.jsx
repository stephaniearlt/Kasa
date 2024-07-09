import React, { useState } from "react";

const Slideshow = ({ images }) => {
  // [état local, mise à jour du nouvel état] = état actuel initialisé à 0
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    // état actuel = 0 alors affichage 1ère image
    // si appel fonction = calcul nouvel index => dernière image du tableau
    // mise à jour nouvelle valeur
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    // si currentIndex = à images.length - 1 => affichage dernière diapositive
    // index réinitialisé à 0 = retour 1ère diapo
    // si currentIndex # images.length - 1 => nouvel index
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slideshow">
      {images.length > 1 && (
        <>
          <button className="arrow left-arrow" onClick={previousSlide}>
            <img
              src={`${process.env.PUBLIC_URL}/images/chevron-left.svg`}
              alt="Précédent"
              className="chevron"
            />
          </button>
          <button className="arrow right-arrow" onClick={nextSlide}>
            <img
              src={`${process.env.PUBLIC_URL}/images/chevron-right.svg`}
              alt="Suivant"
              className="chevron"
            />
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

export default Slideshow;
