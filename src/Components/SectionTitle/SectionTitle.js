import React from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

const SectionTitle = (props) => (
  <ErrorBoundary>
    <Link className='linkz' to={`/`}>
      <TitleStyle>{props.title}</TitleStyle>
    </Link>
  </ErrorBoundary>
)

export default SectionTitle;

const TitleStyle = styled.p`
@media (max-width: 48em) {
  font-size: 1em;
  line-height: 1.5em;
  text-decoration: none;
}
  a {
    text-decoration: underline;
    text-decoriation-color: 0000ee;
  }
  a:visited {
    text-decoration: underline;
    text-decoriation-color: 0000ee;
  }

  :visited {
    text-decoration: underline;
    text-decoriation-color: 0000ee;
  }

  :hover {
    color: red;
  }

  background-color: black;
  font-family: 'GrotesqueMT';
  text-decoration: none;
  line-height: 2em;
  font-size: 1.875em;
  font-weight: 300;
  color: white;
  margin: 0;
`;
