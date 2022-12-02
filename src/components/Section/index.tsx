import React from 'react';
import { Box } from 'rebass';
import { Type } from './styles';

const Section = ({ title }: { title: string }) => (
  <Box width={[2/8, 1/8]} p={[3, 4]}>
    <Type>{title}</Type>
  </Box>
);

export default Section;