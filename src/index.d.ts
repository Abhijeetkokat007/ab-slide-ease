import React from 'react';

export interface SlideItem {
  url: string;
  alt?: string;
  title?: string;
  description?: string;
  link?: string;
}

export interface AutoSliderProps {
  /** Array of image URLs or slide objects */
  images?: (string | SlideItem)[];
  /** Autoplay duration in milliseconds (default: 3000) */
  duration?: number;
  /** Enable or disable automatic sliding (default: true) */
  autoPlay?: boolean;
  /** Pause slide transitions when user hovers over the slider (default: true) */
  pauseOnHover?: boolean;
  /** Transition effect: 'slide' or 'fade' (default: 'slide') */
  effect?: 'slide' | 'fade';
  /** Display navigation dots indicator at bottom (default: true) */
  showDots?: boolean;
  /** Display previous / next navigation arrows (default: true) */
  showArrows?: boolean;
  /** Display numeric slide counter e.g. "1 / 5" (default: false) */
  showCounter?: boolean;
  /** Display progress bar indicator for slide interval (default: false) */
  showProgressBar?: boolean;
  /** Slider height CSS string, e.g., '400px', '70vh', '100%' (default: '400px') */
  height?: string;
  /** Custom CSS class for outer container */
  className?: string;
  /** Custom inline style for outer container */
  style?: React.CSSProperties;
  /** Callback fired whenever active slide changes */
  onSlideChange?: (index: number) => void;
  /** Custom slides rendered as React children */
  children?: React.ReactNode;
}

export declare const AutoSlider: React.FC<AutoSliderProps>;

export declare function showSlider(
  images: (string | SlideItem)[],
  duration?: number
): void;

export default AutoSlider;
