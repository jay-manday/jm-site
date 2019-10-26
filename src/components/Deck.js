import React, { PureComponent } from 'react'
import DeckGL from 'deck.gl'

import { PLYWorkerLoader, PLYLoader } from '@loaders.gl/ply'
import { load, registerLoaders } from '@loaders.gl/core'

import {
  PLY_SAMPLE,
  INITIAL_VIEW_STATE,
  transitionInterpolator,
  renderLayers,
  colors,
  orbit,
} from '../utils'


export default class Deck extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      viewState: INITIAL_VIEW_STATE,
      pointsCount: 0,
      points: null,
    }

    registerLoaders(PLYWorkerLoader)
    this.onLoad = this.onLoad.bind(this)
    this.onViewStateChange = this.onViewStateChange.bind(this)
    this.rotateCamera = this.rotateCamera.bind(this)
    load(PLY_SAMPLE, PLYLoader).then(this.onLoad)
  }

  onViewStateChange = viewState => this.setState({ viewState })

  rotateCamera() {
    const { viewState } = this.state
    this.setState({
      viewState: {
        ...viewState,
        transitionDuration: 600,
        transitionInterpolator,
        rotationOrbit: viewState.rotationOrbit + 30,
        onTransitionEnd: this.rotateCamera,
      },
    })
  }

  onLoad({ header, attributes }) {
    let { viewState } = this.state
    this.setState({
      pointsCount: header.vertexCount,
      points: attributes.POSITION.value,
      viewState,
    }, this.rotateCamera)
  }

  render() {
    return (
      <DeckGL
        views={orbit}
        controller={true}
        viewState={this.state.viewState}
        onViewStateChange={this.onViewStateChange}
        layers={renderLayers(this.state)}
        parameters={colors}
      />
    )
  }
}
