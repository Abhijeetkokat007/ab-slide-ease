# 🚀 Ab Slide Ease (`ab-slide-ease`)

[![npm version](https://img.shields.io/npm/v/ab-slide-ease.svg?style=flat-square)](https://www.npmjs.com/package/ab-slide-ease)
[![license](https://img.shields.io/npm/l/ab-slide-ease.svg?style=flat-square)](https://github.com/Abhijeetkokat007/ab-slide-ease/blob/main/LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/min/ab-slide-ease.svg?style=flat-square)](https://bundlephobia.com/package/ab-slide-ease)

**Ab Slide Ease** is a modern, high-performance, and feature-rich React slider library built for smooth transitions, flexible layouts, and elegant user interfaces. Works seamlessly in pure React apps, Next.js (SSR), and mobile browsers.

---

## ✨ Highlights & Features

- 🎨 **Modern Glassmorphism UI**: Backdrop blur controls, animated indicator dots, and sleek SVG arrows.
- ⚡ **GPU Hardware Accelerated**: Ultra-smooth `slide` (translateX) & `fade` transition effects.
- 📱 **Mobile Touch Swipe Gestures**: Native swipe left/right support for touch devices.
- ⏸️ **Pause on Hover**: Automatically pauses slider autoplay when mouse hovers over it.
- ⌨️ **Keyboard Accessibility**: Navigate slides using `ArrowLeft` and `ArrowRight` keys.
- 📐 **Fully Responsive**: Adapts seamlessly to parent containers, custom heights, or full viewports.
- 🏷️ **Rich Slide Captions & Custom Cards**: Support for image URLs, titles, descriptions, action buttons, or custom React children.
- 🔷 **TypeScript Included**: Full TypeScript autocompletion and type declarations (`index.d.ts`).
- ⚡ **SSR Safe**: Next.js & Gatsby compatible out of the box.

---

## 📦 Installation

```bash
npm install ab-slide-ease
# or
yarn add ab-slide-ease
# or
pnpm add ab-slide-ease
```

---

## 🚀 Quick Start

### 1. Declarative React Component (Recommended)

```jsx
import React from 'react';
import AutoSlider from 'ab-slide-ease';

const sampleImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200',
  'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200',
];

const App = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '40px auto' }}>
      <AutoSlider 
        images={sampleImages} 
        duration={3000} 
        height="450px" 
        effect="slide"
        showDots={true}
        showArrows={true}
      />
    </div>
  );
};

export default App;
```

---

### 2. Advanced Usage with Titles & Links

Pass an array of objects to display slide captions and call-to-action buttons:

```jsx
import React from 'react';
import { AutoSlider } from 'ab-slide-ease';

const slidesData = [
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200',
    title: 'Majestic Mountains',
    description: 'Explore breathtaking landscape photography and nature views.',
    link: 'https://unsplash.com',
  },
  {
    url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200',
    title: 'Serene Pine Forest',
    description: 'Discover peaceful green woodlands and misty mountain ranges.',
  },
];

const App = () => (
  <AutoSlider 
    images={slidesData} 
    duration={4000}
    showCounter={true}
    showProgressBar={true}
    pauseOnHover={true}
  />
);

export default App;
```

---

### 3. Imperative Modal Trigger (`showSlider`)

If you want to trigger a fullscreen modal popup slider programmatically via button click:

```jsx
import React from 'react';
import { showSlider } from 'ab-slide-ease';

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200',
  'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200',
];

const App = () => {
  return (
    <button onClick={() => showSlider(images, 3000)}>
      Open Fullscreen Slider
    </button>
  );
};

export default App;
```

---

## 🎛️ Component Props (`AutoSliderProps`)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `images` | `Array<string \| SlideItem>` | `[]` | Array of image URLs or slide objects (`{ url, alt, title, description, link }`) |
| `duration` | `number` | `3000` | Autoplay interval duration in milliseconds |
| `autoPlay` | `boolean` | `true` | Enable or disable automatic slide transitions |
| `pauseOnHover` | `boolean` | `true` | Pause autoplay when user hovers over slider |
| `effect` | `'slide' \| 'fade'` | `'slide'` | Transition effect style (`slide` or `fade`) |
| `showDots` | `boolean` | `true` | Show interactive navigation dots indicator |
| `showArrows` | `boolean` | `true` | Show previous and next arrow buttons |
| `showCounter` | `boolean` | `false` | Show slide counter badge (e.g. `1 / 5`) |
| `showProgressBar` | `boolean` | `false` | Show top progress bar indicator for interval timer |
| `height` | `string` | `'450px'` | Custom CSS height (e.g. `'400px'`, `'60vh'`, `'100%'`) |
| `className` | `string` | `''` | Extra CSS class for slider wrapper |
| `style` | `object` | `{}` | Inline CSS styles for wrapper |
| `onSlideChange` | `(index: number) => void` | `undefined` | Callback fired on slide change |

---

## 🎨 Customizing Styles

You can easily override CSS design tokens in your global CSS:

```css
:root {
  --ase-accent-color: #ec4899; /* Change active dot & progress bar color */
  --ase-radius: 20px;          /* Change corner rounding */
  --ase-bg-glass: rgba(0, 0, 0, 0.6); /* Change glass control background */
}
```

---

## 📄 License

Licensed under the [Apache-2.0 License](https://github.com/Abhijeetkokat007/ab-slide-ease/blob/main/LICENSE). Developed with ❤️ by [Abhijeet Kokat](https://github.com/Abhijeetkokat007).
