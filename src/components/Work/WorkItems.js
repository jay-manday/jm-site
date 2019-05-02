import React from 'react';
import { Box, Image } from 'rebass';

import {
  WorkLink,
  WorkTitle,
  WorkSubtitle,
} from './Work.styled';

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
      <WorkLink href={href}>
        <WorkTitle>
          {title}
        </WorkTitle>
      </WorkLink>
    </Box>
    <Box>
      <WorkSubtitle>
        {medium}
      </WorkSubtitle>
    </Box>
  </Box>
);

export default WorkItems;
