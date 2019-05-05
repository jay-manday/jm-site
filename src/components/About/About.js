import React from 'react';
import { Box } from 'rebass';
import { LinkStyle } from 'components/Navigation/Navigation.styled';
import { AboutType } from 'components/About/About.styled';

export default () => (
  <Box width={3 / 4} p={[2, 3]} pl={[3, 4]} pt={[3, 4]}>
    <AboutType>
      Currently:
      <br />
      <br />
      Software Engineer working on data driven urbanism with <LinkStyle href="numina.co">Numina</LinkStyle>.<br />
      <br />
      Previously:
      <br />
      <br />
      Investigating geospatial blockchain applications with <LinkStyle href="foam.space">FOAM</LinkStyle>.<br />
      Research Assistant looking into climate resiliency at the <LinkStyle href="urbansystemslab.com">Urban Systems Lab</LinkStyle>.<br />
      Teaching kids creative coding at the <LinkStyle href="ryeartscenter.org">Rye Arts Center</LinkStyle>.<br />
      <br />
      School of Art + Design at Purchase College <br />
      B.S. in Visual Arts and Mathematics <br />
      <br />
      <LinkStyle href='../../../static/images/JM-Resume.pdf'>
        Resumé
      </LinkStyle>
      <br />
      <br />
    </AboutType>
  </Box>
);
