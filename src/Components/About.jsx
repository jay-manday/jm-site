import React from 'react'
import { Text } from 'rebass';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import SectionTitle from './SectionTitle/SectionTitle';

const About = () => (
  <Flex wrap>
    <Box w={[1/4]} p={[3,4]} pl={[2, 4]} pt={[3, 4]}>
      <SectionTitle title='about' />
    </Box>

    <Box w={[3/4]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
      <AboutType width={[1]} f={3}>
        I am a designer & engineer, currently:
        <br />
        <br />
        Investigating geospatial blockchain
        applications with <LinkStyle href="https://foam.space/"> FOAM </LinkStyle>.
        <br />
        Research Assistant at the &nbsp;
        <LinkStyle href="https://urbansystemslab.com">Urban&nbsp;Systems&nbsp;Lab</LinkStyle> at&nbsp;
        <LinkStyle href="https://newschool.edu/">Parsons</LinkStyle>.
      </AboutType>

      <Box py={[2, 3]}>
        <AboutType width={[1]} f={3} pt={3}>
          School of Art + Design at Purchase
        </AboutType>
        <AboutType width={[1]} f={3}>
          B.S. in Visual Arts and Mathematics
          <br />
        </AboutType>
      </Box>

      <Box pb={3}>
        <AboutType width={[1]} f={3}>
          jmandel1027@gmail.com <br />
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
  font-size: 16px;
  overflow-wrap: break-word;
  text-decoration: underline;
  text-decoration-color: #0000ee;
}

  display:inline-block;
  word-wrap: break-word;
  overflow-wrap: break-word;
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
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
}

  background-color: black;
  font-family: 'GrotesqueMT';
  text-decoration: none;
  display: float;
  line-height: 40px;
  font-size: 32px;
  font-weight: 300;
  color: white;
  margin: 0;
`;
