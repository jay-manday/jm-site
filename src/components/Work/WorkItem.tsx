import React from 'react';
import { Box, Image } from 'rebass';
import dynamic from 'next/dynamic';

import {
  WorkLink,
  WorkSubtitle,
} from './styles';

import { windowResized } from './ClockSketch';
import { LinkStyle } from '../Navigation/styles';

type WorkItemProps = {
  href: string,
  img: string,
  title: string,
  medium: string,
  processing: boolean,
  setup: any,
  draw: any,
}

const Processing = dynamic(import('react-p5'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const WorkItems = ({
  href,
  img,
  title,
  medium,
  processing,
  setup,
  draw,
}: WorkItemProps) => (
  <Box className="sketch-container">
    <WorkLink href={href}>
      {processing ? (
        <Processing setup={setup} draw={draw} />
      ) : (
        <Image src={img} />
      )}
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
