import React from 'react';
import Navigation from '../../Components/Navigation';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import SketchWrapper from '../../Components/SketchWrapper/SketchWrapper';
import Clock from '../../Components/Sketches/Clock';
import { Flex, Box, } from 'grid-styled';
import styled from 'styled-components';


const ContingentClock = () => (
  <div>
    <Navigation />
    <Flex wrap>
      <Box w={[1/4]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
        <SectionTitle title='work' />
      </Box>

      <Box w={[3/4, 1/2]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
        <SketchWrapper
          href={`/work/contingent-clock`}
          classID={'SketchWrapper'}
          className={'sketch'}
          sketch={Clock}
          title={'Contingent Clock'}
          medium={'Chance and Code'}
        />
      </Box>
    </Flex>
    <Flex wrap>
      <Box w={[1/4]} p={[2, 3]} pl={[2, 3]}  pt={[3, 4]}>
        <ResponsiveDisplayBig>
          <SectionTitle title='about' />
        </ResponsiveDisplayBig>
      </Box>
      <Box w={[3/4, 1/2]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
        <ResponsiveDisplayBig>
          <AboutType>
            This abstracted clock is a study made with p5.js
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
            This abstracted clock is a study made with p5.js
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
    font-size: 16px;
    line-height: 20px;
    text-decoration: none;
  }

  @media (min-width: 37.5em) {
    font-size: 24px;
    line-height: 24px;
    text-decoration: none;
  }

  font-family: 'GrotesqueMT';
  font-size: 20px;
  font-weight: 300;
  line-height: 20px;
  color: white;
  margin: 0;
`;
