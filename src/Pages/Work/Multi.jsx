import React from 'react';
import Navigation from '../../Components/Navigation';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import WorkItems from '../../Components/WorkItems/WorkItems';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

const Multi = () => (
  <div>
    <Navigation />
    <Flex wrap>

      <Box w={[1/4]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
        <SectionTitle title='about' />
      </Box>

      <Box w={[3/4, 1/2, 1/4]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
      <WorkItems
        href={`/work/multi`}
        img={`https://d2w9rnfcy7mm78.cloudfront.net/1450245/original_4f1645b374101daf0f70fcb0013b7c2b.png`}
        title={'The Multi 18'}
        medium={'design conference'}
        site={'2017 - 2018'}
      />
      </Box>

      <Box w={[2/4]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
        <ResponsiveDisplayBig>
          <Box pb={2}>
            <AboutType>
              The Multi is a student run annual design conference in it’s fourth edition at Purchase College set for April 9th - 15th, 2018. This platform is a chance for our community to engage in self directed design discourse, inviting contemporary designers who inspire us through their own creative practices, fostering collaboration and mentorship between our communities. This has been a growing initiative with each conference larger than the last.
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
              The Multi is a student run annual design conference in it’s fourth edition at Purchase College set for April 9th - 15th, 2018. This platform is a chance for our community to engage in self directed design discourse, inviting contemporary designers who inspire us through their own creative practices, fostering collaboration and mentorship between our communities. This has been a growing initiative with each conference larger than the last.
            </AboutType>
          </Box>
        </ResponsiveDisplaySmall>
      </Box>
    </Flex>


  </div>
)

export default Multi;

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
