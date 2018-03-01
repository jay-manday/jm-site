import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import { Image } from 'rebass';

const WorkItems = (props) => (

  <Box>
    <Link to={props.href} >
      <Image src={props.img} />
    </Link>


    <Box pt={3}>
      <Link to={props.href} >
        <TitleStyle>
          {props.title}
        </TitleStyle>
      </Link>
    </Box>

    <Box pt={1}>
      <SubStyle>
        {props.medium}
      </SubStyle>
    </Box>

    <Box pt={1}>
      <SubStyle>
        {props.site}
      </SubStyle>
    </Box>

  </Box>

)

export default WorkItems;

const TitleStyle = styled.h1`
@media (max-width: 48em) {
  display:inline-block;
  font-size: 1.25em;
  text-decoration: underline;
  text-decoration-color: #0000ee;

}
  :hover {
    color: red;
  }

  font-family: GrotesqueMT;
  font-style: italic;
  font-size: 1.5em;
  color: white;
  text-decoration: underline;
  text-decoration-color: #0000ee;
  margin: 0;

  display:inline-block;
  text-decoration: underline;
  text-decoration-color: #0000ee;
  padding: 0px;
  margin: 0px;
  color: white;

  :hover {
    color: red;
  }
`;

const SubStyle = styled.h1`
  font-family: GrotesqueMT;
  font-style: italic;
  font-size: 1em;
  color: white;
  margin: 0;
`;
