import React from 'react'
import styled, { keyframes } from 'styled-components';

import { Flex } from 'rebass';
/*
import {
  // Fade,
  // MainWrapper,
  HomeWrapper,
} from './HomePage.styled';
*/
import Navigation from '../src/components/Navigation';
import Section from '../src/components/Section';
// import Content from 'components/Content';
// import Colophon from 'components/Colophon';
import About from '../src/components/About';
// import Work from 'components/Work'

const data = [
  { id: 1, name: 'about' },
  { id: 2, name: 'work' },
  { id: 3, name: 'colophon' },
];

export default () => (
  <HomeWrapper>
    <Fade delay="1s">
      <Navigation data={data} />
    </Fade>
    <Fade delay="1s">
      <Flex wrap='true'>
        <Section title='about'/>
        <About />
      </Flex>
    </Fade>
  </HomeWrapper>
);



export const SidebarWrapper = styled.section`
  display: flex;
`;

export const MainWrapper = styled.section`
  display: flex;
  margin-left: 50px;
`;


export const HomeWrapper = styled.div`
  max-width: 100%;
`;

export const FadeAnimation = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1; }
`;

export const Fade = styled.div`
  animation: ${FadeAnimation} ${props => props.delay} linear normal;
`;
