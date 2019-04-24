import React from 'react';
import { Box } from 'rebass';
import { LinkStyle } from 'components/Navigation/Navigation.styled';
import { AboutType } from 'components/About/About.styled';

export default () => (
  <Box w={3 / 4} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
    <AboutType>
      Currently:
      <br />
      <br />
      Building tools for precision agriculture with <LinkStyle href="teralytic.co">Teralytic</LinkStyle><br />
      <br />
      <br />
      Previously:
      <br />
      <br />
      Software Engineer working on data driven urbanism with <LinkStyle href="urbansystemslab.com">Numina</LinkStyle>.<br />
      Research Assistant looking into climate resiliency at the <LinkStyle href="urbansystemslab.com">Urban Systems Lab</LinkStyle>.<br />
      Teaching kids creative coding at the <LinkStyle href="ryeartscenter.org">Rye Arts Center</LinkStyle>.<br />
      <br />
      School of Art + Design at Purchase College <br />
      B.S. in Visual Arts and Mathematics <br />
      <br />
      <LinkStyle href="http://s3.amazonaws.com/arena-attachments/1380589/5a621bb1d45b1ef89f7cb20f63d1177d.pdf?1509389154">
        Resumé
      </LinkStyle>
    </AboutType>
  </Box>
);
