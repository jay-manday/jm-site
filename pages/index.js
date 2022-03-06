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
import Colophon from '../src/components/Colophon';
import About from '../src/components/About';
import Work from '../src/components/Work'

import { useWindowDimensions } from '../src/utils';

const data = [
  { id: 1, name: 'about' },
  { id: 2, name: 'work' },
  { id: 3, name: 'colophon' },
];

const work = true

export default () => {
  const { width, height } = useWindowDimensions();
  return  (
    <HomeWrapper>
      <Fade delay="1s">
        <Navigation data={data} />
      </Fade>
      <Fade delay="1s">
        {width > 440 || height > 980 ? (
          <Flex wrap='true'>
            <Section title='about'/>
            <About />
          </Flex>
        ) : (
          <>
            <Section title='about'/>
            <About />
          </>
        )}
      </Fade>
      {work ? (
        <Flex wrap='true'>
          <Section title='work'/>
          <Work />
        </Flex> 
      ) : <></>}
      <Fade delay="1s">
        <Flex wrap='true'>
          <Section title='colophon'/>
          <Colophon />
        </Flex>
      </Fade>
    </HomeWrapper>
  );
}


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
  display: inline;
  animation: ${FadeAnimation} ${props => props.delay} linear normal;
`;
