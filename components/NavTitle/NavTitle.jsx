import React from 'react';
import { Link } from 'next';
import styled from 'styled-components';

const NavTitle = () => (

  <LinkStyle to={'/'}>
    J<Spanned>ason</Spanned> Mandel
  </LinkStyle>

)

export default NavTitle;

const LinkStyle = styled(Link)`
  @media (max-width: 48em) {
    font-size: 20px;
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
    font-size: 32px;
    color: white;
    padding-bottom: 5px;
  `;

const Spanned = styled.span`
  @media (max-width: 50em) {
    display: none;
  }

  display: inline-block;
  text-decoration: underline;
  text-decoration-color: #0000ee;
`;
