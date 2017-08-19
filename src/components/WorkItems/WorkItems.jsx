import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import { Image } from 'rebass';

const WorkItems = (props) => (

  <Box width={[1, 1/2, 1/3]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]} >
    <Link to={props.href} >
      <Image src={props.img} />
    </Link>


    <Box pt={3}>
        <TitleStyle>
          {props.title}
        </TitleStyle>
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
  :hover {
    color: red;
  }

  font-family: GrotesqueMT;
  font-style: italic;
  font-size: 1.5em;
  color: white;
  text-decoration: none;
  margin: 0;
`;

const SubStyle = styled.h1`
  font-family: GrotesqueMT;
  font-style: italic;
  font-size: .5em;
  color: white;
  margin: 0;
`;
