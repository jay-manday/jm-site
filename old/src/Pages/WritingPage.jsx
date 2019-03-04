import React from 'react';
import Delayed from 'react-delayed';
import styled, { keyframes } from 'styled-components';
import Navigation from '../Components/Navigation';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import Colophon from '../Components/Colophon';
import { Text, Box, Flex } from 'rebass';

class WritingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: true,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: true,
      })
    }, 1000)
  }

  render() {
    return (
      <div>
        <Delayed mounted={true} mountAfter={1050}>
          <Fade out={!this.state.visible}>
            <Navigation />
          </Fade>
        </Delayed>
        <Delayed mounted={true} mountAfter={1250}>
          <Fade out={!this.state.visible}>
            <Flex wrap>
              <Box w={[1 / 4]} p={[3, 4]} pl={[3, 4]} >
                <SectionTitle title='writings' />
              </Box>
              <Box w={[1, 1 / 2, 1 / 3]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
                <AboutType>Coming Soon</AboutType>
              </Box>
            </Flex>
          </Fade>
        </Delayed>
        <Delayed mounted={true} mountAfter={1450}>
          <Fade out={!this.state.visible}>
            <Colophon />
          </Fade>
        </Delayed>
      </div>
    );
  }
}

export default WritingPage;

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

const AboutType = styled(Text) `
@media (max-width: 48em) {
  display: float;
  font-size: 16pc;
  text-decoration: none;
}

  background-color: black;
  font-family: 'GrotesqueMT';
  text-decoration: none;
  display: float;
  font-size: 64px;
  font-weight: 300;
  color: white;
  margin: 0;
`;
