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
@media (max-width: 48em) {
  font-size: 1em;
  line-height: 1.5em;
  text-decoration: none;
}

  :hover {
    color: red;
  }

  background-color: black;
  font-family: 'GrotesqueMT';
  text-decoration: none;
  line-height: 1em;
  font-size: 1.875em;
  font-weight: 300;
  color: white;
  margin: 0;
`;
