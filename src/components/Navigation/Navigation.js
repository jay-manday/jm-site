import React from 'react';
import { Flex, Box } from 'rebass';
import NavigationTitle from './NavigationTitle';
import NavigationSection from './NavigationSection';

const data = [
  { id: 1, name: 'about' },
  { id: 2, name: 'work' },
  { id: 3, name: 'colophon' },
];

const Navigation = () => (
  <Flex wrap="true" width={1} align='baseline' justify='space-around'>
    <Box width={[1/4]} pt={[3, 4]} pb={[3, 4]} pl={[3, 4]}>
      <NavigationTitle />
    </Box>
    {data.map((item, id) =>
      <Box key={id} width={[1/4]} p={[3,4]}  pl={[3, 3]} >
        <NavigationSection title={item.name}/>
      </Box>
    )}
  </Flex>
);

export default Navigation;
