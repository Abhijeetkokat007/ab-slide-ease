import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import './AutoSlider.css';

const AutoSlider = ({
  images = [],
  duration = 3000,
  autoPlay = true,
  pauseOnHover = true,
  effect = 'slide',
  showDots = true,
  showArrows = true,
  showCounter = false,
  showProgressBar = false,
  height = '450px',
  className = '',
  style = {},
  onSlideChange,
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Normalize slide items (support string array, object array, or children)
  const slides = React.Children.count(children) > 0
    ? React.Children.toArray(children)
    : images.map((item) => (typeof item === 'string' ? { url: item } : item));

  const totalSlides = slides.length;

  const goToNext = useCallback(() => {
    if (totalSlides === 0) return;
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex === totalSlides - 1 ? 0 : prevIndex + 1;
      if (onSlideChange) onSlideChange(nextIndex);
      return nextIndex;
    });
  }, [totalSlides, onSlideChange]);

  const goToPrevious = useCallback(() => {
    if (totalSlides === 0) return;
    setCurrentIndex((prevIndex) => {
      const prevIndexVal = prevIndex === 0 ? totalSlides - 1 : prevIndex - 1;
      if (onSlideChange) onSlideChange(prevIndexVal);
      return prevIndexVal;
    });
  }, [totalSlides, onSlideChange]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    if (onSlideChange) onSlideChange(index);
  }, [onSlideChange]);

  // Autoplay Effect
  useEffect(() => {
    if (!autoPlay || isPaused || totalSlides <= 1) return;

    const timer = setInterval(() => {
      goToNext();
    }, duration);

    return () => clearInterval(timer);
  }, [autoPlay, isPaused, duration, totalSlides, goToNext]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  // Touch Swipe Handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isSwipeLeft = distance > 40;
    const isSwipeRight = distance < -40;

    if (isSwipeLeft) {
      goToNext();
    } else if (isSwipeRight) {
      goToPrevious();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  if (totalSlides === 0) {
    return (
      <div className={`auto-slider-empty ${className}`} style={{ height, ...style }}>
        <span>No slides available</span>
      </div>
    );
  }

  return (
    <div
      className={`auto-slider auto-slider-effect-${effect} ${className}`}
      style={{ height, ...style }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Image Slider"
    >
      {/* Progress Bar */}
      {showProgressBar && autoPlay && !isPaused && totalSlides > 1 && (
        <div className="slider-progress-track">
          <div
            key={currentIndex}
            className="slider-progress-bar"
            style={{ animationDuration: `${duration}ms` }}
          />
        </div>
      )}

      {/* Slide Counter Badge */}
      {showCounter && (
        <div className="slider-counter-badge">
          {currentIndex + 1} / {totalSlides}
        </div>
      )}

      {/* Slides Container */}
      <div
        className="slider-track"
        style={
          effect === 'slide'
            ? { transform: `translateX(-${currentIndex * 100}%)` }
            : undefined
        }
      >
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;

          if (React.Children.count(children) > 0) {
            return (
              <div
                key={index}
                className={`slide-item ${isActive ? 'active' : ''}`}
                aria-hidden={!isActive}
              >
                {slide}
              </div>
            );
          }

          const slideObj = typeof slide === 'string' ? { url: slide } : slide;

          return (
            <div
              key={index}
              className={`slide-item ${isActive ? 'active' : ''}`}
              aria-hidden={!isActive}
            >
              {slideObj.url && (
                <img
                  src={slideObj.url}
                  alt={slideObj.alt || slideObj.title || `Slide ${index + 1}`}
                  className="slide-image"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              )}

              {(slideObj.title || slideObj.description) && (
                <div className="slide-caption-overlay">
                  {slideObj.title && <h3 className="slide-title">{slideObj.title}</h3>}
                  {slideObj.description && (
                    <p className="slide-description">{slideObj.description}</p>
                  )}
                  {slideObj.link && (
                    <a
                      href={slideObj.link}
                      className="slide-link-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      {showArrows && totalSlides > 1 && (
        <>
          <button
            type="button"
            className="slider-btn prev-button"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            className="slider-btn next-button"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      {/* Pagination Dots */}
      {showDots && totalSlides > 1 && (
        <div className="slider-dots-container" role="tablist">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              role="tab"
              aria-selected={index === currentIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
};

AutoSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.string,
      }),
    ])
  ),
  duration: PropTypes.number,
  autoPlay: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  effect: PropTypes.oneOf(['slide', 'fade']),
  showDots: PropTypes.bool,
  showArrows: PropTypes.bool,
  showCounter: PropTypes.bool,
  showProgressBar: PropTypes.bool,
  height: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onSlideChange: PropTypes.func,
  children: PropTypes.node,
};

export default AutoSlider;
