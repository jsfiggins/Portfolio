import React, { useState } from 'react';

const CardCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='carousel-container'>
      <button className='carousel-button prev' onClick={handlePrev}>
        &#10094;
      </button>
      <div className='carousel-wrapper'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-card ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `rotateY(${(index - currentIndex) * 30}deg) translateZ(100px)` }}
          >
            <img src={image} alt={`Screenshot ${index + 1}`} className='carousel-image' />
          </div>
        ))}
      </div>
      <button className='carousel-button next' onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default CardCarousel;
