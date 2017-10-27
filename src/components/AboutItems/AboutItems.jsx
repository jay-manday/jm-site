import React from 'react'
import { Text } from 'rebass';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import ContactIcons from '../ContactIcons/ContactIcons';
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

      <Box py={3}>
        <ContactItems
          email='jason.mandel@purchase.edu'
          phone='(1) 914 417 5472'
        />
      <Flex wrap>

        <ContactIcons
          width={48}
          height={48}
          url='https://twitter.com/jaymanday'
          image='https://d2w9rnfcy7mm78.cloudfront.net/1222973/original_a59c38ae69092fab601f6e88ba9a6d7f.png'
        />

        <ContactIcons
          width={48}
          height={48}
          url='https://github.com/jay-manday'
          image='https://d2w9rnfcy7mm78.cloudfront.net/1221844/original_713585cf2c09a83a4a06d0757b1a2fc3.png'
        />

        <ContactIcons
          url='https://www.are.na/jason-mandel-1484367816/channels'
          image='https://d2w9rnfcy7mm78.cloudfront.net/1222957/original_e951a05eb73d4494cd78c92da928ec71.png'
          />
      </Flex>

      </Box>
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
