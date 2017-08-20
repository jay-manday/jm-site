import React from 'react';
import Navigation from '../../Components/Navigation';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import WorkItems from '../../Components/WorkItems/WorkItems';
import Player from '../../Components/YouTube/Player';
import { Flex, Box, Grid } from 'grid-styled';
import styled from 'styled-components';
import { Text } from 'rebass';

const PaperScoreThree = () => (
  <div>
    <Navigation items={['work', 'about', '']} />
    <Flex wrap>
      <SectionTitle title='work' />
      <Grid width={3/4}>
        <Flex wrap>

          <WorkItems
            href={`/work/paper-score-three`}
            img={'https://d2w9rnfcy7mm78.cloudfront.net/1156854/original_7ea09cc794c5a2b2c9ec4ab1702d9bc7.jpg'}
            title={'Paper Score #3'}
            medium={'paper, piezos, & pure data'}
            site={'Neuberger Museum, 2017'}
          />

          <Box w={[1, 2/3, ]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]} >
            <Text width={[1, 2/3]}>
              <AboutType>
                I'm a Designer and Engineer researching data and society. I like to contribute to open source projects like p5.js, gardening with learning gardens and teaching kids creative coding at the Rye Arts Center.
              </AboutType>
            </Text>
          </Box>

          <Box width={[1, 2/3]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
            <Player/>
          </Box>

        </Flex>
      </Grid>
    </Flex>
  </div>
)

export default PaperScoreThree;

const AboutType= styled.h2`
@media (min-width: 20em) {
  font-size: 1em;
  text-decoration: none;
}

@media (min-width: 37.5em) {
  font-size: 1.5em;
  text-decoration: none;
}
  font-family: 'GrotesqueMT';
  font-size: 1.25em;
  font-weight: 300;
  color: white;
  margin: 0;
`;
