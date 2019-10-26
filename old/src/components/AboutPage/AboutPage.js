/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import {
  Fade,
  MainWrapper,
  HomeWrapper,
} from '../HomePage/HomePage.styled';

import User from 'components/User';
import PostList from 'components/PostList';
import Navigation from 'components/Navigation';
import Section from 'components/Section';
import Content from 'components/Content';
import Colophon from 'components/Colophon';
import Work from 'components/Work';

import About from '../../../content/about.mdx';

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
        <Box width={3 / 4} p={[2, 3]} pl={[3, 4]}>
          <Content Doc={About} />
        </Box>
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
