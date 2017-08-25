import React from 'react';
import Navigation from '../../Components/Navigation';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import SketchWrapper from '../../Components/SketchWrapper/SketchWrapper';
import Clock from '../../Components/Sketches/Clock';
import { Flex, Box, } from 'grid-styled';
import styled from 'styled-components';


const ContingentClock = () => (
  <div>
    <Navigation items={['work', 'about', '']} />
    <Flex wrap>
      <Box w={[1/4]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
        <SectionTitle title='work' />
      </Box>

      <Box w={[3/4, 1/2, 1/4]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
        <SketchWrapper
          href={`/work/contingent-clock`}
          classID={'SketchWrapper'}
          className={'sketch'}
          sketch={Clock}
          title={'Contingent Clock'}
          medium={'Chance and Code'}
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


    <Flex>
      <Box w={[1/4]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
        <ResponsiveDisplaySmall>
          <SectionTitle title='about' />
        </ResponsiveDisplaySmall>
      </Box>

      <Box width={[3/4, 1/4]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
        <ResponsiveDisplaySmall>
          <AboutType>
            I'm a Designer and Engineer researching data and society. I like to contribute to open source projects like p5.js, gardening with learning gardens and teaching kids creative coding at the Rye Arts Center.
          </AboutType>
        </ResponsiveDisplaySmall>
      </Box>
    </Flex>

  </div>
)

export default ContingentClock;

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


const AboutType= styled.h2`
  @media (min-width: 20em) {
    font-size: 1em;
    line-height: 1.5em;
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
  line-height: 1.5em;
  color: white;
  margin: 0;
`;
