import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'grid-styled';
import styled from 'styled-components';
import P5Wrapper from 'react-p5-wrapper';


class SketchWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {
      ready: false,
      width: undefined,
      heigh: undefined,
    }
  }

  componentDidMount() {
    const height = document.getElementById('canvas').clientWidth;
    const width = document.getElementById('canvas').clientWidth;
    window.addEventListener('Resize', this.updateDimensions);
    console.log(`mounted P5Wrapper`)
    this.setState({
      ready: true,
      width,
      height
    })
  }

  updateDimensions(width, height) {
    console.log(`updating dimensions: ${window.innerWidth}`);
    this.setState({ height, width });
    console.log("changed");
  }

  compnentWillUnmount() {
    window.removeEventListener('Resize', this.updateDimensions);
    console.log(`removed event listener`)
  }

  render() {
    console.log(`rendered P5Wrapper`)
    return (

      <Box>

        <StyledSketch>
          <Box w={1}>
            <div className="canvas-wrapper" id="canvas">
              <Link to={this.props.href} >
                <P5Wrapper sketch={this.props.sketch}  />
              </Link>
            </div>
          </Box>
        </StyledSketch>

        <Box pt={3}>
          <Link to={this.props.href} >
            <TitleStyle>
              {this.props.title}
            </TitleStyle>
          </Link>
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
@media (max-width: 48em) {
  display:inline-block;
  font-size: 1.25em;
  text-decoration: underline;
  text-decoration-color: #0000ee;

}
  :hover {
    color: red;
  }

  font-family: GrotesqueMT;
  font-style: italic;
  font-size: 2em;
  color: white;
  text-decoration: underline;
  text-decoration-color: #0000ee;
  margin: 0;

  display:inline-block;
  text-decoration: underline;
  text-decoration-color: #0000ee;
  color: white;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0px;

  :hover {
    color: red;
  }
`;

const SubStyle = styled.h1`
@media (max-width: 48em) {
  display:inline-block;
  font-size: 1em;
}
  font-family: GrotesqueMT;
  font-style: italic;
  font-size: 1.5em;
  color: white;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0;
`;
