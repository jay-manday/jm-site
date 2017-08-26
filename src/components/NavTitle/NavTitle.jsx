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
  @media (min-width: 40em) {
    display: inline;
  }

  display: none;
`;

const StyledLink = styled.a`
@media (min-width: 40em) {
  font-size: 2em;
  line-height: 1.5 em;
  text-decoration: none;
}
  :hover {
    color: red;
  }

  font-family: 'GrotesqueMT-Italic';
  font-weight: normal;
  font-size: .9em;
  color: white;
`;
