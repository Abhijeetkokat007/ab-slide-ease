import React from 'react';
import ReactDOM from 'react-dom/client';
import AutoSlider from './AutoSlider.jsx';

let activeRoot = null;
let activeElement = null;
let keyListenerAttached = false;

const handleEscapeKey = (e) => {
  if (e.key === 'Escape') {
    removeSlider();
  }
};

export const showSlider = (images, duration = 3000, options = {}) => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    console.warn('[ab-slide-ease] showSlider can only be executed in a browser DOM environment.');
    return;
  }

  // Clean up any previously active imperative slider root
  removeSlider();

  let container = document.getElementById('ab-slider-root-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'ab-slider-root-container';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.zIndex = '999999';
    container.style.backgroundColor = 'rgba(11, 15, 25, 0.88)';
    container.style.backdropFilter = 'blur(12px)';
    container.style.webkitBackdropFilter = 'blur(12px)';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justify = 'center';
    container.style.padding = '20px';
    container.style.boxSizing = 'border-box';
    document.body.appendChild(container);

    // Close when clicking outer backdrop
    container.onclick = (e) => {
      if (e.target === container) {
        removeSlider();
      }
    };

    // Close button for imperative overlay
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&#x2715;';
    closeBtn.ariaLabel = 'Close Slider Modal';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '24px';
    closeBtn.style.right = '24px';
    closeBtn.style.background = 'rgba(255, 255, 255, 0.15)';
    closeBtn.style.color = '#ffffff';
    closeBtn.style.border = '1px solid rgba(255, 255, 255, 0.25)';
    closeBtn.style.borderRadius = '50%';
    closeBtn.style.width = '44px';
    closeBtn.style.height = '44px';
    closeBtn.style.fontSize = '22px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.zIndex = '1000000';
    closeBtn.style.display = 'flex';
    closeBtn.style.alignItems = 'center';
    closeBtn.style.justifyContent = 'center';
    closeBtn.style.transition = 'all 0.2s ease';
    
    closeBtn.onmouseenter = () => {
      closeBtn.style.background = 'rgba(239, 68, 68, 0.8)';
      closeBtn.style.transform = 'scale(1.1)';
    };
    closeBtn.onmouseleave = () => {
      closeBtn.style.background = 'rgba(255, 255, 255, 0.15)';
      closeBtn.style.transform = 'scale(1)';
    };
    closeBtn.onclick = () => removeSlider();
    container.appendChild(closeBtn);
  }

  const sliderInner = document.createElement('div');
  sliderInner.style.width = '100%';
  sliderInner.style.maxWidth = '960px';
  sliderInner.style.height = '520px';
  sliderInner.style.maxHeight = '85vh';
  sliderInner.style.margin = 'auto';
  sliderInner.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.7)';
  sliderInner.style.borderRadius = '16px';
  sliderInner.style.overflow = 'hidden';
  container.appendChild(sliderInner);

  // Attach Escape key listener
  if (!keyListenerAttached) {
    window.addEventListener('keydown', handleEscapeKey);
    keyListenerAttached = true;
  }

  activeElement = sliderInner;
  activeRoot = ReactDOM.createRoot(sliderInner);
  activeRoot.render(
    <AutoSlider
      images={images}
      duration={duration}
      height="100%"
      showDots={true}
      showArrows={true}
      showCounter={true}
      pauseOnHover={true}
      {...options}
    />
  );
};

export const removeSlider = () => {
  if (typeof document === 'undefined') return;

  if (keyListenerAttached) {
    window.removeEventListener('keydown', handleEscapeKey);
    keyListenerAttached = false;
  }

  if (activeRoot) {
    activeRoot.unmount();
    activeRoot = null;
  }
  const container = document.getElementById('ab-slider-root-container');
  if (container && container.parentNode) {
    container.parentNode.removeChild(container);
  }
  activeElement = null;
};
