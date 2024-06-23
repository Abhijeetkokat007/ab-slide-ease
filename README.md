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
import React from 'react';
import AbSlideElse from 'ab-slide-ease';
```
**2. Provide Slide Data**
Prepare an array of slide data, each containing an image URL and a caption.
```bash
const slides = [
  { image: 'path/to/image1.jpg', caption: 'Caption 1' },
  { image: 'path/to/image2.jpg', caption: 'Caption 2' },
  { image: 'path/to/image3.jpg', caption: 'Caption 3' },
];

```
**3. Use the Component in Your JSX**
Use the AbSlideElse component in your JSX and pass the slide data and optional interval prop.
```bash
const App = () => {
  return (
    <div>
      <h1>Welcome to Ab Slide Ease Demo</h1>
      <AbSlideElse slides={slides} interval={3000} />
    </div>
  );
};

export default App;
```
**Example**
Here's a complete example:

```bash
import React from 'react';
import ReactDOM from 'react-dom';
import AbSlideElse from 'ab-slide-ease';
import 'ab-slide-ease/dist/AbSlideElse.css';

const slides = [
  { image: 'path/to/image1.jpg', caption: 'Caption 1' },
  { image: 'path/to/image2.jpg', caption: 'Caption 2' },
  { image: 'path/to/image3.jpg', caption: 'Caption 3' },
];

const App = () => {
  return (
    <div>
      <h1>Welcome to Ab Slide Ease Demo</h1>
      <AbSlideElse slides={slides} interval={3000} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```
## License
This project is licensed under the Apache-2.0 License. See the [LICENSE](https://github.com/Abhijeetkokat007/ab-slide-ease/blob/main/LICENSE) file for details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request on GitHub [AB Slide Ease](https://github.com/Abhijeetkokat007/ab-slide-ease).
