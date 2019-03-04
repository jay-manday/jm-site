import React from 'react'
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import SectionTitle from './SectionTitle/SectionTitle';
import ContactIcons from './ContactIcons/ContactIcons';

const Colophon = () => (
  <Flex wrap>
    <Box w={[1 / 4]} p={[2, 3]} pl={[2, 4]} pt={[3, 4]} mt={[0, 1]}>
      <SectionTitle title='colophon' />
    </Box>

    <Box w={3/4} p={[2, 3]} pl={[2, 3]} pt={[3, 4]} >
      <AboutType>set with &nbsp;
        <LinkStyle href="https://www.bertholdtypes.com/font/akzidenz-grotesk/proplus/">
          akzidenz grotesk
        </LinkStyle>
      </AboutType>
      <AboutType>this site is built with &nbsp;
        <LinkStyle href="https://reactjs.org/">
          react
        </LinkStyle>
      </AboutType>
      <AboutType>hosted with &nbsp;
        <LinkStyle href="https://zeit.co/now">
          now
        </LinkStyle>
        &nbsp; and
      </AboutType>
      <AboutType>
        seeded on &nbsp;
        <LinkStyle href="dat://jmandel-jaymanday.hashbase.io/">
        dat
        </LinkStyle>
      </AboutType>
      <Flex wrap>
        <ContactIcons
          width={45} height={45}
          url='https://www.linkedin.com/in/jason-mandel-960a39103/'
          image='https://d2w9rnfcy7mm78.cloudfront.net/2138316/original_3a3e994d9cc235aff7e8f7ecf64a0101.png'
        />
        <ContactIcons
          width={45} height={45}
          url='https://twitter.com/jaymanday'
          image='https://d2w9rnfcy7mm78.cloudfront.net/1222973/original_a59c38ae69092fab601f6e88ba9a6d7f.png'
        />

        <ContactIcons
          width={45} height={45}
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
  font-size: 18px;
  line-height: 20px;
  text-decoration: none;
}

  background-color: black;
  font-family: 'GrotesqueMT';
  text-decoration: none;
  line-height: 40px;
  font-size: 32px;
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
