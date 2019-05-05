import React from 'react';
import dynamic from 'next/dynamic';
import { Box } from 'rebass';
import {
  WorkLink,
  WorkSubtitle,
} from '../Work/Work.styled';

import { LinkStyle } from '../Navigation/Navigation.styled';


const P5Wrapper = dynamic(import('react-p5-wrapper'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default ({ href, medium, title, sketch }) => (
  <Box className="sketch-container">
    <P5Wrapper sketch={sketch}/>
    <Box pt={1}>
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
