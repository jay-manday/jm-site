import React from 'react';
import p5 from 'p5';

export default class P5Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {
      width: 200,
    };
  }

  updateDimensions() {
    console.log(`updating dimensions: ${window.innerWidth} `)
    if(window.innerWidth < 600) {
      this.setState({ width: window.innerWidth/4 })
    } else {
      let update_width = window.innerWidth/2;
      this.setState({ width: update_width });
    }
  }

  componentWillReceiveProps(newprops) {
    if(this.props.sketch !== newprops.sketch){
      this.wrapper.removeChild(this.wrapper.childNodes[0]);
      this.canvas = new p5(newprops.sketch, this.wrapper);
    }
    if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
    }
  }

  componentDidMount(props) {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
    console.log('added event listener');

    this.canvas = new p5(this.props.sketch, this.wrapper);
    if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
    }
  }

  componentWillUnmount(props) {
    window.removeEventListener("resize", this.updateDimensions);
    console.log('removed event listener');
  }

  render(props) {
    return <div className={this.props.name}  width={this.state.width} ref={wrapper => this.wrapper = wrapper}></div>;
  }
}
