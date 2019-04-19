import React from 'react';
import styled from 'styled-components';

export const LinkStyle = styled.a`
  text-decoration: underline;
  text-decoration-color: #0000ee;
`;

export const TitleStyle = styled.p`
  @media (max-width: 48em) {
    display:inline-block;
    line-height: 24px;
    font-size: 20px;
    text-decoration: underline;
    text-decoration-color: #0000ee;
  }

  :hover {
    color: red;
  }

  display:inline-block;
  text-decoration: underline;
  text-decoration-color: #0000ee;
  background-color: black;
  font-family: 'GrotesqueMT';
  font-size: 32px;
  font-weight: 300;
  color: white;
  margin: 0;
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

export const Spanned = styled.span`
  @media (max-width: 50em) {
    display: none;
  }

  display: inline-block;
  text-decoration: underline;
  text-decoration-color: #0000ee;
`;
