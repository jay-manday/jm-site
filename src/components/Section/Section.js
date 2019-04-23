import React from 'react';
import { Box } from 'rebass';
import {
  LinkStyle,
  TitleStyle,
} from './Section.styled';

const Section = ({ title }) => (
  <Box width={[1 / 4]} pt={[3, 4]} pb={[3, 4]} pl={[3, 4]}>
    <LinkStyle href={`/${title}`}>
      <TitleStyle>{title}</TitleStyle>
    </LinkStyle>
  </Box>
);

export default Section;
