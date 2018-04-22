import React from 'react'
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import SectionTitle from './SectionTitle/SectionTitle';
import ContactIcons from './ContactIcons/ContactIcons';

const Colophon = () => (
  <Flex wrap>
    <Box w={[1/4]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]} mt={[0, 1]}>
      <SectionTitle title='colophon' />
    </Box>

    <Box w={3/4} p={[2, 3]} pl={[2, 3]} pt={[3, 4]} >
      <AboutType>Set with &nbsp;
        <LinkStyle href="https://www.bertholdtypes.com/font/akzidenz-grotesk/proplus/">
          Akzidenz Grotesk
        </LinkStyle>
      </AboutType>
      <AboutType>This site is built with &nbsp;
        <LinkStyle href="https://reactjs.org/">
          React
        </LinkStyle>
      </AboutType>
      <AboutType>Hosted with &nbsp;
        <LinkStyle href="https://zeit.co/now">
          now
        </LinkStyle>
        &nbsp; and
      </AboutType>
      <AboutType>
        seeded on Dat by &nbsp;
        <LinkStyle href="dat://jmandel-jaymanday.hashbase.io/">
        Hashbase
        </LinkStyle>
      </AboutType>
      <Flex wrap>
        <ContactIcons
          width={40} height={40}
          url='https://twitter.com/jaymanday'
          image='https://d2w9rnfcy7mm78.cloudfront.net/1222973/original_a59c38ae69092fab601f6e88ba9a6d7f.png'
        />

        <ContactIcons
          width={40} height={40}
          url='https://github.com/jay-manday'
          image='https://d2w9rnfcy7mm78.cloudfront.net/1221844/original_713585cf2c09a83a4a06d0757b1a2fc3.png'
        />

        <ContactIcons
          width={55} height={55}
          url='https://www.are.na/jason-mandel-1484367816/channels'
          image='https://d2w9rnfcy7mm78.cloudfront.net/1222957/original_e951a05eb73d4494cd78c92da928ec71.png'
        />
      </Flex>
    </Box>
  </Flex>
)

export default Colophon;

const AboutType= styled.h2`
@media (max-width: 48em) {
  font-size: 1.125em;
  line-height: 1.5em;
  text-decoration: none;
}

  background-color: black;
  font-family: 'GrotesqueMT';
  text-decoration: none;
  line-height: 1.5em;
  font-size: 2em;
  font-weight: 300;
  color: white;
  margin: 0;
`;

const LinkStyle = styled.a`
@media (max-width: 48em) {
  text-decoration: underline;
  text-decoration-color: #0000ee;
}
  :link {
    color: #ffffff;
  }
  :active {
    color: #ffffff;
  }

  :visited {
    color: #ffffff;
  }
  :hover {
    color: red;
  }

  text-decoration: underline;
  text-decoration-color: #0000ee;
`;
