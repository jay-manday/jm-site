import React from 'react';
import { Box } from 'grid-styled';
import styled from 'styled-components';
import P5Wrapper from '../P5Wrapper/P5Wrapper';
import Clock from '../Sketches/Clock'

class SketchWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
    }
  }

  componentDidMount(props) {
    console.log(`mounted P5Wrapper`)
    this.setState({
      ready: true,
    })
  }

  render(props) {
    console.log(`rendered P5Wrapper`)
    return (
      <Box width={[1, 1/2, 1/3]} p={[2, 3]} pl={[2, 3]} pt={[3, 4]} >
        <StyledSketch>
          <P5Wrapper sketch={Clock} />
        </StyledSketch>
      </Box>
    )
  }
}

export default SketchWrapper;

const StyledSketch = styled.div `

`;
