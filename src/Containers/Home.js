import React from 'react'
//
import Navigation from '../Components/Navigation';
import About from '../Components/About';
import Work from '../Components/Work';
import Contact from '../Components/Contact';

import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary'

const Home = () => (
  <div>
    <Navigation items={['about', 'work', 'contact']} />
    <About />
    <Work />
    <Contact />
  </div>

)

export default Home;
