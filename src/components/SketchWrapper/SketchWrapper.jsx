import React from 'react';
import { Box } from 'grid-styled';
import styled from 'styled-components';
import P5Wrapper from 'react-p5-wrapper';


class SketchWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      width: undefined,
      heigh: undefined,
    }
  }

  componentDidMount(props) {
    const height = document.getElementById('canvas').clientHeight;
    const width = document.getElementById('canvas').clientWidth;
    console.log(`mounted P5Wrapper`)
    this.setState({
      ready: true,
      width,
      height
    })
  }

  changeWidthHeight(width, height) {
    console.log("changing");
    this.setState({ height, width });
    console.log("changed");
  }

  render(props) {
    console.log(`rendered P5Wrapper`)
    return (

      <Box
        width={[1, 1/2, 1/3]}
        p={[2, 3]}
        pl={[2, 3]}
        pt={[3, 4]}
      >

        <StyledSketch>
          <Box w={1}>
            <div className="canvas-wrapper" id="canvas">
              <P5Wrapper sketch={this.props.sketch}  />
            </div>
          </Box>
        </StyledSketch>

        <Box pt={3}>
          <TitleStyle>
            {this.props.title}
          </TitleStyle>
        </Box>

        <Box pt={1}>
          <SubStyle>
            {this.props.medium}
          </SubStyle>
        </Box>

      </Box>


    )
  }
}

export default SketchWrapper;

const StyledSketch = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`;


const TitleStyle = styled.h1`
  :hover {
    color: red;
  }

  font-family: GrotesqueMT;
  font-style: italic;
  font-size: 1.5em;
  color: white;
  text-decoration: none;
  margin: 0;
`;

const SubStyle = styled.h1`
  font-family: GrotesqueMT;
  font-style: italic;
  font-size: .5em;
  color: white;
  margin: 0;
`;
