import React from 'react'
import { Box } from 'grid-styled';
import { Text } from 'rebass';
import styled from 'styled-components';

const ContactItems = (props) => (

    <Box w={[3/4, 2/3 ]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]} >
      <Text width={[1]} f={3} mb={1}>
        <AboutType>
          {props.email}
        </AboutType>
      </Text>
      <Text width={[1]} f={3} mb={1}>
        <AboutType>
          {props.phone}
        </AboutType>
      </Text>
    </Box>
)

export default ContactItems;

const AboutType= styled.h2`
@media (min-width: 20em) {
  font-size: 1em;
  line-height: 1em;
  text-decoration: none;
}

@media (min-width: 37.5em) {
  font-size: 1.25em;
  line-height: 1.25em;
  text-decoration: none;
}
  font-family: 'GrotesqueMT';
  font-size: 1.25em;
  font-weight: 300;
  color: white;
  line-height: 1.25em;
  margin: 0;
`;
