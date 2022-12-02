import React from 'react';
import { Box, Image } from 'rebass';

type IconProps = {
    width: number,
    height: number,
    url: string,
    image: string
}

const Icon = ({
  width,
  height,
  url,
  image,
}: IconProps) => (
  <Box width={width} height={height} pr={3} pt={1} pb={1}>
    <a href={url}>
      <Image src={image} alt={url} />
    </a>
  </Box>
);

export default Icon;