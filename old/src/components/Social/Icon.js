import React from 'react';
import { Box, Image } from 'rebass';

export default ({
  width,
  height,
  margin,
  url,
  image,
}) => (
  <Box width={width} height={height} pr={3} pt={1} pb={1} ml={margin}>
    <a href={url}>
      <Image src={image} />
    </a>
  </Box>
);
