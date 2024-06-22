import React, { useEffect, useState } from "react";
import "./AbSlideElse.css";

const AbSlideElse = ({ slides, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? "left" : "right");
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setDirection("left");
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("right");
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""} ${
            index === currentSlide
              ? direction === "left"
                ? "slide-left-enter"
                : "slide-left-exit"
              : ""
          }`}
        >
          <img src={slide.image} alt={slide.caption} />
        </div>
      ))}
      <a className="prev" onClick={prevSlide}>
        &#10094;
      </a>
      <a className="next" onClick={nextSlide}>
        &#10095;
      </a>
      <div className="dot-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AbSlideElse;
