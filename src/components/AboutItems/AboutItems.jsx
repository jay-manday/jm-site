import React from 'react'
import { Text } from 'rebass';
import { Box } from 'grid-styled';
import styled from 'styled-components';
import ContactItems from '../ContactItems/ContactItems';

const AboutItems = () => (

    <Box w={[3/4, 2/3 ]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]} >
      <Text width={[1]} f={3}>
        <AboutType>
          I'm a designer & engineer researching data and society. I enjoy contributing to open source projects like <LinkStyle href="p5js.org">p5.js</LinkStyle>, gardening with <LinkStyle href="http://learning-gardens.co/">learning gardens</LinkStyle> and teaching kids creative coding at the <LinkStyle href="ryeartscenter.org">Rye Arts Center</LinkStyle>.
        </AboutType>
      </Text>

      <Box py={3}>
        <Text width={[1]} f={3}>
          <AboutType>
            School of Art + Design at Purchase College
          </AboutType>
        </Text>
        <Text width={[1]} f={3}>
          <AboutType>
            B.S. in Visual Arts and Mathematics <br />
          </AboutType>
        </Text>

      </Box>

      <Box py={2}>
        <ContactItems
          email='jason.mandel@purchase.edu'
        />
      </Box>
      <Text width={[1]} f={3}>
        <AboutType>
          <LinkStyle href="http://s3.amazonaws.com/arena-attachments/1380589/5a621bb1d45b1ef89f7cb20f63d1177d.pdf?1509389154">
            Resumé</LinkStyle>
        </AboutType>
      </Text>
    </Box>
)

export default AboutItems;
const LinkStyle = styled.a`
@media (max-width: 48em) {
  display:inline-block;
  word-wrap: break-word;
  font-size: 1em;
  line-height: 1.5em;
  text-decoration: none;
  border-bottom: 3px solid #0000ee;
}

  display:inline-block;
  word-wrap: break-word;
  border-bottom: 5px solid #0000ee;
  text-decoration: none;
  padding: 0px;
  margin: 0px;
  color: white;

  :hover {
    color: red;
  }
`;

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
