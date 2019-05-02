import React from 'react';
import { Box } from 'rebass';
import { Link } from './Section.styled';

const Section = ({ title }) => (
  <Box width={[1 / 4]} pt={[3, 4]} pb={[3, 4]} pl={[3, 4]}>
    <Link href={`/${title}`}>
      {title}
    </Link>
  </Box>
);

export default Section;
