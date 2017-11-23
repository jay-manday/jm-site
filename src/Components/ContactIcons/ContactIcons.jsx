import React from 'react';
import { Box } from 'grid-styled';
import { Image } from 'rebass';

const ContactIcons = (props) => (
  <Box width={props.width} height={props.height} pr={2} pt={1} pb={1}  ml={props.margin}>
    <a href={props.url} >
      <Image src={props.image} />
    </a>
  </Box>
)

export default ContactIcons;
