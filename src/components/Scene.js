import React, { Component } from 'react'
import styled from 'styled-components'
import * as THREE from 'three'

const OrbitControls = require('three-orbit-controls')(THREE)

import Renderer from './Renderer'
import PLYLoader from '../utils/PLYLoader'
import {
  ECEFToLonLatAlt,
  determineColor,
} from '../utils'

class Scene extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      geometry: {},
    }
  }

  componentDidMount() {
    this.loadModel()
  }

  onResize = (renderer, gl, { width, height }) => {
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }

  initScene = () => {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(90, 16 / 9, 1, 1000)
    this.controls = new OrbitControls(this.camera, this.renderer)
    this.camera.translateX(50)
    this.camera.translateY(50)
    this.camera.translateZ(125)

    const geometry = this.buildGeometry()
    const material = new THREE.PointsMaterial({
      vertexColors: THREE.VertexColors,
      size: 1,
    })

    const points = new THREE.Points(geometry, material)
    this.rotateModel(points)
    this.scene.add(points)
    this.initializeOrbits()
  }

  initializeOrbits = () => {
    this.controls.rotateSpeed = 1.0
    this.controls.zoomSpeed = 1.2
    this.controls.panSpeed = 0.8
  }

  loadModel = () => {
    const loader = new PLYLoader()
    const url = 'https://s3.amazonaws.com/web-ui-engineering-challenge/point-cloud.ply'
    loader.load(url, geometry => {
      this.setState({ geometry })
      this.initScene()
    })
  }

  renderScene = renderer => renderer.render(this.scene, this.camera)

  buildGeometry = () => {
    const { geometry } = this.state
    const g = new THREE.BufferGeometry()
    if (typeof geometry.vertices !== 'undefined') {
      const particles = geometry.vertices.length
      const positions = new Float32Array(particles * 3)
      const colors = new Float32Array(particles * 3)

      for (let i = 0; i < positions.length; i += 3) {
        let vI = i / 3
        const center = geometry.boundingSphere.center
        positions[i] = geometry.vertices[vI].x - center.x
        positions[i + 1] = geometry.vertices[vI].y - center.y
        positions[i + 2] = geometry.vertices[vI].z - center.z

        colors[i] = geometry.colors[vI].r
        colors[i + 1] = geometry.colors[vI].g
        colors[i + 2] = geometry.colors[vI].b
      }

      g.addAttribute('position', new THREE.BufferAttribute(positions, 3))
      g.addAttribute('color', new THREE.BufferAttribute(colors, 3))
      this.scene.add(g)
    }
    return g
  }

  rgbColor = () => {
    const geometry = this.buildGeometry()
    let colorArray = geometry.getAttribute('color').array
    for (let i = 0; i < colorArray.length; i += 3) {
      const vI = i / 3
      colorArray[i] = geometry.attributes.color.array[vI]
      colorArray[i + 1] = geometry.attributes.color.array[vI]
      colorArray[i + 2] = geometry.attributes.color.array[vI]
    }
  }

  altitudeColor = () => {
    const geometry = this.buildGeometry()
    let colorArray = geometry.getAttribute('color').array
    for (let i = 0; i < colorArray.length; i += 3) {
      const ECEF = {
        x: colorArray[i],
        y: colorArray[i + 1],
        z: colorArray[i + 2],
      }

      const LLA = ECEFToLonLatAlt(ECEF)
      const color = determineColor(LLA.alt)
      colorArray[i] = color[0]
      colorArray[i + 1] = color[1]
      colorArray[i + 2] = color[2]
    }
  }

  rotateModel = (points) => {
    points.rotation.z = 3.7821929249
    points.rotation.x = -.660
    points.rotation.y = .156
  }

  render = () => {
    return (
      <Container>
        <Renderer
          onResize={this.onResize}
          initScene={this.initScene}
          renderScene={this.renderScene}
        />
      </Container>
    )
  }
}

export default Scene

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`
