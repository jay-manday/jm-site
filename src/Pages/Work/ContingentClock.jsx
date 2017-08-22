import React from 'react';
import Navigation from '../../Components/Navigation';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import SketchWrapper from '../../Components/SketchWrapper/SketchWrapper';
import Clock from '../../Components/Sketches/Clock';
import { Flex, Box, Grid } from 'grid-styled';
import styled from 'styled-components';
import { Text } from 'rebass';

const ContingentClock = () => (
  <div>
    <Navigation items={['work', 'about', '']} />
    <Flex wrap>
      <Box w={[1/4]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
        <SectionTitle title='work' />
      </Box>

      <Grid width={3/4}>
        <Flex wrap>

          <SketchWrapper
            href={`/work/contingent-clock`}
            classID={'SketchWrapper'}
            className={'sketch'}
            sketch={Clock}
            title={'Contingent Clock'}
            medium={'Chance and Code'}
          />

          <Box w={[1, 2/3, ]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]} >
            <Text width={[1, 2/3]}>
              <AboutType>
                I'm a Designer and Engineer researching data and society. I like to contribute to open source projects like p5.js, gardening with learning gardens and teaching kids creative coding at the Rye Arts Center.
              </AboutType>
            </Text>
          </Box>

        </Flex>
      </Grid>
    </Flex>
  </div>
)

export default ContingentClock;

const AboutType= styled.h2`
  @media (min-width: 20em) {
    font-size: 1em;
    line-height: 1em;
    text-decoration: none;
  }

  @media (min-width: 37.5em) {
    font-size: 1.5em;
    line-height: 1.5em;
    text-decoration: none;
  }

  font-family: 'GrotesqueMT';
  font-size: 1.25em;
  font-weight: 300;
  line-height: 1.25em;
  color: white;
  margin: 0;
`;
