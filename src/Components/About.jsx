import React from 'react'
import { Text } from 'rebass';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import SectionTitle from './SectionTitle/SectionTitle';

const About = () => (
  <Flex wrap>
    <Box w={[1/4]} p={[3,4]} pl={[2, 3]} >
      <SectionTitle title='about' />
    </Box>

    <Box w={[3/4, 2/3 ]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
      <AboutType width={[1]} f={3}>
        I am a designer & engineer, currently a research assistant working on climate visualizations for the
        <LinkStyle href="https://urbansystemslab.com">Urban Systems Lab</LinkStyle> at the
        <LinkStyle href="https://newschool.edu/">New School</LinkStyle>. I enjoy gardening with
        <LinkStyle href="http://learning-gardens.co/">learning gardens</LinkStyle>
        and teaching kids creative coding at the <LinkStyle href="ryeartscenter.org">Rye Arts Center</LinkStyle>.
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
          <LinkStyle href="https://d2w9rnfcy7mm78.cloudfront.net/1835707/large_101396e0eaa2e09220180303-4-13yb594.jpg">
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
