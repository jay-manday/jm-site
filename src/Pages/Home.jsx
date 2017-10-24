import React from 'react';
import Navigation from '../Components/Navigation';
import About from '../Components/About';
import Work from '../Components/Work';
import Contact from '../Components/Contact';

const Home = () => (
  <div>
    <Navigation items={['about', 'work', 'colophon']} />
    <About />
    <Work />
    <Contact />
  </div>
)

export default Home;
