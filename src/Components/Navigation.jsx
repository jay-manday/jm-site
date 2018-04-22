import React from 'react';
import { Flex, Box } from 'grid-styled';
import NavTitle from './NavTitle/NavTitle';
import SectionTitle from './SectionTitle/SectionTitle';

const data = [
  {id:1, name: 'about'},
  {id:2, name: 'work' },
  {id:3, name: 'writings'}
];

const Navigation = () => (
  <Flex wrap align='baseline' justify='space-around'>
    <Box w={[1/4]} pt={[3, 4]} pb={[3, 4]} pl={[2, 3]} >
      <NavTitle />
    </Box>
    {data.map((item, id) =>
      <Box key={id} w={[1/4]} p={[3,4]}  pl={[2, 3]} >
        <SectionTitle title={item.name}/>
      </Box>
    )}
  </Flex>
)

export default Navigation;
