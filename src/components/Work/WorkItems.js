import React from 'react';
import { Box, Image } from 'rebass';

import {
  WorkLink,
  WorkSubtitle,
} from './Work.styled';

import { LinkStyle } from '../Navigation/Navigation.styled';

const WorkItems = ({
  href,
  img,
  title,
  medium,
}) => (
  <Box>
    <WorkLink href={href}>
      <Image src={img} />
    </WorkLink>
    <Box pt={3}>
      <LinkStyle href={href}>
        {title}
      </LinkStyle>
    </Box>
    <Box>
      <WorkSubtitle>
        {medium}
      </WorkSubtitle>
    </Box>
  </Box>
);

export default WorkItems;
