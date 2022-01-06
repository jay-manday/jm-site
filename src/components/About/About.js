import React from 'react';
import { Box } from 'rebass';
import { LinkStyle } from '../Navigation/Navigation.styled';
import { AboutType } from './About.styled';

import { Fade } from '../../../pages/index'

export default () => (
  <Box width={7/8, 3 / 4} p={[2, 3]} pl={[3, 4]} pt={[3, 4]}>
    <Fade delay="1s">
      <AboutType>
        Currently:
        <br />
        <br />
        Indexing the fabric of the built environment at <Fade delay="1s"><LinkStyle href="https://1build.com">1build</LinkStyle></Fade><br />
        <br />
        <br />
        Previously:
        <br />
        <br />
        Implementing industrial robotic assembly lines for construction at <Fade delay="1s"><LinkStyle href="https://toggle.is">Toggle</LinkStyle></Fade><br />
        Exploring direct to consumer CBD wellness routines with <Fade delay="1s"><LinkStyle href="https://kaleidoscopelabs.com/">Kaleidoscope Labs</LinkStyle></Fade><br />
        Software Engineer working on data driven urbanism with <Fade delay="1s"><LinkStyle href="numina.co">Numina</LinkStyle></Fade><br />
        Investigating geospatial blockchain applications with <Fade delay="1s"><LinkStyle href="foam.space">FOAM</LinkStyle></Fade><br />
        Research Assistant looking into climate resiliency at the <Fade delay="1s"><LinkStyle href="urbansystemslab.com">Urban Systems Lab</LinkStyle></Fade><br />
        Teaching kids creative coding at the <Fade delay="1s"><LinkStyle href="ryeartscenter.org">Rye Arts Center</LinkStyle></Fade><br />
        <br />
        School of Art + Design at Purchase College <br />
        B.S. in Visual Arts and Mathematics <br />
        <br />
        <Fade delay="1s">
          <LinkStyle href='../../../static/images/JM-Resume.pdf'>
          Resumé
          </LinkStyle>
        </Fade>
        <br />
        <br />
      </AboutType>
    </Fade>
  </Box>
);
