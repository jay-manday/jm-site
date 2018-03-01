import React from 'react'
import { Text } from 'rebass';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import SectionTitle from './SectionTitle/SectionTitle';

const About = (props) => (
  <Flex wrap>
    <Box w={[1/4]} p={[3,4]} pl={[2, 3]} >
      <SectionTitle title='about' />
    </Box>

    <Box w={[3/4, 2/3 ]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]} >
      <AboutType width={[1]} f={3}>
        I'm a designer & engineer, currently a research assistant working on climate visualizations for the <LinkStyle href="urbansystemslab.com">Urban Systems Lab</LinkStyle> at the New School. I enjoy contributing to open source projects like <LinkStyle href="p5js.org">p5.js</LinkStyle>, gardening at <LinkStyle href="http://learning-gardens.co/">learning gardens</LinkStyle> and teaching kids creative coding at the <LinkStyle href="ryeartscenter.org">Rye Arts Center</LinkStyle>.
      </AboutType>

      <Box py={3}>
        <AboutType width={[1]} f={3} pt={3}>
          School of Art + Design at Purchase College
        </AboutType>
        <AboutType width={[1]} f={3}>
          B.S. in Visual Arts and Mathematics <br />
        </AboutType>
      </Box>

      <Box pb={3}>
        <AboutType width={[1]} f={3}>
          jason.mandel@purchase.edu <br />
        </AboutType>
      </Box>
      <Box>
        <AboutType width={[1]} f={3}>
          <LinkStyle href="http://s3.amazonaws.com/arena-attachments/1380589/5a621bb1d45b1ef89f7cb20f63d1177d.pdf?1509389154">
            Resumé
          </LinkStyle>
        </AboutType>
      </Box>
    </Box>
  </Flex>
)

export default About;

const LinkStyle = styled.a`
@media (max-width: 48em) {
  display: inline-block;
  word-wrap: break-word;
  font-size: 1em;
  text-decoration: underline;
  text-decoration-color: #0000ee;
}

  display:inline-block;
  word-wrap: break-word;
  text-decoration: underline;
  text-decoration-color: #0000ee;
  padding: 0px;
  margin: 0px;
  color: white;

  :hover {
    color: red;
  }
`;

const AboutType= styled(Text)`
@media (max-width: 48em) {
  display: float;
  font-size: 1.25em;
  line-height: 1.5em;
  text-decoration: none;
}

  background-color: black;
  font-family: 'GrotesqueMT';
  text-decoration: none;
  display: float;
  line-height: 1.5em;
  font-size: 2em;
  font-weight: 300;
  color: white;
  margin: 0;
`;
