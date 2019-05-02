import React from 'react';
import { Flex, Box } from 'rebass';
import NavigationTitle from './NavigationTitle';
import Section from '../Section';

const Navigation = ({ data }) => (
  <Flex wrap="true" width={1} align="baseline" justify="space-around">
    <Box width={[1 / 4]} pt={[3, 4]} pb={[3, 4]} pl={[3, 4]}>
      <NavigationTitle />
    </Box>
    {data.map((element, index) => (
      <Box key={index} width={[1 / 4]}>
        <Section key={index} value={element.name} title={element.name} />
      </Box>
    ))}
  </Flex>
);

export default Navigation;
