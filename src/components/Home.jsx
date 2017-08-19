import React from 'react';
import Navigation from './Navigation';
import About from './About';
import Work from './Work';

const Home = () => (
  <div>
    <Navigation items={['about', 'work', 'contact']} />
    <About />
    <Work />
  </div>
)

export default Home;
