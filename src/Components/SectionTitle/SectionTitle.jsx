import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Box } from 'grid-styled';
import { Measure } from 'rebass';

const SectionTitle = (props) => (

    <Box w={[1/4]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
      <Measure classID='work'>
        <Route path={`/${props.title}`}>
          <TitleStyle>{props.title}</TitleStyle>
        </Route>
      </Measure>
    </Box>

)

export default SectionTitle;

const TitleStyle = styled.p`
  @media (min-width: 20em) {
    font-size: 1em;
    text-decoration: none;
  }

  @media (min-width: 37.5em) {
    font-size: 1.5em;
    text-decoration: none;
  }

  :hover {
    color: green;
  }

  background-color: black;
  font-family: 'GrotesqueMT';
  font-size: 1em;
  font-weight: 300;
  color: white;
  margin: 0;
`;
