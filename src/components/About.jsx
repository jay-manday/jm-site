import React from 'react'
import AboutTitle from './AboutTitle/AboutTitle';
import AboutItems from './AboutItems/AboutItems';
import { Flex } from 'grid-styled';

const About = (props) => (
  <div>
    <Flex wrap>

      <AboutTitle />
      <AboutItems />

    </Flex>
  </div>
)

export default About;
