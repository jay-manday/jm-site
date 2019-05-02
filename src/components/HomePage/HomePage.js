/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import {
  MainWrapper,
  HomeWrapper,
} from './HomePage.styled';

import User from 'components/User';
import PostList from 'components/PostList';
import Navigation from 'components/Navigation';
import Section from 'components/Section';
import Content from 'components/content';
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
    <Navigation data={data} />
    <Flex wrap='true'>
      <Section title='about'/>
      <About />
    </Flex>
    <Flex wrap='true'>
      <Section title='work'/>
      <Work />
    </Flex>
    <Flex wrap='true'>
      <Section title='colophon'/>
      <Colophon />
    </Flex>
  </HomeWrapper>
);
