import React from 'react';
import { Flex, Box } from 'rebass';
import NavigationTitle from './NavigationTitle';

import { Fade } from '../Base/styles';

const Navigation = () => (
  <Flex wrap="true" width={1}>
    <Box width={[1 / 4, 1]} pt={[3, 4]} pb={[3, 4]} pl={[3, 4]}>
      <Fade>
      <NavigationTitle />
      </Fade>
    </Box>
  </Flex>
);

export default Navigation;
