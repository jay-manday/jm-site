import React from 'react'
import { Box } from 'grid-styled';
import { Text } from 'rebass';
import styled from 'styled-components';

const AboutItems = () => (

    <Box w={[3/4, 2/3 ]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]} >
      <Text width={[1]} f={3}>
        <AboutType>
          I'm a designer & engineer researching data and society. I like to contribute to open source projects like <Linkz href="https://p5js.org/">p5.js</Linkz>, gardening with <Linkz href="http://learning-gardens.co/">learning gardens</Linkz> and teaching kids creative coding at the <Linkz href="https://www.ryeartscenter.org/">Rye Arts Center</Linkz>.
        </AboutType>
      </Text>

      <Box py={3}>
        <Text width={[1]} f={3}>
          <AboutType>
            <Linkz href="https://www.ryeartscenter.org/">
              School of Art + Design at Purchase College
            </Linkz>
          </AboutType>
        </Text>
        <Text width={[1]} f={3}>
          <AboutType>
            B.S. in Visual Arts and Mathematics <br />
          </AboutType>
        </Text>
      </Box>
    </Box>
)

export default AboutItems;

const Linkz = styled.a`

text-decoration: underline;
text-decoration-color:  #0000ff;
transition: #ff0000 .15s ease-in;

:hover {
  color: red;
}

:visited {
  color: #ffffff;
  text-decoration-color:  #0000ff;
}

`;

const AboutType = styled.h2`
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
