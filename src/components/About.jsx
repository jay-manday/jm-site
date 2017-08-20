import React from 'react'
import SectionTitle from './SectionTitle/SectionTitle';
import AboutItems from './AboutItems/AboutItems';
import { Flex, Box } from 'grid-styled';

const About = (props) => (
  <Flex wrap>
    <Box w={[1/4]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
      <SectionTitle title='about' />
    </Box>

    <AboutItems />
  </Flex>
)

export default About;
