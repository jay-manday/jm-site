import styled from 'styled-components';

export const TitleStyle = styled.p`
  display:inline-block;
  text-decoration: underline;
  text-decoration-color: #0000ee;
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
    text-decoration: underline;
    text-decoration-color: #0000ee;
  }

  :hover {
    color: red;
  }
`;

export const LinkStyle = styled.a`
  color: white;
  padding-bottom: 5px;
  display:inline-block;
  text-decoration: underline;
  text-decoration-color: #0000ee;
  font-family: 'Inter'
  font-style:  normal;
  font-weight: 500;
  font-size: 32px;

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
`;
