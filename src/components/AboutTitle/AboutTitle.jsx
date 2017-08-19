import React from 'react';
import { Box } from 'grid-styled';
import styled from 'styled-components';

const AboutTitle = () => (

  <Box w={[1/4]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
    <AboutStyle classID='about'>
      about
    </AboutStyle>
  </Box>
)

export default AboutTitle;

const AboutStyle = styled.p`
  @media (min-width: 20em) {
    font-size: 1em;
    text-decoration: none;
  }

  @media (min-width: 37.5em) {
    font-size: 1.5em;
    text-decoration: none;
  }

  :hover {
    color: red;
  }

  background-color: black;
  font-family: 'GrotesqueMT';
  font-size: 1em;
  font-weight: 300;
  color: white;
  margin: 0;
`;
