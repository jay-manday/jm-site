import React from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

const NavTitle = (props) => (
<<<<<<< HEAD:src/components/NavTitle/NavTitle.jsx

  <LinkStyle to={'/'}>
    J<Spanned>ason</Spanned> Mandel
  </LinkStyle>

=======
  <ErrorBoundary>
    <Link className="linkz" to={'/'}>
      <StyledLink>
        <p className="linkz">J<Spanned>ason</Spanned> Mandel</p>
      </StyledLink>
    </Link>
  </ErrorBoundary>
>>>>>>> master:src/Components/NavTitle/NavTitle.js
)

export default NavTitle;

const LinkStyle = styled(Link) `
  @media (min-width: 40em) {
    font-size: 2em;
    line-height: 1.5 em;
    text-decoration: none;
    display:inline-block;
    border-bottom: 5px solid #0000ee;
    padding-bottom: 0px;
  }
    :hover {
      color: red;
    }

    display:inline-block;
    text-decoration: none;
    border-bottom: 3px solid #0000ee;
    font-family: 'GrotesqueMT-Italic';
    font-weight: normal;
    font-size: 1.075em;
    color: white;
    padding-bottom: 5px;
  `;

<<<<<<< HEAD:src/components/NavTitle/NavTitle.jsx
const Spanned = styled.span`
  @media (min-width: 40em) {
    display: inline-block;
  }

  display: none;
=======
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
>>>>>>> master:src/Components/NavTitle/NavTitle.js
`;
