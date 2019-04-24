import React from 'react';
import { Box } from 'rebass';

import { LinkStyle } from 'components/Navigation/Navigation.styled';
import { AboutType } from 'components/About/About.styled';
import Social from 'components/Social';

export default () => (
  <Box w={3 / 4} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
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
      <LinkStyle href="https://zeit.co/now">
        Now
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
