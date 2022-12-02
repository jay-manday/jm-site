import React from 'react';
import { Box } from 'rebass';

import { LinkStyle } from '../Navigation/styles';
import { AboutType } from '../About/styles';
import Social from '../Social';

const Colophon = () => (
  <Box width={[1, 3 / 4]} p={[2, 3]} pl={[1, 2]} pt={[3, 4]}>
    <AboutType>
      set with &nbsp;
      <LinkStyle href="https://rsms.me/inter/">
        Inter
      </LinkStyle>
      <br />
      built with &nbsp;
      <LinkStyle href="https://nextjs.org/">
        Next
      </LinkStyle>
      <br />
      hosted with &nbsp;
      <LinkStyle href="https://vercel.com">
        Vercel
      </LinkStyle>
      <br />
      part of a &nbsp;
      <LinkStyle href="https://webring.xxiivv.com/">
        Webring
      </LinkStyle>
    </AboutType>
    <br />
    <br />
    <Social />
  </Box>
);

export default Colophon;