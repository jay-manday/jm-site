import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SectionTitle = (props) => (
  <Link to={`/${props.title}`}>
    <TitleStyle>{props.title}</TitleStyle>
  </Link>
)

export default SectionTitle;

const TitleStyle = styled.p`
  @media (min-width: 20em) {
    font-size: 1.4em;
    line-height: 1.5em;
    text-decoration: none;
  }

  @media (min-width: 37.5em) {
    font-size: 1.5em;
    line-height: 1.5em;
    text-decoration: none;
  }

  :hover {
    color: green;
  }

  background-color: black;
  font-family: 'GrotesqueMT';
  ine-height: 1.25em;
  font-size: 1em;
  font-weight: 300;
  color: white;
  margin: 0;
`;
