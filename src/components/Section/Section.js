import React from 'react';
import { Box } from 'rebass';
import { Type } from './Section.styled';

const Section = ({ title }) => (
  <Box width={[1 / 4]} pb={[3, 4]} pl={[3, 4]}>
    <Type>
      {title}
    </Type>
  </Box>
);

export default Section;
