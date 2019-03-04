import React from 'react';
import { Image, Text } from 'rebass';
import Delayed from 'react-delayed';
import { Flex, Box } from 'grid-styled';
import styled, { keyframes } from 'styled-components';
import Navigation from '../Components/Navigation';
import Colophon from '../Components/Colophon';
import SectionTitle from '../Components/SectionTitle/SectionTitle';

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
        <Delayed mounted={true} mountAfter={350}>
          <Fade out={!this.state.visible}>
            <Navigation />
          </Fade>
        </Delayed>
        <Delayed mounted={true} mountAfter={600}>
          <Fade out={!this.state.visible}>
            <Flex wrap>
              <Box w={[1/4]} p={[3,4]} pl={[2, 3]}>
                <SectionTitle title='self' />
              </Box>

              <Box w={[3/4]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]} >
                <Image
                  width={[1, 1/3]}
                  height={[1, 1/3]}
                  src="https://goo.gl/JkH4FB"
                />
              </Box>
              <Box w={[1/4]} p={[3,4]} pl={[2, 3]}>
                <SectionTitle title='currently' />
              </Box>

              <Box w={[3/4]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]} >
                <AboutType>
                  Studying Visual Art and Mathematics at Purchase College <br/>
                  Thinking about relationships, translation, and artifacts <br/>
                  Visualizing climate scenarios across several cities <br/>
                  Curating a student directed design conference <br/>
                </AboutType>
              </Box>

              <Box w={[1/4]} p={[3,4]} pl={[2, 3]}>
                <SectionTitle title='interests' />
              </Box>
              <Box w={[3/4 ]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]} >
                <AboutType>
                  Exploring hidden narratives formalized by data <br/>
                  Holistic approaches to design and computation <br/>
                  All things electro-acoustic <br/>
                  Modular structures <br/>
                </AboutType>
              </Box>

              <Box w={[1/4]} p={[3,4]} pl={[2, 3]}>
                <SectionTitle title='check out' />
              </Box>
              <Box w={[3/4, 2/3 ]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]}>
                <AboutType>
                  <LinkStyle href="http://learning-gardens.co/">
                    Learning Gardens
                  </LinkStyle> <br/>
                  <LinkStyle href="http://newcomputers.group/">
                    New Computer Working Group </LinkStyle><br/>
                  <LinkStyle href="https://github.com/learning-gardens/cybernetics-club">
                    Cybernetics Club </LinkStyle><br/>
                  <LinkStyle href="https://are.na">Are.na</LinkStyle>
                </AboutType>
              </Box>
              </Flex>
            </Fade>
          </Delayed>
        <Delayed mounted={true} mountAfter={1050}>
          <Fade out={!this.state.visible}>
            <Colophon />
          </Fade>
        </Delayed>
      </div>
    );
  }
}

export default AboutPage;

const LinkStyle = styled.a`
@media (max-width: 48em) {
  display:inline-block;
  word-wrap: break-word;
  font-size: 1em;
  line-height: 1.5em;
  text-decoration: underline;
  text-decoration-color: #0000ee;
}

  display:inline-block;
  word-wrap: break-word;
  text-decoration: underline;
  text-decoration-color: #0000ee;
  padding: 0px;
  margin: 0px;
  color: white;

  :hover {
    color: red;
  }
`;

const AboutType = styled(Text) `
@media (max-width: 48em) {
  display: float;
  font-size: 16px;
  text-decoration: none;
}

  background-color: black;
  font-family: 'GrotesqueMT';
  text-decoration: none;
  display: float;
  line-height: 24px;
  font-size: 30px;
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
