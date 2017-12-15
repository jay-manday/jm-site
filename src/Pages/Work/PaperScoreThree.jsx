import React from 'react';
import Navigation from '../../Components/Navigation';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import WorkItems from '../../Components/WorkItems/WorkItems';
import Player from '../../Components/YouTube/Player';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import { Image } from 'rebass';

const PaperScoreThree = () => (
  <div>
    <Navigation />
    <Flex wrap>

      <Box w={[1/4]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
        <SectionTitle title='about' />
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
      <Box w={[1/4, 0]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
        <ResponsiveDisplaySmall>
          <SectionTitle title='about' />
        </ResponsiveDisplaySmall>
      </Box>

      <Box w={[3/4, 0]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
        <ResponsiveDisplaySmall>
          <Box pb={2}>
            <AboutType>
              The piece was on dislay November 2016 in the Neuberger Museum and was commissioned for a lecture by Miller Puckette, and moderated by Elizabeth Phillips.
            </AboutType>
          </Box>

          <Box pb={2}>
            <AboutType>
              Milller Puckette is creator of the Max & Pure Data programming languages which he developed at IRCAM in 1987. Miller Puckette has a Ph.D. in Mathematics from Harvard and was a founding member of the MIT Media Lab. He teaches in the Music department at UC San Diego and was the Associate Director of the Center for Research in Computing & the Arts.
            </AboutType>
          </Box>

          <Box pb={2}>
            <AboutType>
              Miller Puckette has collaborated with several artists including Philipe Manoury, Rand Steiger, Vibeke Sorensen and Juliana Snapper among others.
            </AboutType>
          </Box>
        </ResponsiveDisplaySmall>
      </Box>
    </Flex>
    <Flex wrap>
      <Box w={[0, 1/4]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
        <ResponsiveDisplayBig>
          <SectionTitle title='about' />
        </ResponsiveDisplayBig>
      </Box>
      <Box w={[3/4]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
        <ResponsiveDisplayBig>
          <Box pb={2}>
            <AboutType>
              The piece was on dislay November 2016 in the Neuberger Museum and was commissioned for a lecture by Miller Puckette, and moderated by Elizabeth Phillips.
            </AboutType>
          </Box>

          <Box pb={2}>
            <AboutType>
              Milller Puckette is creator of the Max & Pure Data programming languages which he developed at IRCAM in 1987. Miller Puckette has a Ph.D. in Mathematics from Harvard and was a founding member of the MIT Media Lab. He teaches in the Music department at UC San Diego and was the Associate Director of the Center for Research in Computing & the Arts.
            </AboutType>
          </Box>

          <Box pb={2}>
            <AboutType>
              Miller Puckette has collaborated with several artists including Philipe Manoury, Rand Steiger, Vibeke Sorensen and Juliana Snapper among others.
            </AboutType>
          </Box>
        </ResponsiveDisplayBig>
      </Box>
    </Flex>

    <Flex wrap>
      <Box w={[0, 1/4]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
        <ResponsiveDisplayBig>
          <SectionTitle title='' />
        </ResponsiveDisplayBig>
      </Box>

      <Box w={[0, 1/3]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
        <ResponsiveDisplayBig>
          <Image pb={2}  src='https://d2w9rnfcy7mm78.cloudfront.net/1221774/original_f21ee6fc9de6ee30a8e46ad5c8deccdf.jpg' />
        </ResponsiveDisplayBig>
      </Box>

      <Box w={1/3} p={[2, 3]} pl={[2, 3]} pt={[3, 4]} pb={2}>
        <ResponsiveDisplayBig>
          <AboutType>
            The lecture was moderated by Elizabeth Phillips, faculty from the Sculpture Department in the School of Art + Design. Phillips has been exploring emergent properties with electronic sound and environmental art. Elizabeth is a Guggenheim Fellow and has worked closely with figures such as John Cage, Merce Cunningham & Co, Nam June Paik, Yoshi Wada, among many others.
          </AboutType>
        </ResponsiveDisplayBig>
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const Fade = styled.div`
  visibility: ${props => props.out ? 'hidden' : 'visible'};
  animation: ${props => props.out ? fadeOut : fadeIn} 0.5s linear;
  transition: visibility 1s linear;
`;
