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
          site={'Neuberger Museum, 2016'}
        />
      </Box>

      <Box w={[2/4]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
        <ResponsiveDisplayBig>
          <Box pb={2}>
            <AboutType>
              A series of studies on inter-relationship of emergent media in concurrence with traditional mediums such as paper-craft through a concomitant compositional schema.
            </AboutType>
          </Box>

          <Box pb={2}>
            <AboutType>
              The composition consists of the recordings of the physical formulation of pulp to paper, projected through the paper via transducers while the piece was at rest, awaiting activation by the realization of an inter-dependent score.
            </AboutType>
          </Box>

          <Box pb={2}>
            <AboutType>
              As the participant channels the instructions, the transitory motion of pencil in hand across paper, producing acoustic artifacts which are projected through same paper of causation.
            </AboutType>
          </Box>
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
          <Box pb={2}>
            <AboutType>
              A series of studies on inter-relationship of emergent media in concurrence with traditional mediums such as paper-craft through a concomitant compositional schema.
            </AboutType>
          </Box>

          <Box pb={2}>
            <AboutType>
              A composition made of the recordings from the physical formulation of pulp to paper is projected through the paper via transducers while the piece was at rest, awaiting activation by the realization of an inter-dependent score.
            </AboutType>
          </Box>

          <Box pb={2}>
            <AboutType>
              As the participant channels the instructions, the transitory motion of pencil in hand across paper, producing acoustic artifacts which are projected through same paper of causation.
            </AboutType>
          </Box>
        </ResponsiveDisplaySmall>
      </Box>
    </Flex>

    <Flex wrap>
      <Box w={[0, 1/4]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
        <ResponsiveDisplayBig>
          <SectionTitle title='work' />
        </ResponsiveDisplayBig>
      </Box>

      <Box width={[1, 2/3]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
        <Player videoId="JjdqXNqkQ-4"/>
      </Box>
    </Flex>

    <Flex wrap>
      <Box w={[0, 1/4]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
        <ResponsiveDisplayBig>
          <SectionTitle title='about' />
        </ResponsiveDisplayBig>
      </Box>
      <Box w={[2/4]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
        <ResponsiveDisplayBig>
          <Box pb={2}>
            <AboutType>
              A series of studies on inter-relationship of emergent media in concurrence with traditional mediums such as paper-craft through a concomitant compositional schema.
            </AboutType>
          </Box>

          <Box pb={2}>
            <AboutType>
              The composition consists of the recordings of the physical formulation of pulp to paper, projected through the paper via transducers while the piece was at rest, awaiting activation by the realization of an inter-dependent score.
            </AboutType>
          </Box>
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
          <Box pb={2}>
            <AboutType>
              A series of studies on inter-relationship of emergent media in concurrence with traditional mediums such as paper-craft through a concomitant compositional schema.
            </AboutType>
          </Box>

          <Box pb={2}>
            <AboutType>
              A composition made of the recordings from the physical formulation of pulp to paper is projected through the paper via transducers while the piece was at rest, awaiting activation by the realization of an inter-dependent score.
            </AboutType>
          </Box>

          <Box pb={2}>
            <AboutType>
              As the participant channels the instructions, the transitory motion of pencil in hand across paper, producing acoustic artifacts which are projected through same paper of causation.
            </AboutType>
          </Box>
        </ResponsiveDisplaySmall>
      </Box>
    </Flex>

  </div>
)

export default PaperScoreThree;

const AboutType = styled.h2`
@media (max-width: 37.5em) {
  font-size: 1em;
  line-height: 1.25em;
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
  @media (min-width: 37.5em) {
    display: inline;
  }

  display: none;
`;
