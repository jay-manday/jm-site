import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SectionTitle = (props) => (
  <LinkStyle to={`/${props.title}`}>
    <TitleStyle>{props.title}</TitleStyle>
  </LinkStyle>
)

export default SectionTitle;

const LinkStyle = styled(Link)`
  text-decoration: underline;
  text-decoration-color: #0000ee;
`;

const TitleStyle = styled.p`
@media (max-width: 48em) {
  display:inline-block;
  font-size: 1.5em;
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
  font-size: 3em;
  font-weight: 300;
  color: white;
  margin: 0;
`;
