/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import {
  Fade,
  MainWrapper,
  HomeWrapper,
} from './HomePage.styled';

import Navigation from 'components/Navigation';
import Section from 'components/Section';
import Content from 'components/Content';
import Colophon from 'components/Colophon';
import About from 'components/About';
import Work from 'components/Work'

const data = [
  { id: 1, name: 'about' },
  { id: 2, name: 'work' },
  { id: 3, name: 'colophon' },
];

export default ({ posts }) => (
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
    <Fade delay="1s">
      <Flex wrap='true'>
        <Section title='work'/>
        <Work />
      </Flex>
    </Fade>
    <Fade delay="1s">
      <Flex wrap='true'>
        <Section title='colophon'/>
        <Colophon />
      </Flex>
    </Fade>
  </HomeWrapper>
);
