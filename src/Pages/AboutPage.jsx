import React from 'react';
import { Text } from 'rebass';
import { Flex, Box } from 'grid-styled';
import styled, { keyframes } from 'styled-components';
import Navigation from '../Components/Navigation';
import Colophon from '../Components/Colophon';
import SectionTitle from '../Components/SectionTitle/SectionTitle';

class AboutPage extends React.Component {
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
              <SectionTitle title='about' />
            </Box>
              <Box w={[3/4, 2/3 ]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]} >
            <AboutType>
              Currently: <br/>
              <br />
              Studying Visual Art and Mathematics at Purchase College <br/>
              Thinking about relationships, translation, and artifacts. <br/>
              Curating a student directed design conference. <br/>
              <br/>
              I'm interested in: <br/>
              <br />
              Exploring hidden narratives formalized by data <br/>
              The social graphs across intentional communities <br/>
              Holistic approaches to design and computation <br/>
              All things electro-acoustic <br/>
              Modular structures <br/>
              <br/>
              You should check out: <br/>
              <br />
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

          <Fade out={!this.state.visible}>
            <Colophon />
        </Fade>

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
  text-decoration: none;
  border-bottom: 3px solid #0000ee;
}

  display:inline-block;
  word-wrap: break-word;
  border-bottom: 5px solid #0000ee;
  text-decoration: none;
  padding: 0px;
  margin: 0px;
  color: white;

  :hover {
    color: red;
  }
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
