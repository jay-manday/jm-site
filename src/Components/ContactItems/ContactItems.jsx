import React from 'react'
import { Box } from 'grid-styled';
import { Text } from 'rebass';
import styled from 'styled-components';

const ContactItems = (props) => (

    <Box >
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
