import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavTitle = () => (

  <LinkStyle to={'/'}>
    J<Spanned>ason</Spanned> Mandel
  </LinkStyle>

)

export default NavTitle;

const LinkStyle = styled(Link) `
  @media (min-width: 40em) {
    font-size: 2em;
    line-height: 1.5 em;
    display:inline-block;
    text-decoration: underline;
    text-decoration-color: #0000ee;
    padding-bottom: 0px;
  }
    :hover {
      color: red;
    }

    display:inline-block;
    text-decoration: underline;
    text-decoration-color: #0000ee;
    font-family: 'GrotesqueMT-Italic';
    font-weight: normal;
    font-size: 1.075em;
    color: white;
    padding-bottom: 5px;
  `;

const Spanned = styled.span`
  @media (min-width: 40em) {
    display: inline-block;
    text-decoration: underline;
    text-decoration-color: #0000ee;
  }

  display: none;
`;
