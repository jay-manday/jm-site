import React from 'react';
import styled, { keyframes } from 'styled-components';
import Navigation from '../Components/Navigation';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import Colophon from '../Components/Colophon';
import { Text, Box, Flex } from 'rebass';

class WritingPage extends React.Component {
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

  render(props) {
    return (
      <div>
          <Fade out={!this.state.visible}>
            <Navigation />
          </Fade>
          <Fade out={!this.state.visible}>
            <Flex wrap>
              <Box w={[1/4]} p={[3,4]} pl={[2, 3]} >
                <SectionTitle title='writings' />
              </Box>
              <Box w={[1, 1/2, 1/3]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
                <AboutType>Coming Soon</AboutType>
              </Box>
            </Flex>
          </Fade>
          <Fade out={!this.state.visible}>
            <Colophon/>
        </Fade>
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

const AboutType = styled(Text)`
@media (max-width: 48em) {
  display: float;
  font-size: 1em;
  line-height: 1.25em;
  text-decoration: none;
}

  background-color: black;
  font-family: 'GrotesqueMT';
  text-decoration: none;
  display: float;
  line-height: 1.5em;
  font-size: 1.875em;
  font-weight: 300;
  color: white;
  margin: 0;
`;
