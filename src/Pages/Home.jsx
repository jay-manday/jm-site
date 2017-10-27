import React from 'react';
import Navigation from '../Components/Navigation';
import About from '../Components/About';
import Work from '../Components/Work';
import Colophon from '../Components/Colophon';

const Home = () => (
  <div>
    <Navigation items={["about","work","colophon"]}/>

    <About/>

    <Work />

    <Colophon/>

  </div>
)

export default Home;
