import React from 'react';
import Delayed from 'react-delayed';
import styled, { keyframes } from 'styled-components';
import Navigation from '../Components/Navigation';
import About from '../Components/About';
import Work from '../Components/Work';
import Colophon from '../Components/Colophon';
import ReactGA from 'react-ga';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: true
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
        <Delayed mounted={true} mountAfter={700}>
          <Fade out={!this.state.visible}>
            <About/>
          </Fade>
        </Delayed>
        <Delayed mounted={true} mountAfter={900}>
          <Fade out={!this.state.visible}>
            <Work />
          </Fade>
        </Delayed>
        <Delayed mounted={true} mountAfter={1000}>
          <Fade out={!this.state.visible}>
            <Colophon/>
          </Fade>
        </Delayed>
      </div>
    );
  }
}

export default Home;

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

ReactGA.initialize('UA-68238638-2');
ReactGA.pageview(window.location.pathname + window.location.search);