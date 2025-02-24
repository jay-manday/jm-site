import { useState, useEffect } from 'react';

function getWindowDimensions() {
  if (typeof window != "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height }
  }

  return { width: 0, height: 0 };  
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}