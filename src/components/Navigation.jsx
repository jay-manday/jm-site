import React from 'react'
import NavTitle from './NavTitle/NavTitle';
import NavItems from './NavItems/NavItems';
import { Flex, Box } from 'grid-styled';

const Navigation = (props) => (
  <div>

    <Flex wrap align='baseline' justify='space-around'>
      <Box w={[1/4]} p={[2, 3]} pl={[2, 3]}>
        <NavTitle />
      </Box>

      {props.items.map((item) =>
        <Box w={[1/4]} p={[2,3]} pl={[2, 3]}>
          <NavItems item={item} />
        </Box>
      )}

    </Flex>
  </div>
)

export default Navigation
