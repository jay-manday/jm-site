import styled, { keyframes } from 'styled-components';

export const LinkHover = keyframes`
  0% {
    color: #fff;
  }

  100% {
    color: red;
  }
`;

export const TitleStyle = styled.div`
  display:inline-block;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.blue};
  background-color: black;
  font-family: 'Inter'
  font-style:  normal;
  font-weight: 500;
  font-size: 32px;
  color: white;
  margin: 0;
  -webkit-transition: color 0.5s;

  @media (max-width: 48em) {
    display:inline-block;
    line-height: 24px;
    font-size: 16px;
    color: #fff;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.blue};
    -webkit-transition: color 0.5s;
  }

  :hover {
    color: ${({ theme }) => theme.colors.red};
    -webkit-transition: color 0.5s;
  }
`;

export const LinkStyle = styled.a`
  color: white;
  padding-bottom: 5px;
  display:inline-block;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.blue};
  font-family: 'Inter'
  font-style:  normal;
  font-weight: 500;
  font-size: 32px;
  color: #fff;
  -webkit-transition: color 0.5s;
  
  @media (max-width: 48em) {
    font-size: 16px;
    line-height: 24px
    display:inline-block;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.blue};
    padding-bottom: 0px;
    color: #fff;
    -webkit-transition: color 0.5s;
  }

  :hover {
    color: ${({ theme }) => theme.colors.red};
    -webkit-transition: color 0.5s;
  }
`;

export const Spanned = styled.span`
  display: inline-block;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.blue};

  @media (max-width: 50em) {
    display: none;
  }
`;
