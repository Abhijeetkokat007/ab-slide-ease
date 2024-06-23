
import React from 'react';
import AbSlideElse from './AbSlideElse';


const autoImg = [
  { image: 'https://wallpapercave.com/wp/wp4659392.jpg', caption: 'Slide 1' },
  { image: 'https://images.pexels.com/photos/868483/pexels-photo-868483.jpeg?cs=srgb&dl=active-aerobics-balance-868483.jpg&fm=jpg', caption: 'Slide 2' },
  { image: 'https://www.lakeshoresf.com/wp-content/uploads/2021/04/Kids-Fitness-Training-Lincoln-Park-Chicago-scaled.jpeg', caption: 'Slide 3' },
];

const App = () => {
  return (
    <div>
      
      <AbSlideElse slides={autoImg} interval={3000} />
      <h1>hello good</h1>
    </div>
  );
};

export default App;
