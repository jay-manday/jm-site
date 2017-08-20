import React from 'react'
import NavTitle from './NavTitle/NavTitle';
import SectionTitle from './SectionTitle/SectionTitle';
import { Flex, Box } from 'grid-styled';

const Navigation = (props) => (
  <Flex wrap align='baseline' justify='space-around'>
    <Box w={[1/4]} p={[2, 3]} pl={[2, 3]}>
      <NavTitle />
    </Box>

    {props.items.map((title) =>
      <Box w={[1/4]} p={[2,3]} pl={[2, 3]}>
        <SectionTitle title={title} />
      </Box>
    )}

  </Flex>
)

export default Navigation
