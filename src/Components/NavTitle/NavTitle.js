import React from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

const NavTitle = (props) => (
  <ErrorBoundary>
    <Link className="linkz" to={'/'}>
      <StyledLink>
        <p className="linkz">J<Spanned>ason</Spanned> Mandel</p>
      </StyledLink>
    </Link>
  </ErrorBoundary>
)

export default NavTitle;

const Spanned = styled.span`
  @media (min-width: 40em) {
    display: inline;
  }

  display: none;
`;

const StyledLink = styled.a`
@media (min-width: 40em) {
  font-size: 2em;
  line-height: 1.5 em;
  text-decoration: underline;
  text-decoriation-color: #0000ff;
}
  :hover {
    color: red;
  }

  a {
    text-decoration: underline;
    text-decoriation-color: #0000ff;
  }

  :visited {
    text-decoration: underline;
    text-decoriation-color: #0000ff;
  }

  text-decoriation-color: #0000ff;
  font-family: 'GrotesqueMT-Italic';
  font-weight: normal;
  font-size: .9em;
  color: white;
`;
