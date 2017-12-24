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
  text-decoration: none;
`;

const TitleStyle = styled.p`
@media (max-width: 48em) {
  display:inline-block;
  font-size: 1.125em;
  line-height: 1.5em;
  text-decoration: none;
  border-bottom: 3px solid #0000ee;

}
  :hover {
    color: red;
  }
  display:inline-block;
  border-bottom: 5px solid #0000ee;
  background-color: black;
  font-family: 'GrotesqueMT';
  text-decoration: none;
  line-height: 1em;
  font-size: 1.875em;
  font-weight: 300;
  color: white;
  margin: 0;
`;
