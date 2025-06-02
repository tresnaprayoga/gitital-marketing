import React, { useState, useEffect } from 'react';

const HeroSection = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className='hero-section-digital-marketing'>
      <div className='slider-digital-marketing'>
        {slides.map((slide, index) => (
          <div key={index} className={`slide-digital-marketing ${index === currentSlide ? 'active' : ''}`} style={{ backgroundImage: `url(${slide.image})` }}>
            <div className='slide-content-digital-marketing'>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button className='button-order-digital-marketing'>
                <p>Get Started</p>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className='slider-btn-digital-marketing prev' onClick={goToPrev}>
        &lt;
      </button>
      <button className='slider-btn-digital-marketing next' onClick={goToNext}>
        &gt;
      </button>
      <div className='slider-dots-digital-marketing'>
        {slides.map((_, index) => (
          <span key={index} className={`dot-digital-marketing ${index === currentSlide ? 'active' : ''}`} onClick={() => goToSlide(index)}></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
