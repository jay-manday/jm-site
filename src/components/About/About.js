import React from 'react';
import { Box } from 'rebass';
import { LinkStyle } from '../Navigation/Navigation.styled';
import { AboutType } from './About.styled';

import { Fade } from '../../../pages/index'

export default () => (
  <Box width={7/8, 1} p={[2, 3]} pl={[3, 4]} pt={[1, 4]}>
    <Fade delay="1s">
      <AboutType>
        Currently:
        <br />
        <br />
        Building the next generation of payment infrastructure at <Fade delay="1s"><LinkStyle href="https://block.xyz">Block</LinkStyle></Fade><br />
        <br />
        <br />
        Previously:
        <br />
        <br />
        Indexing the fabric of the built environment at <Fade delay="1s"><LinkStyle href="https://1build.com">1build</LinkStyle></Fade><br />
        Implementing industrial robotic assembly lines for construction at <Fade delay="1s"><LinkStyle href="https://toggle.is">Toggle</LinkStyle></Fade><br />
        Paving the way for data driven urbanism with <Fade delay="1s"><LinkStyle href="https://numina.co">Numina</LinkStyle></Fade><br />
        Investigating geospatial blockchain applications with <Fade delay="1s"><LinkStyle href="https://foam.space">FOAM</LinkStyle></Fade><br />
        Researching urban climate resiliency at the <Fade delay="1s"><LinkStyle href="https://urbansystemslab.com">Urban Systems Lab</LinkStyle></Fade><br />
        Teaching kids creative coding at the <Fade delay="1s"><LinkStyle href="https://ryeartscenter.org">Rye Arts Center</LinkStyle></Fade><br />
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
