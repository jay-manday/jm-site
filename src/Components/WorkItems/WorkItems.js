import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-static';
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
  :hover {
    color: red;
  }

  font-family: GrotesqueMT;
  font-style: italic;
  font-size: 1.25em;
  color: white;
  text-decoration: none;
  margin: 0;
`;

const SubStyle = styled.h1`
  font-family: GrotesqueMT;
  font-style: italic;
  font-size: .75em;
  color: white;
  margin: 0;
`;
