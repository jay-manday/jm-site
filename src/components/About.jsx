import React from 'react'
import SectionTitle from './SectionTitle/SectionTitle';
import AboutItems from './AboutItems/AboutItems';
import { Flex } from 'grid-styled';

const About = (props) => (
  <div>
    <Flex wrap>

      <SectionTitle title='about' />
      <AboutItems />

    </Flex>
  </div>
)

export default About;
