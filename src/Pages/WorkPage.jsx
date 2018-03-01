import React from 'react';
import Delayed from 'react-delayed';
import styled, { keyframes } from 'styled-components';
import Navigation from '../Components/Navigation';
import Work from '../Components/Work';
import Colophon from '../Components/Colophon';

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
        <Delayed mounted={true} mountAfter={1050}>
          <Fade out={!this.state.visible}>
            <Navigation />
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
