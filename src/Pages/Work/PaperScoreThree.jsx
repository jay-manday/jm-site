import React from 'react';
import Navigation from '../../Components/Navigation';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import WorkItems from '../../Components/WorkItems/WorkItems';
import Player from '../../Components/YouTube/Player';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

const PaperScoreThree = () => (
  <div>
    <Navigation items={['work', 'about', '']} />

      <Flex wrap>
        <Box w={[1/4]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
          <SectionTitle title='work' />
        </Box>

        <Box w={[3/4, 1/2, 1/4]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
          <WorkItems
            href={`/work/paper-score-three`}
            img={'https://d2w9rnfcy7mm78.cloudfront.net/1156854/original_7ea09cc794c5a2b2c9ec4ab1702d9bc7.jpg'}
            title={'Paper Score #3'}
            medium={'paper, piezos, & pure data'}
            site={'Neuberger Museum, 2017'}
          />
        </Box>

        <Box w={[2/4]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
          <ResponsiveDisplayBig>
            <AboutType>
              I'm a Designer and Engineer researching data and society. I like to contribute to open source projects like p5.js, gardening with learning gardens and teaching kids creative coding at the Rye Arts Center.
            </AboutType>
          </ResponsiveDisplayBig>
        </Box>
      </Flex>


      <Flex wrap>
          <Box w={[1/4, 0]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
            <ResponsiveDisplaySmall>
              <SectionTitle title='about' />
            </ResponsiveDisplaySmall>
          </Box>


        <Box w={[3/4, 0]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
          <ResponsiveDisplaySmall>
            <AboutType>
              I'm a Designer and Engineer researching data and society. I like to contribute to open source projects like p5.js, gardening with learning gardens and teaching kids creative coding at the Rye Arts Center.
            </AboutType>
          </ResponsiveDisplaySmall>

        </Box>

      </Flex>

      <Flex wrap>

        <Box w={[0, 1/4]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
          <ResponsiveDisplayBig>
            <SectionTitle title='about' />
          </ResponsiveDisplayBig>
        </Box>

        <Box width={[1, 2/3]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
          <Player videoId="6hIgBEXuQD8"/>
        </Box>
      </Flex>

  </div>
)

export default PaperScoreThree;

const AboutType = styled.h2`
@media (max-width: 37.5em) {
  font-size: 1.5em;
  line-height: 1.5em;
  text-decoration: none;
}

@media (min-width: 37.5em) {
  font-size: 1.5em;
  line-height: 1.5em;
  text-decoration: none;
}
  font-family: 'GrotesqueMT';
  font-size: 1.5em;
  font-weight: 300;
  line-height: 1.5em;
  color: white;
  margin: 0;
`;

const ResponsiveDisplaySmall = styled.span`
  @media (max-width: 37.5em) {
    display: inline;
  }
  display: none;
`;

const ResponsiveDisplayBig = styled.span`
  @media (min-width: 48em) {
    display: inline;
  }

  display: none;
`;
