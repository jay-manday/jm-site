import React from 'react';
import Delayed from 'react-delayed';
import { Text, Box, Flex } from 'rebass';
import styled, { keyframes } from 'styled-components';
import SectionTitle from '../Components/SectionTitle/SectionTitle';
import Navigation from '../Components/Navigation';
import Work from '../Components/Work';
import Colophon from '../Components/Colophon';

class AboutPage extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: true,
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <Delayed mounted={true} mountAfter={1050}>
          <Fade out={!this.state.visible}>
            <Navigation />
          </Fade>
        </Delayed>

        <Delayed mounted={true} mountAfter={1050}>
          <Fade out={!this.state.visible}>
            <Flex wrap>
              <Box w={[1/4]} p={[3,4]} pl={[2, 3]} mt={[0,1]}>
                <SectionTitle title='about' />
              </Box>
              <Box w={[3/4, 2/3 ]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]} >
                <AboutType>
                  This is just a brief curated selection of work, feel free to reach out for more examples of work.
                  <br/>
                </AboutType>
              </Box>
            </Flex>
          </Fade>
        </Delayed>

        <Delayed mounted={true} mountAfter={1250}>
          <Fade out={!this.state.visible}>
            <Work />
          </Fade>
        </Delayed>
        <Delayed mounted={true} mountAfter={1350}>
          <Fade out={!this.state.visible}>
            <Colophon/>
          </Fade>
        </Delayed>
      </div>
    );
  }
}

export default AboutPage;

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
