import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as THREE from 'three'
import styled from 'styled-components'
import ReactResizeDetector from 'react-resize-detector'


class Renderer extends Component {
  static propTypes = {
    initScene: PropTypes.func,
    onResize: PropTypes.func,
    renderScene: PropTypes.func,
  }

  static defaultProps = {
    initScene: () => {},
    onResize: () => {},
    renderScene: () => {},
  }

  constructor(props, context) {
    super(props, context)
  }

  componentDidMount = () => {
    this.canvas = document.getElementById('canvas')
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    })

    this.gl = this.renderer.context
    this.props.initScene(this.renderer, this.gl)
    this.frameId = requestAnimationFrame(this.handleAnimationFrame)
  }

  componentWillUnmount = () => {
    cancelAnimationFrame(this.frameId)
  }

  handleResize = (width, height) => {
    this.renderer.setSize(width, height)
    this.props.onResize(this.renderer, this.gl, { width, height })
  }

  handleAnimationFrame = () => {
    this.props.renderScene(this.renderer, this.gl)
    this.frameId = window.requestAnimationFrame(this.handleAnimationFrame)
  }

  render = () => {
    return (
      <>
        <Canvas id={'canvas'} />
        <ReactResizeDetector
          onResize={this.handleResize}
          handleWidth={true}
          handleHeight={true}
        />
      </>
    )
  }
}

export default Renderer

const Canvas = styled.canvas`
  width: 100vw;
  height: 100vh;
  display: block;
`
