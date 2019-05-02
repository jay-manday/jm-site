/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';
import './fontawersome';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: #fff;
    background-color: #000;
    font-family: 'Roboto', 'Lato', sans-serif;
    font-size: 1.6rem;
    padding: 0;
    margin: 0;
  }

  #__next {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  a:link, a:visited, a:active {
    color: inherit;
  }
`;
