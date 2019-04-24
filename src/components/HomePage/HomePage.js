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
import Section from 'components/section';
import Content from 'components/content';
import Colophon from 'components/colophon';
import About from 'components/about';


import about from '../../../content/about.mdx';

export default ({ posts }) => (
  <HomeWrapper>
    <Navigation />
    <Flex wrap='true'>
      <Section title='about'/>
      <About />
    </Flex>
    <Flex wrap='true'>
      <Section title='colophon'/>
      <Colophon />
    </Flex>
  </HomeWrapper>
);
