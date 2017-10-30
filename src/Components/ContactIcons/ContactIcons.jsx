import React from 'react';
import { Box } from 'grid-styled';
import { Image } from 'rebass';

const ContactIcons = (props) => (
  <Box w={props.width} h={props.height} p={1}  ml={props.margin}>
    <a href={props.url} >
      <Image src={props.image} />
    </a>
  </Box>
)

export default ContactIcons;
