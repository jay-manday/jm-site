import styled, { keyframes } from 'styled-components';

export const Link = styled.a`
  color: #fff;
  padding-bottom: 5px;
  display:inline-block;
  font-family: 'Inter'
  font-style:  normal;
  font-weight: 500;
  font-size: 32px;
  text-decoration: underline;
  text-decoration-color: #0000ee;
  -webkit-transition: color 0.5s;


  @media (max-width: 48em) {
    font-size: 16px;
    line-height: 24px
    display:inline-block;
    text-decoration: underline;
    text-decoration-color: #0000ee;
    padding-bottom: 0px;
    -webkit-transition: color 0.5s;
  }


  :hover {
    color: #f00;
    -webkit-transition: color 0.5s;
  }
`;


export const Type = styled.p`
  color: #fff;
  padding-bottom: 5px;
  display:inline-block;
  font-family: 'Inter'
  font-style:  normal;
  font-weight: 500;
  font-size: 32px;

  @media (max-width: 48em) {
    font-size: 16px;
    line-height: 24px
    display:inline-block;
    padding-bottom: 0px;
  }

`;
