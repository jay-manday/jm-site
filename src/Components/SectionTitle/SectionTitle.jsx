import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const SectionTitle = (props) => (
  <Route path={`/${props.title}`}>
    <TitleStyle>{props.title}</TitleStyle>
  </Route>
)

export default SectionTitle;

const TitleStyle = styled.p`
  @media (min-width: 20em) {
    font-size: 1em;
    text-decoration: none;
  }

  @media (min-width: 37.5em) {
    font-size: 1.5em;
    text-decoration: none;
  }

  :hover {
    color: green;
  }

  background-color: black;
  font-family: 'GrotesqueMT';
  font-size: 1em;
  font-weight: 300;
  color: white;
  margin: 0;
`;
