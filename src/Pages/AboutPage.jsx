import React from 'react';
import styled, { keyframes } from 'styled-components';
import Navigation from '../Components/Navigation';
import About from '../Components/About';
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
          </Fade>
          <Fade>
            <About/>
          </Fade>
          <Fade>
            <Colophon/>
        </Fade>
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
