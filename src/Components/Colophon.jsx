import React from 'react'
import SectionTitle from './SectionTitle/SectionTitle';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';


const Contact = (props) => (

  <Flex wrap>
    <Box w={[1/4]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
      <SectionTitle title='colophon' />
    </Box>

    <Box w={[3/4, 2/3 ]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]} >
      <AboutType>Set with Akzidenz Grotesque</AboutType>
      <AboutType>This site is built with React</AboutType>
      <AboutType>Hosted with now</AboutType>
    </Box>


  </Flex>
)

export default Contact;

const AboutType= styled.h2`
@media (max-width: 48em) {
  font-size: 1em;
  line-height: 1.25em;
  text-decoration: none;
}

  background-color: black;
  font-family: 'GrotesqueMT';
  text-decoration: none;
  line-height: 1.5em;
  font-size: 1.5em;
  font-weight: 300;
  color: white;
  margin: 0;
`;
