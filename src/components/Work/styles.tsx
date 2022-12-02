import styled, { keyframes } from 'styled-components';

export const LinkHover = keyframes`
  0% {
    color: #fff;
  }
  100% {
    color: red;
  }
`;

export const WorkTitle = styled.p`
  display:inline-block;

  background-color: black;
  font-family: 'Inter'
  font-style:  normal;
  font-weight: 500;
  font-size: 32px;
  color: white;
  margin: 0;

  @media (max-width: 48em) {
    display:inline-block;
    line-height: 24px;
    font-size: 20px;
 
  }
`;

/**
 * 
 *   text-decoration: underline;
  text-decoration-color: #0000ee;
 * 
 *    text-decoration: underline;
    text-decoration-color: #0000ee;

 *   :hover {
    animation: ${LinkHover} 0.5s forwards;
  }
 */

export const WorkLink = styled.a`
  color: white;
  display:inline-block;
  text-decoration: underline;
  text-decoration-color: #0000ee;
  font-family: 'Inter'
  font-style:  normal;
  font-weight: 500;
  font-size: 32px;     
  transition: color 0.5s linear; /* vendorless fallback */
  -o-transition: color 0.5s linear; /* opera */
  -ms-transition: color 0.5s linear; /* IE 10 */
  -moz-transition: color 0.5s linear; /* Firefox */
  -webkit-transition: color 0.5s linear; /*safari and chrome */

  @media (max-width: 48em) {
    font-size: 16px;
    line-height: 24px
    display:inline-block;
    text-decoration: underline;
    text-decoration-color: #0000ee;
    padding-bottom: 0px;
  }

  :hover {
    animation: ${LinkHover} 0.5s forwards;
  }
`;

export const WorkSubtitle = styled.h1`
  color: white;
  display:inline-block;
  font-family: 'Inter'
  font-style:  normal;
  font-weight: 500;
  font-size: 24px;

  @media (max-width: 48em) {
    font-size: 16px;
    line-height: 24px
    display:inline-block;
  }
`;
