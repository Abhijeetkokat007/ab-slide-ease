# Ab Slide Ease

Ab Slide Ease is a seamless and easy-to-use React slider library designed for smooth and flexible web interfaces. It allows you to create a responsive image slider with minimal configuration.

## Features

- Smooth slide transitions from right to left
- Automatic slide transitions with customizable intervals
- Navigation buttons for manual slide control
- Dots for slide navigation
- Fully responsive design

## Installation

Install the library using npm:

```bash
npm install ab-slide-ease
```

## Usage
To use Ab Slide Ease in your React project, follow the steps below:

**1. Import the Component and CSS**
First, import the AbSlideElse component and the accompanying CSS file.

```bash
import showSlider from 'ab-slide-ease';
```
**2. Provide Slide Data**
Prepare an array of slide data, each containing an image URL and a caption.
```bash
const images = [
  'path/to/image1.jpg', 
  'path/to/image2.jpg', 
  'path/to/image3.jpg', 
];

```
**3. Use the Component in Your JSX**
Use the AbSlideElse component in your JSX and pass the slide data and optional interval prop.
```bash
const App = () => {
  return (
    <div>
      <button onClick={() => showSlider(images, 2000)}>Show Slider </button>
    </div>
  );
};

export default App;
```
**Example**
Here's a complete example:

```bash
import React from 'react';
import showSlider from 'ab-slide-ease';

const images = [
  'path/to/image1.jpg', 
  'path/to/image2.jpg', 
  'path/to/image3.jpg', 
];

const App = () => {
  return (
     <div>
      <button onClick={() => showSlider(images, 2000)}>Show Slider </button>
    </div>
  );
};

export default App;
```
## License
This project is licensed under the Apache-2.0 License. See the [LICENSE](https://github.com/Abhijeetkokat007/ab-slide-ease/blob/main/LICENSE) file for details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request on GitHub [AB Slide Ease](https://github.com/Abhijeetkokat007/ab-slide-ease).
