import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const NavItems = (props) => (
  <Route path={`/${props.item}`}>
    <StyledLink>{props.item}</StyledLink>
  </Route>
)

export default NavItems;

const StyledLink = styled.a`
  @media (min-width: 20em) {
    font-size: .9em;
    text-decoration: none;
  }

  @media (min-width: 37.5em) {
    font-size: 1.375em;
    text-decoration: none;
  }

  :hover {
    color: red;
  }

  font-family: 'GrotesqueMT';
  font-weight: normal
  font-size: 1em;
  color: white;

`;
