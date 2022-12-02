import React from 'react';
import { Box } from 'rebass';
import { LinkStyle } from '../Navigation/styles';
import { AboutType } from './styles';

import { Fade } from '../Base/styles';

const About = () => (
  <Box width={[7/8, 1]} p={[2, 3]} pl={[3, 4]} pt={[3, 4]} mt={[2, 0]}>
    <Fade>
      <AboutType>
        Currently:
        <br />
        <br />
        Building the next generation of payment infrastructure at <Fade><LinkStyle href="https://block.xyz">Block</LinkStyle></Fade>&nbsp;/&nbsp;<Fade><LinkStyle href="https://cash.app">Cash App</LinkStyle></Fade><br />
        <br />
        <br />
        Previously:
        <br />
        <br />
        Indexing the fabric of the built environment at <Fade><LinkStyle href="https://1build.com">1build</LinkStyle></Fade><br />
        Implementing industrial robotic assembly lines for construction at <Fade ><LinkStyle href="https://toggle.is">Toggle</LinkStyle></Fade><br />
        Paving the way for data driven urbanism with <Fade><LinkStyle href="https://numina.co">Numina</LinkStyle></Fade><br />
        Investigating geospatial blockchain applications with <Fade ><LinkStyle href="https://foam.space">FOAM</LinkStyle></Fade><br />
        Researching urban climate resiliency at the <Fade><LinkStyle href="https://urbansystemslab.com">Urban Systems Lab</LinkStyle></Fade><br />
        Teaching kids creative coding at the <Fade><LinkStyle href="https://ryeartscenter.org">Rye Arts Center</LinkStyle></Fade><br />
        <br />
        School of Art + Design at Purchase College <br />
        B.S. in Visual Arts and Mathematics <br />
        <br />
        <Fade >
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

export default About;