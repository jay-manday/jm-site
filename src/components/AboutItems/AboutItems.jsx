import React from 'react'
import { Box } from 'grid-styled';
import { Text } from 'rebass';
import styled from 'styled-components';

const AboutItems = () => (

    <Box w={[3/4, 2/3 ]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]} >
      <Text width={[1, 2/3]}>
        <AboutType>
          I'm a Designer and Engineer researching data and society. I like to contribute to open source projects like p5.js, gardening with learning gardens and teaching kids creative coding at the Rye Arts Center.
        </AboutType>
      </Text>

      <Box py={3}>
        <Text width={[1, 2/3]}>
          <AboutType>
            B.S. in Visual Arts and Mathematics <br />
            School of Art + Design at Purchase College
          </AboutType>
        </Text>
      </Box>
    </Box>
)

export default AboutItems;

const AboutType= styled.h2`
@media (min-width: 20em) {
  font-size: 1em;
  text-decoration: none;
}

@media (min-width: 37.5em) {
  font-size: 1.5em;
  text-decoration: none;
}
  font-family: 'GrotesqueMT';
  font-size: 1.25em;
  font-weight: 300;
  color: white;
  margin: 0;
`;
