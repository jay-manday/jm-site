/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import {
  MainWrapper,
  HomeWrapper,
} from './HomePage.styled';
import User from 'components/User';
import PostList from 'components/PostList';

import Navigation from '../Navigation';

export default ({ posts }) => (
  <HomeWrapper>
    <Navigation />
    <MainWrapper>
      <PostList posts={posts} />
    </MainWrapper>
  </HomeWrapper>
);