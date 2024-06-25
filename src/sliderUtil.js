import React from 'react';
import ReactDOM from 'react-dom/client';
import AutoSlider from './AutoSlider.jsx';

const createSliderContainer = () => {
  let container = document.getElementById('slider-container');

  if (!container) {
    container = document.createElement('div');
    container.className = 'slider-container';
    container.id = 'slider-container';
    document.body.appendChild(container);
  }
  return container;
};

export const showSlider = (images, duration = 3000) => {
  const sliderContainer = createSliderContainer();

  const sliderElement = document.createElement('div');
  sliderContainer.appendChild(sliderElement);

  const root = ReactDOM.createRoot(sliderElement);
  root.render(<AutoSlider images={images} duration={duration} />);
};

const removeSlider = (sliderElement) => {
  const sliderContainer = document.getElementById('slider-container');
  if (sliderContainer && sliderElement) {
    sliderContainer.removeChild(sliderElement);
  }
};
