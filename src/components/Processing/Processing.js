import React from 'react';
import dynamic from 'next/dynamic';

import clock from './ProcessingSketch';

const P5Wrapper = dynamic(import('react-p5-wrapper'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default () => (
  <div className="sketch-container">
    <P5Wrapper sketch={clock}/>
  </div>
);
