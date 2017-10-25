import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavTitle = (props) => (

    <LinkStyle to={'/'}>
      <StyledLink>
        J<Spanned>ason</Spanned> Mandel
      </StyledLink>
    </LinkStyle>

)

export default NavTitle;

const LinkStyle = styled(Link) `
  display: inline-block;
`;
const Spanned = styled.span`
  @media (min-width: 40em) {
    display: inline-block;
  }

  display: none;
`;

const StyledLink = styled.a`
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
  border-bottom: 3px solid #0000ee;
  font-family: 'GrotesqueMT-Italic';
  font-weight: normal;
  font-size: .9em;
  color: white;
  padding-bottom: 5px;
`;
