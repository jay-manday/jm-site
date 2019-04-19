/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import {
  SidebarWrapper,
  MainWrapper,
  HomeWrapper,
} from './HomePage.styled'
import User from 'components/User'
import PostList from 'components/PostList'

import { Link } from 'next/link';

export default ({ posts }) => (
  <HomeWrapper>
    <LinkStyleSpecial href='/'>
      J<Spanned>ason</Spanned> Mandel
    </LinkStyleSpecial>
    {/*
    <SidebarWrapper>
      <User />
    </SidebarWrapper>
    */}
    <MainWrapper>
      <PostList posts={posts} />
    </MainWrapper>
  </HomeWrapper>
)


export const Spanned = styled.span`
  @media (max-width: 50em) {
    display: none;
  }

  display: inline-block;
  text-decoration: underline;
  text-decoration-color: #0000ee;
`;

export const LinkStyleSpecial = styled.a`
  @media (max-width: 48em) {
    font-size: 20px;
    display:inline-block;
    text-decoration: underline;
    text-decoration-color: #0000ee;
    padding-bottom: 0px;
  }

  :hover {
    color: red;
  }

  display:inline-block;
  text-decoration: underline;
  text-decoration-color: #0000ee;
  font-family: 'GrotesqueMT-Italic';
  font-weight: normal;
  font-size: 32px;
  color: white;
  padding-bottom: 5px;
`;

