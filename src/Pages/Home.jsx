import React from 'react';
import Navigation from '../Components/Navigation';
import About from '../Components/About';
import Work from '../Components/Work';

const Home = () => (
  <div>
    <Navigation items={['about', 'work', 'contact']} />
    <About />
    <Work />
  </div>
)

export default Home;
