import React from 'react';
import Navigation from '../../Components/Navigation';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import SketchWrapper from '../../Components/SketchWrapper/SketchWrapper';
import Clock from '../../Components/Sketches/Clock';
import { Flex, Box, } from 'grid-styled';
import styled from 'styled-components';

import React from 'react';
import styled, { keyframes } from 'styled-components';
import Navigation from '../Components/Navigation';
import About from '../Components/About';
import Colophon from '../Components/Colophon';

class ContingentClock extends React.Component {
  constructor(props) {
    super()
    this.state = {
      visible: true,
    }
  }

  componentDidMount(props) {
    setTimeout(() => {
      this.setState({
        visible: true,
      })
    }, 1000)
  }

  componentWillUnmount(props) {
    this.setState({
      visible: false,
    })
  }

  render(props) {
    return (
      <div>
        <Fade>
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
              <SectionTitle title='about' />
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
        </Fade>
        <Fade>
          <Colophon/>
        </Fade>
      </div>
    );
  }
}

export default ContingentClock;

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
