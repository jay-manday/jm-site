import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavTitle = (props) => (

    <Link to={'/'}>
      <StyledLink>
        <p>J<Spanned>ason</Spanned> Mandel</p>
      </StyledLink>
    </Link>

)

export default NavTitle;

const Spanned = styled.span`
  @media (min-width: 48em) {
    display: inline;
  }

  display: none;
`;

const StyledLink = styled.a`
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
    color: red;
  }

  font-family: 'GrotesqueMT-Italic';
  font-weight: normal
  font-size: 1em;
  color: white;
`;
